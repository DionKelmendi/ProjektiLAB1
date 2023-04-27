from . import views
from django.urls import path

urlpatterns = [
    path('prova/', views.index, name='index')
]
