from django.db import models

# Create your models here.
class Category(models.Model):
  name = models.CharField(max_length=50)

class Car(models.Model):
  make = models.CharField(max_length=50)
  model = models.CharField(max_length=50)
  price = models.IntegerField()
  mileage = models.IntegerField()
  year = models.IntegerField()
  color = models.CharField(max_length=50)
  registration_date = models.DateTimeField(auto_now_add=True)
  sold = models.BooleanField(null=False, default=False)
  category_id = models.ForeignKey(Category, on_delete=models.CASCADE)

class User(models.Model):
  name = models.CharField(max_length=50)
  email = models.CharField(max_length=50)
  password = models.CharField(max_length=50)
  registration_date = models.DateTimeField(auto_now_add=True)

class ContactInfo(models.Model):
  user_id = models.ForeignKey(User, on_delete=models.CASCADE)
  address = models.CharField(max_length=100)
  phone = models.CharField(max_length=20)

class Distributor(models.Model):
  name = models.CharField(max_length=50)
  email = models.CharField(max_length=50)
  address = models.CharField(max_length=100)
  phone = models.CharField(max_length=20)

class Worker(models.Model):
  name = models.CharField(max_length=50)
  email = models.CharField(max_length=50)
  address = models.CharField(max_length=100)
  phone = models.CharField(max_length=20)
  salary = models.IntegerField()
  position = models.CharField(max_length=50)

class Favorite(models.Model):
  user_id = models.ForeignKey(User, on_delete=models.CASCADE)
  car_id = models.ForeignKey(Car, on_delete=models.CASCADE)
  favorite_date = models.DateTimeField(auto_now_add=True)

class Review(models.Model):
  user_id = models.ForeignKey(User, on_delete=models.CASCADE)
  car_id = models.ForeignKey(Car, on_delete=models.CASCADE)
  rating = models.IntegerField()
  review_date = models.DateTimeField(auto_now_add=True)
  comment = models.TextField()

class Sale(models.Model):
  car_id = models.ForeignKey(Car, on_delete=models.CASCADE)
  user_id = models.ForeignKey(User, on_delete=models.CASCADE)
  worker_id = models.ForeignKey(Worker, on_delete=models.CASCADE)
  price = models.DecimalField(max_digits=10, decimal_places=2)
  sale_date = models.DateTimeField(auto_now_add=True)

class Dis_Transaction(models.Model):
  distributor_id = models.ForeignKey(Distributor, on_delete=models.CASCADE)
  car_id = models.ForeignKey(Car, on_delete=models.CASCADE)
  amount = models.DecimalField(max_digits=10, decimal_places=2)
  transaction_date = models.DateTimeField(auto_now_add=True)
  