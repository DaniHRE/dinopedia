from rest_framework import viewsets
from rest_framework.parsers import MultiPartParser, FormParser
from .serializers import DinosaurSerializer, CategorySerializer
from ..models import Dinosaur
from ..models import Category
 
class DinosaurViewSet(viewsets.ModelViewSet):
    queryset = Dinosaur.objects.all()
    serializer_class = DinosaurSerializer
    parser_classes = (MultiPartParser, FormParser)

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer