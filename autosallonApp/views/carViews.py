from django.shortcuts import render
from django.shortcuts import redirect
from rest_framework import generics
from ..serializers import CarSerializer
from ..models import Car
from rest_framework.response import Response
from django.shortcuts import get_object_or_404

# Create your views here.

#Car CRUD
#Car Read One Instance
class CarDetailAPIView(generics.RetrieveAPIView):
  queryset = Car.objects.all()
  serializer_class = CarSerializer

#Car Read All Instances and Create    
class CarAPIView(generics.ListCreateAPIView):
  queryset = Car.objects.all()
  serializer_class = CarSerializer

  def perform_create(self, serializer):
    make = serializer.validated_data.get('make')
    model = serializer.validated_data.get('model')
    price = serializer.validated_data.get('price')
    mileage = serializer.validated_data.get('mileage')
    year = serializer.validated_data.get('year')
    color = serializer.validated_data.get('color')
    sold = serializer.validated_data.get('sold')
    category_id = serializer.validated_data.get('category_id')
    serializer.save()

#Car Update
class CarUpdateAPIView(generics.UpdateAPIView):
  queryset = Car.objects.all()
  serializer_class = CarSerializer
  lookup_field = 'pk'

  def perform_update(self, serializer):
    instance = serializer.save()

#Car Destroy
class CarDestroyAPIView(generics.DestroyAPIView):
    queryset = Car.objects.all()
    serializer_class = CarSerializer
    lookup_field = 'pk'

    def perform_destroy(self, instance):
        super().perform_destroy(instance)