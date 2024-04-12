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


## Criar Service 
sudo nano /etc/systemd/system/cci_server.service

## Arquivo cci_server.service
[Unit]
Description=CCI_Server Service
After=multi-user.target
[Service]
Type=simple
Restart=always
ExecStart=/usr/bin/python3 /home/Patrick/actions-runner/_work/CCI/CCI/CCI_Server/manage.py runserver 0.0.0.0:8000
[Install]
WantedBy=multi-user.target


## Reload systemctl
sudo systemctl daemon-reload

## Enable
sudo systemctl enable cci_server.service

## Start
sudo systemctl start cci_server.service

## Stop
sudo systemctl stop cci_server.service

## Staus
sudo systemctl status cci_server.service