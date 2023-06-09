from django.shortcuts import render
from django.shortcuts import redirect
from rest_framework import serializers
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
    user_id = serializer.validated_data.get('user')
    car_id = serializer.validated_data.get('car')
    if Favorite.objects.filter(user_id=user_id, car_id=car_id).exists():
      raise serializers.ValidationError("Already favorited!")
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

# Favorite Read All Instances For One User
class FavoriteUserAPIView(generics.ListAPIView):
    queryset = Favorite.objects.all()
    serializer_class = CarSerializer
    lookup_field = 'user_id'

    def get_queryset(self):
      car_ids = Favorite.objects.filter(user_id=self.kwargs['user_id']).order_by('-favorite_date').values_list('car_id', flat=True)[:3]
      cars = []
        
      for car_id in car_ids:
        cars.append(get_object_or_404(Car, id=car_id))

      return cars;

class FavoriteUserAllAPIView(generics.ListAPIView):
    queryset = Favorite.objects.all()
    serializer_class = CarSerializer
    lookup_field = 'user_id'

    def get_queryset(self):
        car_ids = Favorite.objects.filter(user_id=self.kwargs['user_id']).order_by('-favorite_date').values_list('car_id', flat=True)
        cars = []

        for car_id in car_ids:
            cars.append(get_object_or_404(Car, id=car_id))
        return cars

    def list(self, request, *args, **kwargs):
        car_ids = Favorite.objects.filter(user_id=self.kwargs['user_id']).order_by('-favorite_date').values_list('car_id', flat=True)
        queryset = self.get_queryset()
        serializer = self.serializer_class(queryset, many=True)

        fav_ids = Favorite.objects.filter(user_id=self.kwargs['user_id'], car_id__in=car_ids).order_by('-favorite_date').values_list('id', flat=True)
        # Create a dictionary to hold the response data
        response_data = {
            'cars': serializer.data,
            'fav_ids': list(fav_ids)
        }

        return Response(response_data)