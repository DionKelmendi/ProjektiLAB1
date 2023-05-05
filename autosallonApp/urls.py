from .views import carViews
from django.urls import path

urlpatterns = [
    path('car/', carViews.CarAPIView.as_view()),
    path('car/<int:pk>/', carViews.CarDetailAPIView.as_view()),
    path('car/<int:pk>/update', carViews.CarUpdateAPIView.as_view()),
    path('car/<int:pk>/destroy', carViews.CarDestroyAPIView.as_view()),
]
