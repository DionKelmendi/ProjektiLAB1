from django.shortcuts import render
from django.shortcuts import redirect
from rest_framework import generics
from ..serializers import CarSerializer, MakeSerializer
from ..models import Car
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from rest_framework import filters
from django_filters.rest_framework import DjangoFilterBackend

# Create your views here.

#Car CRUD
#Car Read One Instance
class CarDetailAPIView(generics.RetrieveAPIView):
  queryset = Car.objects.all()
  serializer_class = CarSerializer

# Get Makes and Make Count
class CarMakeAPIView(generics.ListAPIView):
  queryset = Car.objects.all()[:1]
  serializer_class = MakeSerializer

#Car Read All Instances and Create    
class CarAPIView(generics.ListAPIView):
  queryset = Car.objects.all()
  serializer_class = CarSerializer
  filter_backends = [filters.SearchFilter, DjangoFilterBackend, filters.OrderingFilter]
  search_fields = ['make', 'model', '=category_id__name', '=year']
  filterset_fields = ['color', 'mileage', 'price' ]
  ordering_fields = ['sold', 'price', 'mileage', 'year']
  # add lte to mileage and price

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

#Get Car Make by ID
def getMake(id):
   queryset = Car.objects.get(id=id)
   return queryset.make

#Get Car Model by ID
def getModel(id):
   queryset = Car.objects.get(id=id)
   return queryset.model