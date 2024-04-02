from rest_framework import serializers

from .models import Setor


class SetorSerializer(serializers.ModelSerializer):
  descricao = serializers.CharField(max_length=100, required=True)

  def create(self, validated_data):
    return Setor.objects.create(
      descricao=validated_data.get('descricao')
    )

  def update(self, instance, validated_data):
    instance.descricao = validated_data.get('descricao', instance.descricao)
    instance.save()
    return instance

  class Meta:
    model = Setor
    fields = (
      'id',
      'descricao'
    )