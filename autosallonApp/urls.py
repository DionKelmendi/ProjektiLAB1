from .views import carViews ,userViews, saleViews, workerViews, contactInfoViews, favoriteViews
from django.urls import path

urlpatterns = [
    
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
    

]
