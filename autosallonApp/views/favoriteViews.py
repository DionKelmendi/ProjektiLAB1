# favorite CRUD
# favorite Read One Instance
class FavoriteDetailAPIView(generics.RetrieveAPIView):
  queryset = Favorite.objects.all()
  serializer_class = FavoriteSerializer

# favorite Read All Instances and Create    
class FavoriteAPIView(generics.ListCreateAPIView):
  queryset = Favorite.objects.all()
  serializer_class = FavoriteSerializer

  def perform_create(self, serializer):
    user_id = serializer.validated_data.get('user_id')
    car_id = serializer.validated_data.get('car_id')
    serializer.save()

# favorite Update
class FavoriteUpdateAPIView(generics.UpdateAPIView):
  queryset = Favorite.objects.all()
  serializer_class = FavoriteSerializer
  lookup_field = 'pk'

  def perform_update(self, serializer):
    instance = serializer.save()

# favorite Destroy
class FavoriteDestroyAPIView(generics.DestroyAPIView):
    queryset = Favorite.objects.all()
    serializer_class = FavoriteSerializer
    lookup_field = 'pk'

    def perform_destroy(self, instance):
        super().perform_destroy(instance)