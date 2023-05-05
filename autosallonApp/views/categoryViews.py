from django.shortcuts import render
from django.shortcuts import redirect
from rest_framework import generics
from ..serializers import CategorySerializer
from ..models import Category
from rest_framework.response import Response
from django.shortcuts import get_object_or_404

# Create your views here.

#Category CRUD
#Category Read One Instance
class CategoryDetailAPIView(generics.RetrieveAPIView):
  queryset = Category.objects.all()
  serializer_class = CategorySerializer

#Category Read All Instances and Create    
class CategoryAPIView(generics.ListCreateAPIView):
  queryset = Category.objects.all()
  serializer_class = CategorySerializer

  def perform_create(self, serializer):
    name = serializer.validated_data.get('name')
    serializer.save()

#Category Update
class CategoryUpdateAPIView(generics.UpdateAPIView):
  queryset = Category.objects.all()
  serializer_class = CategorySerializer
  lookup_field = 'pk'

  def perform_update(self, serializer):
    instance = serializer.save()

#Category Destroy
class CategoryDestroyAPIView(generics.DestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    lookup_field = 'pk'

    def perform_destroy(self, instance):
        super().perform_destroy(instance)