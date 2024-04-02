from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.mixins import UpdateModelMixin, DestroyModelMixin

from .models import Setor
from .serializers import SetorSerializer


class SetorView(
  APIView,
  UpdateModelMixin,
  DestroyModelMixin,
):

  def get(self, request, id=None):
    if id:
      try:
        queryset = Setor.objects.get(id=id)
      except Setor.DoesNotExist:
        return Response({'Erro': 'Setor não Encontrado'}, status=400)
      
      read_serializer = SetorSerializer(queryset)

    else:
      queryset = Setor.objects.all()
      read_serializer = SetorSerializer(queryset, many=True)

    return Response(read_serializer.data)


  def post(self, request):
    create_serializer = SetorSerializer(data=request.data)

    if create_serializer.is_valid():
      Setor_item_object = create_serializer.save()
      read_serializer = SetorSerializer(Setor_item_object)
      return Response(read_serializer.data, status=201)

    return Response(create_serializer.errors, status=400)


  def put(self, request, id=None):
    try:
      Setor_item = Setor.objects.get(id=id)
    except Setor.DoesNotExist:
      return Response({'Erro': 'Setor não Encontrado'}, status=400)

    update_serializer = SetorSerializer(Setor_item, data=request.data)

    if update_serializer.is_valid():
      Setor_item_object = update_serializer.save()
      read_serializer = SetorSerializer(Setor_item_object)
      return Response(read_serializer.data, status=200)

    return Response(update_serializer.errors, status=400)


  def delete(self, request, id=None):
    try:
      Setor_item = Setor.objects.get(id=id)
    except Setor.DoesNotExist:
      return Response({'Erro': 'Setor não Encontrado'}, status=400)

    Setor_item.delete()
    
    return Response(status=204)