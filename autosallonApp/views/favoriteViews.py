from django.shortcuts import render
from django.shortcuts import redirect
from rest_framework import generics
from ..serializers import FavoriteSerializer, CarSerializer
from ..models import Favorite, Car
from rest_framework.response import Response
from django.shortcuts import get_object_or_404

# favorite CRUD
# favorite Read One Instance
class FavoriteDetailAPIView(generics.RetrieveAPIView):
  queryset = Favorite.objects.all()
  serializer_class = FavoriteSerializer

# favorite Read All Instances and Create    
class FavoriteAPIView(generics.ListCreateAPIView):
  queryset = Favorite.objects.all()
  serializer_class = FavoriteSerializer

  def perform_create(self, serializer):
    user_id = serializer.validated_data.get('user_id')
    car_id = serializer.validated_data.get('car_id')
    serializer.save()

# favorite Update
class FavoriteUpdateAPIView(generics.UpdateAPIView):
  queryset = Favorite.objects.all()
  serializer_class = FavoriteSerializer
  lookup_field = 'pk'

  def perform_update(self, serializer):
    instance = serializer.save()

# favorite Destroy
class FavoriteDestroyAPIView(generics.DestroyAPIView):
    queryset = Favorite.objects.all()
    serializer_class = FavoriteSerializer
    lookup_field = 'pk'

    def perform_destroy(self, instance):
        super().perform_destroy(instance)

# Favorite Read All Instances From One User
class FavoriteUserAPIView(generics.ListAPIView):
    queryset = Favorite.objects.all()
    serializer_class = CarSerializer
    lookup_field = 'user_id'

    def get_queryset(self):
      car_ids = Favorite.objects.filter(user_id=self.kwargs['user_id']).order_by('-favorite_date').values_list('car_id', flat=True)[:3]
      cars = []
        
      for car_id in car_ids:
        cars.append(get_object_or_404(Car, id=car_id))

      print(cars)

      return cars;