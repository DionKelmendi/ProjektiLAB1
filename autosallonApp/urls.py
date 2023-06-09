from .views import carImagesViews, carViews, categoryViews, contactInfoViews, dis_TransactionViews, distributorViews, favoriteViews, reviewViews, saleViews, userViews, workerViews, messageViews
from django.urls import path

urlpatterns = [

    path('carImages/', carImagesViews.CarImageCreateAPIView.as_view()),
    path('carImages/<int:car>/', carImagesViews.CarImageDetailAPIView.as_view()),
    path('carImages/<int:pk>/update', carImagesViews.CarImageUpdateAPIView.as_view()),
    path('carImages/<int:pk>/destroy', carImagesViews.CarImageDestroyAPIView.as_view()),

    path('category/', categoryViews.CategoryAPIView.as_view()),
    path('category/<int:pk>/', categoryViews.CategoryDetailAPIView.as_view()),
    path('category/<int:pk>/update', categoryViews.CategoryUpdateAPIView.as_view()),
    path('category/<int:pk>/destroy', categoryViews.CategoryDestroyAPIView.as_view()),

    path('car/', carViews.CarAPIView.as_view()),
    path('car/<int:pk>/', carViews.CarDetailAPIView.as_view()),
    path('car/<int:pk>/update', carViews.CarUpdateAPIView.as_view()),
    path('car/<int:pk>/destroy', carViews.CarDestroyAPIView.as_view()),
    path('car/makes/', carViews.CarMakeAPIView.as_view()),
    path('car/categories/', carViews.CarCategoriesAPIView.as_view()),
    path('car/ads/', carViews.CarAdsAPIView.as_view()),


    path('user/', userViews.UserAPIView.as_view()),
    path('user/<int:pk>/', userViews.UserDetailAPIView.as_view()),
    path('user/<int:pk>/update', userViews.UserUpdateAPIView.as_view()),
    path('user/<int:pk>/destroy', userViews.UserDestroyAPIView.as_view()),

    path('contactInfo/', contactInfoViews.ContactInfoAPIView.as_view()),
    path('contactInfo/<int:pk>/', contactInfoViews.ContactInfoDetailAPIView.as_view()),
    path('contactInfo/<int:pk>/update', contactInfoViews.ContactInfoUpdateAPIView.as_view()),
    path('contactInfo/<int:pk>/destroy', contactInfoViews.ContactInfoDestroyAPIView.as_view()),

    path('dis_transaction/', dis_TransactionViews.Dis_TransactionAPIView.as_view()),
    path('dis_transaction/<int:pk>/', dis_TransactionViews.Dis_TransactionDetailAPIView.as_view()),
    path('dis_transaction/<int:pk>/update', dis_TransactionViews.Dis_TransactionUpdateAPIView.as_view()),
    path('dis_transaction/<int:pk>/destroy', dis_TransactionViews.Dis_TransactionDestroyAPIView.as_view()),

    path('distributor/', distributorViews.DistributorAPIView.as_view()),
    path('distributor/<int:pk>/', distributorViews.DistributorDetailAPIView.as_view()),
    path('distributor/<int:pk>/update', distributorViews.DistributorUpdateAPIView.as_view()),
    path('distributor/<int:pk>/destroy', distributorViews.DistributorDestroyAPIView.as_view()),

    path('favorite/', favoriteViews.FavoriteAPIView.as_view()),
    path('favorite/<int:pk>/', favoriteViews.FavoriteDetailAPIView.as_view()),
    path('favorite/<int:pk>/update', favoriteViews.FavoriteUpdateAPIView.as_view()),
    path('favorite/<int:pk>/destroy', favoriteViews.FavoriteDestroyAPIView.as_view()),
    path('favorite/user/<int:user_id>/', favoriteViews.FavoriteUserAPIView.as_view()),
    path('favorite/user/<int:user_id>/all/', favoriteViews.FavoriteUserAllAPIView.as_view()),

    path('review/', reviewViews.ReviewAPIView.as_view()),
    path('review/<int:pk>/', reviewViews.ReviewDetailAPIView.as_view()),
    path('review/<int:pk>/update', reviewViews.ReviewUpdateAPIView.as_view()),
    path('review/<int:pk>/destroy', reviewViews.ReviewDestroyAPIView.as_view()),
    path('review/user/<int:user_id>/', reviewViews.ReviewUserAPIView.as_view()),
    path('review/car/<int:car_id>/', reviewViews.ReviewCarAPIView.as_view()),
    path('review/user/<int:user_id>/all/', reviewViews.ReviewUserAllAPIView.as_view()),

    path('sale/', saleViews.SaleAPIView.as_view()),
    path('sale/<int:pk>/', saleViews.SaleDetailAPIView.as_view()),
    path('sale/<int:pk>/update', saleViews.SaleUpdateAPIView.as_view()),
    path('sale/<int:pk>/destroy', saleViews.SaleDestroyAPIView.as_view()),

    path('worker/', workerViews.WorkerAPIView.as_view()),
    path('worker/<int:pk>/', workerViews.WorkerDetailAPIView.as_view()),
    path('worker/<int:pk>/update', workerViews.WorkerUpdateAPIView.as_view()),
    path('worker/<int:pk>/destroy', workerViews.WorkerDestroyAPIView.as_view()),

    path('message/', messageViews.MessageAPIView.as_view()),

]
