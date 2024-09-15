# from home.views import index
# from django.urls import path
#
# urlpatterns = [
#     path('home/', index),
# ]

from django.urls import path, include
from rest_framework.routers import DefaultRouter

from .views import FruitFaqViewSet

router = DefaultRouter()
router.register(r'faqs',FruitFaqViewSet , basename='fruit_faq')

urlpatterns = [
    path('',include(router.urls))
]