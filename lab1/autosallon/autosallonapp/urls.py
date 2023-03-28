from django.urls import path
from .views import main, prova

urlpatterns = [
    path('', main, name='index'),
    path('prova/', prova, name='prova'),
]