from django.shortcuts import render
from django.shortcuts import redirect
from rest_framework import generics
from ..serializers import ReviewSerializer
from ..models import Review
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