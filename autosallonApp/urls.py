from .views import carViews
from .views import userViews
from django.urls import path

urlpatterns = [
    path('car/', carViews.CarAPIView.as_view()),
    path('car/<int:pk>/', carViews.CarDetailAPIView.as_view()),
    path('car/<int:pk>/update', carViews.CarUpdateAPIView.as_view()),
    path('car/<int:pk>/destroy', carViews.CarDestroyAPIView.as_view()),

    path('user/', userViews.UserAPIView.as_view()),
    path('user/<int:pk>/', userViews.UserDetailAPIView.as_view()),
    path('user/<int:pk>/update', userViews.UserUpdateAPIView.as_view()),
    path('user/<int:pk>/destroy', userViews.UserDestroyAPIView.as_view()),
]
