# Instalar Depentencias 
pip install -r .\requirements.txt


# Criar Banco De Dados
mysql> CREATE DATABASE IF NOT EXISTS CCI;
mysql> CREATE USER 'cci_user'@'%' IDENTIFIED BY '123456';
mysql> GRANT ALL PRIVILEGES ON CCI . * TO 'cci_user'@'%';
mysql> FLUSH PRIVILEGES;


# Verrificar Banco De Dados
python manage.py migrate

# Rodar Servidor 
python manage.py runserver

# Criar Usuario 
python manage.py runserver
# DEV

## Criar APP
python manage.py startapp NOME_APP

## Criar MIGRATION
python manage.py makemigrations NOME_APP

## Mostrar MIGRATION
python manage.py showmigrations


