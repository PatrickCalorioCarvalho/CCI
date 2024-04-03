# Instalar Depentencias 
pip install -r .\requirements.txt


# Criar Banco De Dados
mysql> CREATE DATABASE IF NOT EXISTS CCI;


# Verrificar Banco De Dados
python manage.py migrate

# Rodar Servidor 
python manage.py runserver


# DEV

## Criar APP
python manage.py startapp NOME_APP

## Criar MIGRATION
python manage.py makemigrations NOME_APP

## Mostrar MIGRATION
python manage.py showmigrations


