from django.shortcuts import render
from django.shortcuts import redirect
from rest_framework import generics
from ..serializers import DistributorSerializer
from ..models import Distributor
from rest_framework.response import Response
from django.shortcuts import get_object_or_404

# Create your views here.

#Distributor CRUD
#Distributor Read One Instance
class DistributorDetailAPIView(generics.RetrieveAPIView):
  queryset = Distributor.objects.all()
  serializer_class = DistributorSerializer

#Distributor Read All Instances and Create    
class DistributorAPIView(generics.ListCreateAPIView):
  queryset = Distributor.objects.all()
  serializer_class = DistributorSerializer

  def perform_create(self, serializer):
    name = serializer.validated_data.get('name')
    email = serializer.validated_data.get('email')
    address = serializer.validated_data.get('address')
    phone = serializer.validated_data.get('phone')
    serializer.save()

#Distributor Update
class DistributorUpdateAPIView(generics.UpdateAPIView):
  queryset = Distributor.objects.all()
  serializer_class = DistributorSerializer
  lookup_field = 'pk'

  def perform_update(self, serializer):
    instance = serializer.save()

#Distributor Destroy
class DistributorDestroyAPIView(generics.DestroyAPIView):
    queryset = Distributor.objects.all()
    serializer_class = DistributorSerializer
    lookup_field = 'pk'

    def perform_destroy(self, instance):
        super().perform_destroy(instance)

#Get Distributor Name by ID
def getName(id):
   queryset = Distributor.objects.get(id=id)
   return queryset.name