from rest_framework import viewsets
from rest_framework.parsers import MultiPartParser, FormParser
from .serializers import DinosaurSerializer
from ..models import Dinosaur
 
class DinosaurViewSet(viewsets.ModelViewSet):
    queryset = Dinosaur.objects.all()
    serializer_class = DinosaurSerializer
    parser_classes = (MultiPartParser, FormParser)