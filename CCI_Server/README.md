# Criar Banco De Dados
mysql> CREATE DATABASE IF NOT EXISTS CCI;
mysql> CREATE USER 'cci_user'@'%' IDENTIFIED BY '123456';
mysql> GRANT ALL PRIVILEGES ON CCI . * TO 'cci_user'@'%';
mysql> FLUSH PRIVILEGES;

# Instalar Depentencias 
pip install -r requirements.txt


# Verrificar Banco De Dados
python manage.py migrate

# Criar Usuario 
python manage.py shell -c "from django.contrib.auth.models import User; User.objects.create_superuser('cci_user', 'cci_user@example.com', '123456')"

# Rodar Servidor 
python manage.py runserver 0.0.0.0:8000


# DEV

## Criar APP
python manage.py startapp NOME_APP

## Criar MIGRATION
python manage.py makemigrations NOME_APP

## Mostrar MIGRATION
python manage.py showmigrations


