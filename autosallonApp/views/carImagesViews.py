from django.shortcuts import render
from django.shortcuts import redirect
from rest_framework import generics
from ..serializers import CarImageSerializer
from ..models import CarImages
from rest_framework.response import Response
from django.shortcuts import get_object_or_404

# CarImage Create
class CarImageCreateAPIView(generics.CreateAPIView):
    queryset = CarImages.objects.all()
    serializer_class = CarImageSerializer

# CarImage Read One Instance
class CarImageDetailAPIView(generics.RetrieveAPIView):
    queryset = CarImages.objects.all()
    serializer_class = CarImageSerializer
    lookup_field = 'pk'

# CarImage Update
class CarImageUpdateAPIView(generics.UpdateAPIView):
    queryset = CarImages.objects.all()
    serializer_class = CarImageSerializer
    lookup_field = 'pk'

# CarImage Destroy
class CarImageDestroyAPIView(generics.DestroyAPIView):
    queryset = CarImages.objects.all()
    serializer_class = CarImageSerializer
    lookup_field = 'pk'

    def perform_destroy(self, instance):
        super().perform_destroy(instance)