from .views import carViews ,userViews, saleViews 
from django.urls import path

urlpatterns = [
    
    path('sale/', saleViews.SaleAPIView.as_view()),
    path('sale/<int:pk>/', saleViews.SaleDetailAPIView.as_view()),
    path('sale/<int:pk>/update', saleViews.SaleUpdateAPIView.as_view()),
    path('sale/<int:pk>/destroy', saleViews.SaleDestroyAPIView.as_view()),


]
