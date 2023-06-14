from django.shortcuts import get_object_or_404
from rest_framework import serializers
from rest_framework import pagination
from .models import Category, Car, User, ContactInfo, Distributor, Worker, Favorite, Review, Sale, Dis_Transaction, CarImages, Message

class CategorySerializer(serializers.ModelSerializer):
  class Meta:
    model = Category
    fields = ('id', 'name')


class MakeSerializer(serializers.ModelSerializer):
    # count = serializers.SerializerMethodField('getCount')
    makes = serializers.SerializerMethodField('getMakes')

    def getMakes(self, obj):
        makes = Car.objects.values_list('make', flat=True).distinct()
        count = []
        for m in makes:
          x = Car.objects.filter(make=m).values_list('make', flat=True).count()
          count.append(x)
        return makes, count


    class Meta:
        model = Car
        fields = ('id', 'makes')

class CategorySerializer(serializers.ModelSerializer):
    # count = serializers.SerializerMethodField('getCount')
    categories = serializers.SerializerMethodField('getCategories')

    def getCategories(self, obj):
        categories = Car.objects.values_list('category__name', flat=True).distinct()
        count = []
        for c in categories:
          x = Car.objects.filter(category__name=c).values_list('category', flat=True).count()
          count.append(x)
        return categories, count

    class Meta:
        model = Car
        fields = ('id', 'categories')


class CarSerializer(serializers.ModelSerializer):

  imageName = serializers.SerializerMethodField('getImageName')

  def getImageName(self, foo):

    image = foo.image.name.split("/")[3]
    return str(image)

  class Meta:
    model = Car
    fields = ('id', 'make', 'model', 'price', 'mileage', 'year', 'color', 'registration_date', 'sold', 'category','reservedlink', 'image', 'imageName', 'transmission', 'fuel', 'engine')

class CarImageSerializer(serializers.ModelSerializer):

  imageName = serializers.SerializerMethodField('getImageName')

  def getImageName(self, foo):
    image = foo.image.name.split("/")[3]
    return str(image)
  
  class Meta:
    model = CarImages
    fields = ('imageName', )    

class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = ('id', 'username', 'email', 'password')

class ContactInfoSerializer(serializers.ModelSerializer):
  class Meta:
    model = ContactInfo
    fields = ('id', 'user', 'address', 'phone')

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
    fields = ('id', 'user', 'car', 'favorite_date')

class ReviewSerializer(serializers.ModelSerializer):

  user_name = serializers.SerializerMethodField()
  car_image = serializers.SerializerMethodField()

  def get_user_name(self, obj):
    user_id = obj.user_id
    user = User.objects.filter(id=user_id).values_list('username')
    return user
  
  def get_car_image(self, obj):
    car_id = obj.car_id
    car = Car.objects.filter(id=car_id).values_list('image').first()
    car = car[0]
    image = car.split("/")[3]
    return image

  class Meta:
    model = Review
    fields = ('id', 'user', 'car', 'rating', 'review_date', 'comment', 'user_name', 'car_image')

class ReviewCarSerializer(serializers.ModelSerializer):
  
  user_name = serializers.SerializerMethodField()

  def get_user_name(self, obj):
    user_id = obj.user_id
    user = User.objects.filter(id=user_id).values_list('username')

    return user
  
  class Meta:
    model = Review
    fields = ('user_name', 'rating', 'review_date', 'comment')


class ReviewUserSerializer(serializers.ModelSerializer):
  
  car_name = serializers.SerializerMethodField()

  def get_car_name(self, obj):
    car_id = obj['car_id']

    car = Car.objects.filter(id=car_id).values_list('make', 'model')

    return car

  class Meta:
    model = Review
    fields = ('id', 'user_id', 'car_id', 'rating', 'review_date', 'comment', 'car_name')

class SaleSerializer(serializers.ModelSerializer):
  class Meta:
    model = Sale
    fields = ('id', 'car_id', 'user_id', 'worker_id', 'price','iscompleted', 'sale_date')

class Dis_TransactionSerializer(serializers.ModelSerializer):
  class Meta:
    model = Dis_Transaction
    fields = ('id', 'distributor_id', 'car_id', 'amount', 'transaction_date')

class MessageSerializer(serializers.ModelSerializer):
  class Meta:
    model = Message
    fields = ('id', 'name', 'email', 'phone', 'title', 'message')
