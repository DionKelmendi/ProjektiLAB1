from django.shortcuts import render
from django.shortcuts import redirect
from rest_framework import generics
from ..serializers import MessageSerializer
from ..models import Message
from rest_framework.response import Response
from django.shortcuts import get_object_or_404

#Message Read All Instances and Create    
class MessageAPIView(generics.ListCreateAPIView):
  queryset = Message.objects.all()
  serializer_class = MessageSerializer

  def perform_create(self, serializer):
    name = serializer.validated_data.get('name')
    email = serializer.validated_data.get('email')
    phone = serializer.validated_data.get('phone')
    title = serializer.validated_data.get('title')
    message = serializer.validated_data.get('message')
    serializer.save()