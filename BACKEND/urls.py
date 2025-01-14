from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import GoalViewSet, weekly_report

router = DefaultRouter()
router.register(r'goals', GoalViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
    path('api/report/', weekly_report, name='weekly_report'),
]
