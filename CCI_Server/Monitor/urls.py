from django.urls import path

from .views import MonitorView

urlpatterns = [
    path("", MonitorView.as_view(), name="Monitor"),
]