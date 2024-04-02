from django.urls import path

from . import views

urlpatterns = [
  path('setor/', views.SetorView.as_view()),
  path('setor/<int:id>/', views.SetorView.as_view()),
]