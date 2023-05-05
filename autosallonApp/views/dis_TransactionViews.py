from django.shortcuts import render
from django.shortcuts import redirect
from rest_framework import generics
from ..serializers import Dis_TransactionSerializer
from ..models import Dis_Transaction
from rest_framework.response import Response
from django.shortcuts import get_object_or_404

# Create your views here.

#Dis_Transaction CRUD
#Dis_Transaction Read One Instance
class Dis_TransactionDetailAPIView(generics.RetrieveAPIView):
  queryset = Dis_Transaction.objects.all()
  serializer_class = Dis_TransactionSerializer

#Dis_Transaction Read All Instances and Create    
class Dis_TransactionAPIView(generics.ListCreateAPIView):
  queryset = Dis_Transaction.objects.all()
  serializer_class = Dis_TransactionSerializer

  def perform_create(self, serializer):
    distributor_id = serializer.validated_data.get('distributor_id')
    car_id = serializer.validated_data.get('car_id')
    amount = serializer.validated_data.get('amount')
    serializer.save()

#Dis_Transaction Update
class Dis_TransactionUpdateAPIView(generics.UpdateAPIView):
  queryset = Dis_Transaction.objects.all()
  serializer_class = Dis_TransactionSerializer
  lookup_field = 'pk'

  def perform_update(self, serializer):
    instance = serializer.save()

#Dis_Transaction Destroy
class Dis_TransactionDestroyAPIView(generics.DestroyAPIView):
    queryset = Dis_Transaction.objects.all()
    serializer_class = Dis_TransactionSerializer
    lookup_field = 'pk'

    def perform_destroy(self, instance):
        super().perform_destroy(instance)