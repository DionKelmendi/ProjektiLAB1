from django.contrib import admin
from .views import userViews, carViews, distributorViews, workerViews, categoryViews
from django.utils.safestring import mark_safe 
from . import models
from django.urls import reverse


# Car Image Admin Display
class CarImageModelAdmin(admin.StackedInline):
  model = models.CarImages
  list_display = ["id","image", "car_id", "car_name" ,"carImage_link"]
  ordering = ["id"]
  search_fields = ["car_id__make"]
  list_filter = ["car_id__id", "car_id__make", "car_id__model"]
  filter_horizontal = []

  def car_name(self, obj):
    carName = carViews.getMake(obj.car_id) + " " + carViews.getModel(obj.car_id)
    return mark_safe('<a href="{}">{}</a>'.format(
      reverse("admin:autosallonApp_car_change", args=(obj.car_id,)),
      carName))
    
  def carImage_link(self, obj):
    return mark_safe('<a href="{}">{}</a>'.format(
      reverse("admin:autosallonApp_carimages_change", args=(obj.id,)),
      "Edit Car Image"
    ))  
  
  class Meta:
    model = models.CarImages
admin.site.register(models.CarImages)

# Category Admin Display
class CategoryModelAdmin(admin.ModelAdmin):
  list_display = ["id", "name", "category_link"]
  search_fields = ["id", "name"]
  ordering = ["id"]
  filter_horizontal = []

  def category_link(self, obj):
    return mark_safe('<a href="{}">{}</a>'.format(
      reverse("admin:autosallonApp_category_change", args=(obj.id,)),
      "Edit Category"
    ))
  category_link.short_description = 'Category'
admin.site.register(models.Category, CategoryModelAdmin)

# Car Admin Display
class CarModelAdmin(admin.ModelAdmin):
  list_display = ["id", "make", "model", "price", "mileage", "year", "transmission", "fuel", "engine", "color", "category_name","sold","reservedlink", "car_link"]
  search_fields = ["make", "model", "price"]
  ordering = ["id"]
  list_filter = ["sold", "make", "model", "category_id__name", "color", "transmission", "fuel"]
  inlines = [CarImageModelAdmin]

  def category_name(self, obj):
    categoryName = categoryViews.getName(obj.category_id)
    return mark_safe('<a href="{}">{}</a>'.format(
      reverse("admin:autosallonApp_category_change", args=(obj.category_id,)),
      categoryName))

  def car_link(self, obj):
    return mark_safe('<a href="{}">{}</a>'.format(
      reverse("admin:autosallonApp_car_change", args=(obj.id,)),
      "Edit Car"
    ))     
  car_link.short_description = 'Car'
admin.site.register(models.Car, CarModelAdmin)

# Contact Info Admin Display
class ContactInfoModelAdmin(admin.ModelAdmin):
  list_display = ["id", "address", "phone", "user_name", "contactInfo_link"]
  search_fields = ["address", "phone", "user_id__username"]
  list_filter = ["address"]
  ordering = ["id"]
  filter_horizontal = []

  def user_name(self, obj):
    userName = userViews.getName(obj.user_id)
    return mark_safe('<a href="{}">{}</a>'.format(
      reverse("admin:auth_user_change", args=(obj.user_id,)),
      userName))

  def contactInfo_link(self, obj):
    return mark_safe('<a href="{}">{}</a>'.format(
      reverse("admin:autosallonApp_contactinfo_change", args=(obj.id,)),
      "Edit Contacts"
    ))     
  contactInfo_link.short_description = 'Contact Info'
admin.site.register(models.ContactInfo, ContactInfoModelAdmin)

# DisTransaction Admin Display
class DisTransactionModelAdmin(admin.ModelAdmin):
  list_display = ["id", "amount", "distributor_name", "car_name", "disTransaction_link"]
  ordering = ["id"]
  list_filter = ["distributor_id__name"]
  search_fields = ["amount", "distributor_id__name", "car_id__name"]
  filter_horizontal = []

  def car_name(self, obj):
    carName = carViews.getMake(obj.car_id) + " " + carViews.getModel(obj.car_id)
    return mark_safe('<a href="{}">{}</a>'.format(
      reverse("admin:autosallonApp_car_change", args=(obj.car_id,)),
      carName))
    
  def distributor_name(self, obj):
    distributorName = distributorViews.getName(obj.distributor_id)
    return mark_safe('<a href="{}">{}</a>'.format(
      reverse("admin:autosallonApp_distributor_change", args=(obj.distributor_id,)),
      distributorName))

  def disTransaction_link(self, obj):
    return mark_safe('<a href="{}">{}</a>'.format(
      reverse("admin:autosallonApp_dis_transaction_change", args=(obj.id,)),
      "Edit Dis_Transaction"
    ))   
admin.site.register(models.Dis_Transaction, DisTransactionModelAdmin)

# Distributor Admin Display
class DistributorModelAdmin(admin.ModelAdmin):
  list_display = ["id", "name", "email", "address", "phone", "distributor_link"]
  ordering = ["id"]
  list_filter = ["address"]
  search_fields = ["name"]
  filter_horizontal = []

  def distributor_link(self, obj):
    return mark_safe('<a href="{}">{}</a>'.format(
      reverse("admin:autosallonApp_distributor_change", args=(obj.id,)),
      "Edit Distributor"
    )) 
admin.site.register(models.Distributor, DistributorModelAdmin)

# Favorite Admin Display
class FavoriteModelAdmin(admin.ModelAdmin):
  list_display = ["id","user_name", "car_name", "favorite_link"]
  ordering = ["id"]
  list_filter = ["user_id__username", "car_id__make", "car_id__model"]
  search_fields = ["user_id__username", "car_id__make", "car_id__model"]
  filter_horizontal = []

  def car_name(self, obj):
    carName = carViews.getMake(obj.car_id) + " " + carViews.getModel(obj.car_id)
    return mark_safe('<a href="{}">{}</a>'.format(
      reverse("admin:autosallonApp_car_change", args=(obj.car_id,)),
      carName))
    
  def user_name(self, obj):
    userName = userViews.getName(obj.user_id)
    return mark_safe('<a href="{}">{}</a>'.format(
      reverse("admin:auth_user_change", args=(obj.user_id,)),
      userName))

  def favorite_link(self, obj):
    return mark_safe('<a href="{}">{}</a>'.format(
      reverse("admin:autosallonApp_favorite_change", args=(obj.id,)),
      "Edit Favorite"
    ))  
admin.site.register(models.Favorite, FavoriteModelAdmin)

# Review Admin Display
class ReviewModelAdmin(admin.ModelAdmin):
  list_display = ["id","user_name", "car_name", "rating","comment", "review_date" ,"review_link"]
  ordering = ["id"]
  list_filter = ["user_id__username", "car_id__make", "car_id__model", "rating"]
  search_fields = ["user_id__username", "car_id__make", "car_id__model"]
  filter_horizontal = []

  def car_name(self, obj):
    carName = carViews.getMake(obj.car_id) + " " + carViews.getModel(obj.car_id)
    return mark_safe('<a href="{}">{}</a>'.format(
      reverse("admin:autosallonApp_car_change", args=(obj.car_id,)),
      carName))
    
  def user_name(self, obj):
    userName = userViews.getName(obj.user_id)
    return mark_safe('<a href="{}">{}</a>'.format(
      reverse("admin:auth_user_change", args=(obj.user_id,)),
      userName))

  def review_link(self, obj):
    return mark_safe('<a href="{}">{}</a>'.format(
      reverse("admin:autosallonApp_review_change", args=(obj.id,)),
      "Edit Review"
    ))  
admin.site.register(models.Review, ReviewModelAdmin)

# Sale Admin Display
class SaleModelAdmin(admin.ModelAdmin):
  list_display = ["id","user_name", "car_name", "worker_name","iscompleted", "sale_date","sale_link"]
  ordering = ["id"]
  list_filter = ["user_id__username", "car_id__make", "car_id__model","iscompleted", "worker_id__name"]
  search_fields = ["user_id__username", "car_id__make", "car_id__model","iscompleted", "worker_id__name"]
  filter_horizontal = []

  def car_name(self, obj):
    carName = carViews.getMake(obj.car_id) + " " + carViews.getModel(obj.car_id)
    return mark_safe('<a href="{}">{}</a>'.format(
      reverse("admin:autosallonApp_car_change", args=(obj.car_id,)),
      carName))
    
  def user_name(self, obj):
    userName = userViews.getName(obj.user_id)
    return mark_safe('<a href="{}">{}</a>'.format(
      reverse("admin:auth_user_change", args=(obj.user_id,)),
      userName))
  
  def worker_name(self, obj):
    workerName = workerViews.getName(obj.worker_id)
    return mark_safe('<a href="{}">{}</a>'.format(
      reverse("admin:autosallonApp_worker_change", args=(obj.worker_id,)),
      workerName))

  def sale_link(self, obj):
    return mark_safe('<a href="{}">{}</a>'.format(
      reverse("admin:autosallonApp_sale_change", args=(obj.id,)),
      "Edit Sale"
    ))  
admin.site.register(models.Sale, SaleModelAdmin)

# Worker Admin Display
class WorkerModelAdmin(admin.ModelAdmin):
  list_display = ["id", "name", "email", "address", "phone", "salary", "position", "image", "worker_link"]
  ordering = ["id"]
  list_filter = ["position", "address"]
  search_fields = ["name", "email"]
  filter_horizontal = []

  def worker_link(self, obj):
    return mark_safe('<a href="{}">{}</a>'.format(
      reverse("admin:autosallonApp_worker_change", args=(obj.id,)),
      "Edit Worker"
    ))
  worker_link.short_description = 'Worker'
admin.site.register(models.Worker, WorkerModelAdmin)

admin.site.register(models.Message)
