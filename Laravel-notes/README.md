# Indice

- [Crear proyecto](#función-autoinvocada)
- [Crear modelos](#crear-un-modelo)
- [Crear controlador](#crear-un-controlador)



## Crear un proyecto en laravel

Primero se debe tener instalado php y Composer para poder ejecutar el siguiente comando:

    composer create-project --prefer-dist laravel/laravel nombre-proyecto

Cuando se haya terminado de crear el proyecto hay que instalar dependencias:

    composer install

Luego vamos a crear la key para el archivo .env

    php artisan key:generate

A continuación se debe crear la base de datos, si no se tiene creada el siguiente comando lo hará:

    php artisan migrate

para poder migrar correctamente el archivo .env debe estar bien configurado de la siguiente manera:

    DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE=tasks_lav_rea
    DB_USERNAME=root
    DB_PASSWORD=

## Crear un modelo

Se creará un modelo en ```app/models``` y una migración ```database/migrations``` en este caso de la entidad "Tarea":

    php artisan make:model Task -m


## Crear un controlador

Se generará un archivo controlador en ```app/http/controllers```:

    php artisan make:controller TaskController --resource

##

