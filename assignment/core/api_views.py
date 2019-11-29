from rest_framework.generics import ListCreateAPIView

from .models import EntryFormModel
from .serializers import EntryFormSerializer


class EntryFormAPIView(ListCreateAPIView):
    serializer_class = EntryFormSerializer
    queryset = EntryFormModel.objects.all()
