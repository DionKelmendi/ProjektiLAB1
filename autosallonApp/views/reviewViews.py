from django.shortcuts import render
from django.shortcuts import redirect
from rest_framework import generics
from ..serializers import CarSerializer, ReviewSerializer, ReviewUserSerializer
from ..models import Car, Review
from rest_framework.response import Response
from django.shortcuts import get_object_or_404

# Create your views here.

#Review CRUD
#Review Read One Instance
class ReviewDetailAPIView(generics.RetrieveAPIView):
  queryset = Review.objects.all()
  serializer_class = ReviewSerializer

#Review Read All Instances and Create    
class ReviewAPIView(generics.ListCreateAPIView):
  queryset = Review.objects.all()
  serializer_class = ReviewSerializer

  def perform_create(self, serializer):
    user_id = serializer.validated_data.get('user_id')
    car_id = serializer.validated_data.get('car_id')
    rating = serializer.validated_data.get('rating')
    review_date = serializer.validated_data.get('review_date')
    comment = serializer.validated_data.get('comment')

#Review Update
class ReviewUpdateAPIView(generics.UpdateAPIView):
  queryset = Review.objects.all()
  serializer_class = ReviewSerializer
  lookup_field = 'pk'

  def perform_update(self, serializer):
    instance = serializer.save()

#Review Destroy
class ReviewDestroyAPIView(generics.DestroyAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
    lookup_field = 'pk'

    def perform_destroy(self, instance):
        super().perform_destroy(instance)

# Review Read All Instances From One User
class ReviewUserAPIView(generics.ListAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewUserSerializer
    lookup_field = 'user_id'

    def get_queryset(self):
      
      car_ids = Review.objects.filter(user_id=self.kwargs['user_id']).order_by('-review_date').values_list('car_id', flat=True)[:1]
      cars = []

      for car_id in car_ids:
        cars.append(get_object_or_404(Car, id=car_id))
      
      return Review.objects.filter(user_id=self.kwargs['user_id']).order_by('-review_date').values()[:1]
    
class ReviewUserAllAPIView(generics.ListAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewUserSerializer
    lookup_field = 'user_id'

    def get_queryset(self):
      
      car_ids = Review.objects.filter(user_id=self.kwargs['user_id']).order_by('-review_date').values_list('car_id', flat=True)
      cars = []

      for car_id in car_ids:
        cars.append(get_object_or_404(Car, id=car_id))
      
      return Review.objects.filter(user_id=self.kwargs['user_id']).order_by('-review_date').values()