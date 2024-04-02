from django.db import models

# Create your models here.
class Setor(models.Model):
  id = models.AutoField(
    primary_key=True
  )

  descricao = models.TextField(
    max_length=100,
    null=False,
    blank=False
  )

  creation_date = models.DateTimeField(
    auto_now_add=True,
    null=False,
    blank=False
  )

  last_updated = models.DateTimeField(
    auto_now=True,
    null=False,
    blank=False
  )

  class Meta:
    db_table = 'Setor'