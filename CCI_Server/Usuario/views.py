from django.shortcuts import render
from rest_framework.generics import RetrieveAPIView

from .serializers import UsuarioSerializer

class UsuarioView(RetrieveAPIView):
    serializer_class = UsuarioSerializer

    def get_object(self):
        return self.request.user