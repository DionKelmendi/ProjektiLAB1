from django.shortcuts import render
from django.shortcuts import redirect
from rest_framework import generics
from ..serializers import UserSerializer
from ..models import User
from rest_framework.response import Response
from django.shortcuts import get_object_or_404

# Create your views here.

#User CRUD
#User Read One Instance
class UserDetailAPIView(generics.RetrieveAPIView):
  queryset = User.objects.all()
  serializer_class = UserSerializer

#User Read All Instances and Create    
class UserAPIView(generics.ListCreateAPIView):
  queryset = User.objects.all()
  serializer_class = UserSerializer

  def perform_create(self, serializer):
    name = serializer.validated_data.get('name')
    email = serializer.validated_data.get('email')
    password = serializer.validated_data.get('password')
    serializer.save()

#User Update
class UserUpdateAPIView(generics.UpdateAPIView):
  queryset = User.objects.all()
  serializer_class = UserSerializer
  lookup_field = 'pk'

  def perform_update(self, serializer):
    instance = serializer.save()

#User Destroy
class UserDestroyAPIView(generics.DestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    lookup_field = 'pk'

    def perform_destroy(self, instance):
        super().perform_destroy(instance)

#Get User Name by ID
def getName(id):
   queryset = User.objects.get(id=id)
   return queryset.username