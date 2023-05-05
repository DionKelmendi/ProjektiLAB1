from django.shortcuts import render
from django.shortcuts import redirect
from rest_framework import generics
from ..serializers import SaleSerializer
from ..models import Sale
from rest_framework.response import Response
from django.shortcuts import get_object_or_404

# Create your views here.

#Sale CRUD
#Sale Read One Instance
class SaleDetailAPIView(generics.RetrieveAPIView):
  queryset = Sale.objects.all()
  serializer_class = SaleSerializer

#Sale Read All Instances and Create    
class SaleAPIView(generics.ListCreateAPIView):
  queryset = Sale.objects.all()
  serializer_class = SaleSerializer

  def perform_create(self, serializer):
    car_id = serializer.validated_data.get('car_id')
    user_id = serializer.validated_data.get('user_id')
    worker_id = serializer.validated_data.get('worker_id')
    price = serializer.validated_data.get('price')
    serializer.save()

#Sale Update
class SaleUpdateAPIView(generics.UpdateAPIView):
  queryset = Sale.objects.all()
  serializer_class = SaleSerializer
  lookup_field = 'pk'

  def perform_update(self, serializer):
    instance = serializer.save()

#Sale Destroy
class SaleDestroyAPIView(generics.DestroyAPIView):
    queryset = Sale.objects.all()
    serializer_class = SaleSerializer
    lookup_field = 'pk'

    def perform_destroy(self, instance):
        super().perform_destroy(instance)