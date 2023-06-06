from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from account.serializers import UserUpdateSerializer, SendPasswordResetEmailSerializer, UserPasswordResetSerializer, UserRegistrationSerializer, UserLoginSerializer, UserProfileSerializer, UserChangePasswordSerializer
from django.contrib.auth import authenticate
from account.renderers import UserRenderer
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import IsAuthenticated
from autosallonApp.models import ContactInfo
from rest_framework import generics
from django.contrib.auth.models import User

# Generate Token Manually
def get_tokens_for_user(user):
  refresh = RefreshToken.for_user(user)
  return {
    'refresh': str(refresh),
    'access': str(refresh.access_token),
  }

class UserRegistrationView(APIView):
  renderer_classes = [UserRenderer]
  def post(self, request, format=None):
    serializer = UserRegistrationSerializer(data=request.data)

    if serializer.is_valid(raise_exception=True):
      user = serializer.save()

      print(user.id)

      if 'address' in request.data:
        print(request.data['address'])
        if ContactInfo.objects.filter(user_id=user.id).exists():
          contact_info=ContactInfo.objects.filter(user_id=user.id).update(address=request.data['address'])
        else:
          contact_info=ContactInfo.objects.create(user_id=user.id, address=request.data['address'])

      if 'phone' in request.data:
        print(request.data['phone'])
        if ContactInfo.objects.filter(user_id=user.id).exists():
          contact_info=ContactInfo.objects.filter(user_id=user.id).update(phone=request.data['phone'])
        else:
          contact_info=ContactInfo.objects.create(user_id=user.id, phone=request.data['phone'])

      token = get_tokens_for_user(user)
      return Response({'token': token, 'msg':'Registration Success'}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class UserLoginView(APIView):
  renderer_classes = [UserRenderer]
  def post(self, request, format=None):
    serializer = UserLoginSerializer(data=request.data)

    if serializer.is_valid(raise_exception=True):
      # email = serializer.data.get('email')
      username = serializer.data.get('username')
      password = serializer.data.get('password')
      user = authenticate(username=username, password=password)

      if user is not None:
        token = get_tokens_for_user(user)
        return Response({'token':token, 'msg':'Login Success'}, status=status.HTTP_200_OK)
      else:
        return Response({'errors':{'non_field_errors':['Username or password is not valid']}}, status=status.HTTP_404_NOT_FOUND)

class UserProfileView(APIView):
  renderer_classes = [UserRenderer]
  permission_classes = [IsAuthenticated]
  def get(self, request, format=None):
    serializer = UserProfileSerializer(request.user)
    return Response(serializer.data, status=status.HTTP_200_OK)
  
class UserChangePasswordView(APIView):
  renderer_classes = [UserRenderer]
  permission_classes = [IsAuthenticated]
  def post(self, request, format=None):
    serializer = UserChangePasswordSerializer(data=request.data, context={'user':request.user})

    if serializer.is_valid(raise_exception=True):
      return Response({'msg':'Password Changed Successfully'}, status=status.HTTP_200_OK)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class SendPasswordResetEmailView(APIView):
  renderer_classes = [UserRenderer]
  def post(self, request, format=None):
    serializer = SendPasswordResetEmailSerializer(data=request.data)
    if serializer.is_valid(raise_exception=True):
      return Response({'msg': 'Link for password reset was sent! Please check your email'}, status=status.HTTP_200_OK)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class UserPasswordResetView(APIView):
  renderer_classes = [UserRenderer]
  def post(self, request, uid, token, format=None):
    serializer = UserPasswordResetSerializer(data=request.data, context={'uid':uid, 'token':token})

    if serializer.is_valid(raise_exception=True):
      return Response({'msg':'Password Changed Successfully'}, status=status.HTTP_200_OK)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class UserUpdateView(generics.UpdateAPIView):
  queryset = User.objects.all()
  serializer_class = UserUpdateSerializer
  lookup_field = 'pk'
    
  def perform_update(self, serializer):
    user_id = self.request.data['id']
    email = self.request.data['email']
    
    if serializer.is_valid(raise_exception=True):
      instance = serializer.save()
      address = self.request.data['address']
      phone = self.request.data['phone']

      ContactInfo.objects.filter(user_id=user_id).update(address=address, phone=phone)

      return Response({'msg':'Settings Changed Successfully'}, status=status.HTTP_200_OK)