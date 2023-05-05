from .views import carViews ,userViews, saleViews, workerViews, contactInfoViews, favoriteViews
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

    path('sale/', saleViews.SaleAPIView.as_view()),
    path('sale/<int:pk>/', saleViews.SaleDetailAPIView.as_view()),
    path('sale/<int:pk>/update', saleViews.SaleUpdateAPIView.as_view()),
    path('sale/<int:pk>/destroy', saleViews.SaleDestroyAPIView.as_view()),

path('worker/', workerViews.WorkerAPIView.as_view()),
    path('worker/<int:pk>/', workerViews.WorkerDetailAPIView.as_view()),
    path('worker/<int:pk>/update', workerViews.WorkerUpdateAPIView.as_view()),
    path('worker/<int:pk>/destroy', workerViews.WorkerDestroyAPIView.as_view()),
    
    path('contactInfo/', contactInfoViews.ContactInfoAPIView.as_view()),
    path('contactInfo/<int:pk>/', contactInfoViews.ContactInfoDetailAPIView.as_view()),
    path('contactInfo/<int:pk>/update', contactInfoViews.ContactInfoUpdateAPIView.as_view()),
    path('contactInfo/<int:pk>/destroy', contactInfoViews.ContactInfoDestroyAPIView.as_view()),
    
    path('favorite/', favoriteViews.FavoriteAPIView.as_view()),
    path('favorite/<int:pk>/', favoriteViews.FavoriteDetailAPIView.as_view()),
    path('favorite/<int:pk>/update', favoriteViews.FavoriteUpdateAPIView.as_view()),
    path('favorite/<int:pk>/destroy', favoriteViews.FavoriteDestroyAPIView.as_view()),

]
