from rest_framework import serializers
from .models import Category, Car, User, ContactInfo, Distributor, Worker, Favorite, Review, Sale, Dis_Transaction, CarImages

class CategorySerializer(serializers.ModelSerializer):
  class Meta:
    model = Category
    fields = ('id', 'name')

class CarSerializer(serializers.ModelSerializer):

  imageName = serializers.SerializerMethodField('getImageName')

  def getImageName(self, foo):

    image = foo.image.name.split("/")[3]
    return str(image)

  class Meta:
    model = Car
    fields = ('id', 'make', 'model', 'price', 'mileage', 'year', 'color', 'registration_date', 'sold', 'category', 'image', 'imageName')

class CarImageSerializer(serializers.ModelSerializer):
  class Meta:
    model = CarImages
    fields = ('id', 'car', 'image' )    

class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = ('id', 'name', 'email', 'password', 'registration_date')

class ContactInfoSerializer(serializers.ModelSerializer):
  class Meta:
    model = ContactInfo
    fields = ('id', 'user_id', 'address', 'phone')

class DistributorSerializer(serializers.ModelSerializer):
  class Meta:
    model = Distributor
    fields = ('id', 'name', 'email', 'address', 'phone')

class WorkerSerializer(serializers.ModelSerializer):
  class Meta:
    model = Worker
    fields = ('id', 'name', 'email', 'address', 'phone', 'salary', 'position')

class FavoriteSerializer(serializers.ModelSerializer):
  class Meta:
    model = Favorite
    fields = ('id', 'user_id', 'car_id', 'favorite_date')

class ReviewSerializer(serializers.ModelSerializer):
  class Meta:
    model = Review
    fields = ('id', 'user_id', 'car_id', 'rating', 'review_date', 'comment')

class SaleSerializer(serializers.ModelSerializer):
  class Meta:
    model = Sale
    fields = ('id', 'car_id', 'user_id', 'worker_id', 'price', 'sale_date')

class Dis_TransactionSerializer(serializers.ModelSerializer):
  class Meta:
    model = Dis_Transaction
    fields = ('id', 'distributor_id', 'car_id', 'amount', 'transaction_date')
