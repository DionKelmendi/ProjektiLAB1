from . import views
from django.urls import path

urlpatterns = [
    path('car/', views.CarView.as_view()),
    path('category/', views.CategoryView.as_view()),
    path('user/', views.UserView.as_view()),
    path('worker/', views.WorkerView.as_view()),
]
