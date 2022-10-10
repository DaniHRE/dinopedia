from django.contrib import admin
from django.conf.urls.static import static
from django.conf import settings
from django.urls import path, include
from rest_framework import routers

from dinopedia.api.viewsets import DinosaurViewSet, CategoryViewSet

router = routers.DefaultRouter()
router.register(r'dinosaur', DinosaurViewSet)
router.register(r'category', CategoryViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
    path('admin/', admin.site.urls),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
