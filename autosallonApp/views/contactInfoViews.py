# ContactInfo CRUD
# ContactInfo Read One Instance
class ContactInfoDetailAPIView(generics.RetrieveAPIView):
  queryset = ContactInfo.objects.all()
  serializer_class = ContactInfoSerializer

# ContactInfo Read All Instances and Create    
class ContactInfoAPIView(generics.ListCreateAPIView):
  queryset = ContactInfoAPIView.objects.all()
  serializer_class = ContactInfoSerializer

  def perform_create(self, serializer):
    user_id = serializer.validated_data.get('user_id')
    address = serializer.validated_data.get('address')
    phone = serializer.validated_data.get('phone')
    serializer.save()

# ContactInfo Update
class ContactInfoUpdateAPIView(generics.UpdateAPIView):
  queryset = ContactInfo.objects.all()
  serializer_class = ContactInfoSerializer
  lookup_field = 'pk'

  def perform_update(self, serializer):
    instance = serializer.save()

# ContactInfo Destroy
class ContactInfoDestroyAPIView(generics.DestroyAPIView):
    queryset = ContactInfo.objects.all()
    serializer_class = ContactInfoSerializer
    lookup_field = 'pk'

    def perform_destroy(self, instance):
        super().perform_destroy(instance)