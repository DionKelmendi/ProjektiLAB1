from rest_framework import serializers
from account.models import User

class UserRegistrationSerializer(serializers.ModelSerializer):

  password2 = serializers.CharField(style={'input_type':'password'}, write_only=True)
    
  class Meta:
    model = User;
    fields=['email', 'name', 'password', 'password2', 'tc']
    extra_kwargs={
      'password':{'write_only':True}
    }
  # Password validation
  def validate(self, data):
    password = data.get('password')
    password2 = data.get('password2')

    if password != password2:
      raise serializers.ValidationError("Password and Confirm Password didn't match")
    return data
  
  def create(self, validate_data):
    return User.objects.create_user(**validate_data)
  
class UserLoginSerializer(serializers.ModelSerializer):
  email = serializers.EmailField(max_length=255)
  class Meta:
    model = User
    fields = ["email", "password"]

class UserProfileSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = ['id', 'email', 'name']

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

