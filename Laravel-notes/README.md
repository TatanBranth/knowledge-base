# Indice

- [Crear proyecto](#función-autoinvocada)
- [Crear modelos](#crear-un-modelo)
- [Crear controlador](#crear-un-controlador)
- [Crear modelo nuevo y CRUD](#crear-un-modelo-nuevo-y-su-crud)
    - [Crear modelo y migracion](#1-crear-modelo-y-migración)
    - [Definir columnas de la migracion](#2-definir-columnas-de-la-migración)
    - [Ejecutar migraciones](#3-ejecutar-migraciones)
    - [Configurar el modelo](#4-configurar-el-modelo)
    - [Crear un controlador](#5-crear-un-controlador)
    - [Definir las rutas](#6-definir-las-rutas)
    - [Implementar los metodos del controlador](#7-implementar-los-metodos-del-controlador)
    - [Crear factoria](#8-crear-factoría)
    - [Crear Seeder](#9-crear-el-seeder)



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

## Crear un modelo nuevo y su CRUD

### 1. Crear modelo y migración

[crear modelo](#crear-modelo-y-migración)

### 2. Definir columnas de la migración

En la ruta ```database/migrations``` definir las columnas de la migración, esto define las columnas de la tabla en la bd

    public function up()
    {
        Schema::create('table-name', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('description')->nullable();
            $table->boolean('is_active')->default(false);
            $table->timestamps();
        });
    }

### 3. ejecutar migraciones

    php artisan migrate

### 4. Configurar el modelo

En la ruta ```app/Models/``` se habrá creado el modelo y deberá ser modificado
el filliable es para permitir asignación masiva

    <?php

    namespace App\Models;

    use Illuminate\Database\Eloquent\Factories\HasFactory;
    use Illuminate\Database\Eloquent\Model;

    class Project extends Model
    {
        use HasFactory;

        protected $fillable = [
            'title',
            'description',
            'is_active',
        ];
    }

### 5. Crear un controlador

El controlador es el que nos permitirá hacer el crud, se creará en ``` app/http/controllers/ ```

    php artisan make:controller NombreControlador --resource

### 6. Definir las rutas

Agregar las rutas al CRUD desde ``` routes/api.php ```

    use App\Http\Controllers\ProjectController;

    Route::apiResource('projects', ProjectController::class);

Esto creará automáticamente rutas como:

    GET /projects → index
    POST /projects → store
    GET /projects/{project} → show
    PUT /projects/{project} → update
    DELETE /projects/{project} → destroy

### 7. implementar los metodos del controlador

Esto es configurar el CRUD que este modelo tendrá

Show:

    public function index()
    {
        return Project::all();
    }

Store:

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'is_active' => 'required|boolean',
        ]);

        $project = Project::create($validated);

        return response()->json($project, 201);
    }

y los demás...

### 8. Crear factoría

Es buena práctica crear una factoria para el modelo y un seeder para crearle datos de prueba  
se creará una factoria en ```database/factories ```

    php artisan make:factory TaskFactory --model=Task

le configuramos:

    public function definition(): array
    {
        return [
            'title' => $this->faker->sentence,
            'description' => $this->faker->paragraph,
            'is_completed' => $this->faker->boolean,
        ];
    }


### 9. Crear el seeder

El seeder se creará en ``` database/seeders/ ```.

    php artisan make:seeder TaskSeeder

vamos a configurarlo para usar la factoria creada anteriormente

    public function run(): void
    {
        \App\Models\Task::factory(10)->create();
    }

estoy pidiendole 10 datos de prueba que seran creados en la bd con el siguiente comando:

    php artisan db:seed --class=TaskSeeder