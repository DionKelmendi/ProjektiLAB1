from django.shortcuts import render
from django.shortcuts import redirect
from rest_framework import generics
from ..serializers import WorkerSerializer
from ..models import Worker
from rest_framework.response import Response
from django.shortcuts import get_object_or_404

# Create your views here.

#Worker CRUD
#Worker Read One Instance
class WorkerDetailAPIView(generics.RetrieveAPIView):
  queryset = Worker.objects.all()
  serializer_class = WorkerSerializer

#Worker Read All Instances and Create    
class WorkerAPIView(generics.ListCreateAPIView):
  queryset = Worker.objects.all()
  serializer_class = WorkerSerializer

  def perform_create(self, serializer):
    name = serializer.validated_data.get('name')
    email = serializer.validated_data.get('email')
    address = serializer.validated_data.get('address')
    phone = serializer.validated_data.get('phone')
    salary = serializer.validated_data.get('salary')
    position = serializer.validated_data.get('position')
    serializer.save()

#Worker Update
class WorkerUpdateAPIView(generics.UpdateAPIView):
  queryset = Worker.objects.all()
  serializer_class = WorkerSerializer
  lookup_field = 'pk'

  def perform_update(self, serializer):
    instance = serializer.save()

#Worker Destroy
class WorkerDestroyAPIView(generics.DestroyAPIView):
    queryset = Worker.objects.all()
    serializer_class = WorkerSerializer
    lookup_field = 'pk'

    def perform_destroy(self, instance):
        super().perform_destroy(instance)

#Get Worker Name by ID
def getName(id):
   queryset = Worker.objects.get(id=id)
   return queryset.name