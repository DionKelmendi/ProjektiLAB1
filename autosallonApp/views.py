from django.shortcuts import render
from rest_framework import generics
from .serializers import CategorySerializer, CarSerializer, UserSerializer, ContactInfoSerializer, DistributorSerializer, WorkerSerializer, FavoriteSerializer, ReviewSerializer, SaleSerializer, Dis_TransactionSerializer
from .models import Category, Car, User, ContactInfo, Distributor, Worker, Favorite, Review, Sale, Dis_Transaction

# Create your views here.
def index(request):
  return render(request, 'index.html')

class CategoryView(generics.ListCreateAPIView):
  queryset = Category.objects.all()
  serializer_class = CategorySerializer

class CarView(generics.ListCreateAPIView):
  queryset = Car.objects.all()
  serializer_class = CarSerializer

class UserView(generics.ListCreateAPIView):
  queryset = User.objects.all()
  serializer_class = UserSerializer

class ContactInfoView(generics.ListCreateAPIView):
  queryset = ContactInfo.objects.all()
  serializer_class = ContactInfoSerializer

class DistributorView(generics.ListCreateAPIView):
  queryset = Distributor.objects.all()
  serializer_class = DistributorSerializer

class WorkerView(generics.ListCreateAPIView):
  queryset = Worker.objects.all()
  serializer_class = WorkerSerializer

class FavoriteView(generics.ListCreateAPIView):
  queryset = Favorite.objects.all()
  serializer_class = FavoriteSerializer

class ReviewView(generics.ListCreateAPIView):
  queryset = Review.objects.all()
  serializer_class = ReviewSerializer

class SaleView(generics.ListCreateAPIView):
  queryset = Sale.objects.all()
  serializer_class = SaleSerializer

class Dis_TransactionView(generics.ListCreateAPIView):
  queryset = Dis_Transaction.objects.all()
  serializer_class = Dis_TransactionSerializer  
