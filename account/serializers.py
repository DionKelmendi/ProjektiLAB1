from django.forms import ValidationError
from rest_framework import serializers
from django.contrib.auth.models import User
from django.utils.encoding import smart_str, force_bytes, DjangoUnicodeDecodeError
from django.utils.http import urlsafe_base64_decode, urlsafe_base64_encode
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from autosallon.utils import Util

class UserRegistrationSerializer(serializers.ModelSerializer):

  password2 = serializers.CharField(style={'input_type':'password'}, write_only=True)

  class Meta:
    model = User
    fields=['email', 'username', 'password', 'password2', 'first_name', 'last_name']
    extra_kwargs={
      'password':{'write_only':True}
    }
  # Password validation
  def validate(self, data):
    password = data.get('password')
    password2 = data.get('password2')
    email = data.get('email')

    if password != password2:
      raise serializers.ValidationError("Password and Confirm Password didn't match")

    if User.objects.filter(email=email).exists():
      raise serializers.ValidationError("Email already exists")
    return data
  
  def create(self, validate_data):
    return User.objects.create_user(**validate_data)
  
class UserLoginSerializer(serializers.ModelSerializer):
  # email = serializers.EmailField(max_length=255)
  username = serializers.CharField(max_length=255)
  class Meta:
    model = User
    fields = ["username", "password"]

class UserProfileSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = ['id', 'email', 'username', 'first_name', 'last_name']

class UserChangePasswordSerializer(serializers.ModelSerializer):
  password = serializers.CharField(max_length=255, style={'input_type':'password'}, write_only=True)
  password2 = serializers.CharField(max_length=255, style={'input_type':'password'}, write_only=True)
  
  class Meta:
    model = User
    fields = ['password', 'password2']
  
  def validate(self, data):
    password = data.get('password')
    password2 = data.get('password2')
    user = self.context.get('user')
    if password != password2:
      raise serializers.ValidationError("Password and Confirm Password didn't match")
    user.set_password(password)
    user.save()
    return data

class SendPasswordResetEmailSerializer(serializers.Serializer):
  email = serializers.EmailField(max_length=255)
  class Meta:
    fields = ['email']

  def validate(self, data):
    email = data.get('email')
    if User.objects.filter(email=email).exists():
      user = User.objects.get(email=email)
      uid = urlsafe_base64_encode(force_bytes(user.id))
      token = PasswordResetTokenGenerator().make_token(user)
      link = 'http://127.0.0.1:8000/account/resetpassword/'+ uid + '/' + token
      print(link)
      # Email part
      body = link
      data = {
        'subject':'Reset your password',
        'body':body,
        'to_email':user.email,
      }
      Util.send_email(data)
      return data
    else:
      raise ValidationError('You are not a Registered User')
    
class UserPasswordResetSerializer(serializers.Serializer):
  password = serializers.CharField(max_length=255, style={'input_type':'password'}, write_only=True)
  password2 = serializers.CharField(max_length=255, style={'input_type':'password'}, write_only=True)
  
  class Meta:
    model = User
    fields = ['password', 'password2']
  
  def validate(self, data):
    try:
      password = data.get('password')
      password2 = data.get('password2')
      uid = self.context.get('uid')
      token = self.context.get('token')
      if password != password2:
        raise serializers.ValidationError("Password and Confirm Password didn't match")
      id = smart_str(urlsafe_base64_decode(uid))
      user = User.objects.get(id=id)

      if not PasswordResetTokenGenerator().check_token(user, token):
        raise ValidationError("Token is not valid or has expired")
      user.set_password(password)
      user.save()
      return data
    except DjangoUnicodeDecodeError as identifier:
      PasswordResetTokenGenerator().check_token(user, token)
      raise ValidationError("Token is not valid or has expired")
    