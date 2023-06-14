import os
from django.db import models
from django.dispatch import receiver
from django.contrib.auth.models import User
from PIL import Image
# Create your models here.
  
def car_image_upload_path(instance, filename):
    return f'reactapp/src/images/{filename}'

class Category(models.Model):
  name = models.CharField(max_length=50)

  class Meta:
    verbose_name_plural = "Categories"

  def __str__(self):
        return f"({self.id}) {self.name}"

class Car(models.Model):
  make = models.CharField(max_length=50)
  model = models.CharField(max_length=50)
  price = models.IntegerField()
  mileage = models.IntegerField()
  year = models.IntegerField()
  color = models.CharField(max_length=50)
  transmission = models.CharField(max_length=50, default="")
  fuel = models.CharField(max_length=50, default="")
  engine = models.CharField(max_length=50, default="")
  registration_date = models.DateTimeField(auto_now_add=True)
  sold = models.BooleanField(null=False, default=False)
  category = models.ForeignKey(Category, on_delete=models.CASCADE)
  reservedlink = models.URLField(blank=True, null=True)
  image = models.ImageField(upload_to=car_image_upload_path, default='reactapp/src/images/No_Image_Available.jpg')

  def __str__(self):
    is_sold = "Sold" if self.sold else "Not sold"
    return f"({self.id}) {self.make} {self.model} - {self.year} - {is_sold}"

class CarImages(models.Model):
  car = models.ForeignKey(Car, on_delete=models.CASCADE)
  image = models.ImageField(upload_to=car_image_upload_path, default='reactapp/src/images/No_Image_Available.jpg')

  class Meta:
    verbose_name_plural = "Car Images"

  def __str__(self):
    image_name = str(self.image).split("/")[3]
    return f"{self.car} -- {image_name}"

# class User(models.Model):
#   name = models.CharField(max_length=50)
#   email = models.CharField(max_length=50)
#   password = models.CharField(max_length=50)
#   registration_date = models.DateTimeField(auto_now_add=True)

#   def __str__(self):
#     return f"({self.id}) {self.name}"

class ContactInfo(models.Model):
  user = models.ForeignKey(User, on_delete=models.CASCADE)
  address = models.CharField(max_length=100, blank=True)
  phone = models.CharField(max_length=20, blank=True)

  def __str__(self):
    return f"{self.user}'s Contact Info"

class Distributor(models.Model):
  name = models.CharField(max_length=50)
  email = models.CharField(max_length=50)
  address = models.CharField(max_length=100)
  phone = models.CharField(max_length=20)

  def __str__(self):
    return f"({self.id}) {self.name}"

class Worker(models.Model):
  name = models.CharField(max_length=50)
  email = models.CharField(max_length=50)
  address = models.CharField(max_length=100)
  phone = models.CharField(max_length=20)
  salary = models.IntegerField()
  position = models.CharField(max_length=50)
  image = models.ImageField(upload_to=car_image_upload_path, default='reactapp/src/images/No_Image_Available.jpg')

  def __str__(self):
    return f"({self.id}) {self.name} {self.position}"

class Favorite(models.Model):
  user = models.ForeignKey(User, on_delete=models.CASCADE)
  car = models.ForeignKey(Car, on_delete=models.CASCADE)
  favorite_date = models.DateTimeField(auto_now_add=True)

  def __str__(self):
    return f"({self.id}) {self.user} : {self.car}"

class Review(models.Model):
  user = models.ForeignKey(User, on_delete=models.CASCADE)
  car = models.ForeignKey(Car, on_delete=models.CASCADE)
  rating = models.IntegerField()
  review_date = models.DateTimeField(auto_now_add=True)
  comment = models.TextField()

  def __str__(self):
    return f"({self.id}) {self.user} - Reviewed - {self.car} - Rating: {self.rating}"

class Sale(models.Model):
  car = models.ForeignKey(Car, on_delete=models.CASCADE)
  user = models.ForeignKey(User, on_delete=models.CASCADE)
  worker = models.ForeignKey(Worker, on_delete=models.CASCADE)
  price = models.DecimalField(max_digits=10, decimal_places=2)
  iscompleted = models.BooleanField(null=False, default=False)
  sale_date = models.DateTimeField(auto_now_add=True)

  def __str__(self):
    return f"({self.id}) {self.user} : {self.car} : {self.price}"

class Dis_Transaction(models.Model):
  distributor = models.ForeignKey(Distributor, on_delete=models.CASCADE)
  car = models.ForeignKey(Car, on_delete=models.CASCADE)
  amount = models.DecimalField(max_digits=10, decimal_places=2)
  transaction_date = models.DateTimeField(auto_now_add=True)

  def __str__(self):
    return f"({self.id}) {self.distributor} : {self.car} : {self.amount}"
  
class Message(models.Model):
  name = models.CharField(max_length=50)
  email = models.CharField(max_length=50)
  phone = models.CharField(max_length=50)
  title = models.CharField(max_length=50, blank=True)
  message = models.TextField()

  def __str__(self):
    return f"{self.name}'s Message ({self.email})"