from django.contrib import admin
from django.urls import path, include
from rest_framework import routers

from dinopedia.api.viewsets import DinosaurViewSet, CategoryViewSet

router = routers.DefaultRouter()
router.register(r'dinosaur', DinosaurViewSet)
router.register(r'category', CategoryViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
]
