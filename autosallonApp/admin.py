from django.contrib import admin

# Register your models here.

from . import models

admin.site.register(models.User)
admin.site.register(models.Car)
admin.site.register(models.Category)
admin.site.register(models.ContactInfo)
admin.site.register(models.Dis_Transaction)
admin.site.register(models.Distributor)
admin.site.register(models.Favorite)
admin.site.register(models.Review)
admin.site.register(models.Sale)
admin.site.register(models.Worker)
admin.site.register(models.CarImages)