# Indice

- [Función autoinvocada](#función-autoinvocada)
- [Operador de fusión de nullos](#operador-de-fusión-de-nullos)
- [Operador de nullidad](#operador-de-nullidad)
- [Promesas](#promesas)
- [Configuración archivos EMS y CSJ](#configuración-archivos-ems-y-csj)
- [Configurar formatter en un proyecto node](#configurar-formatter-en-un-proyecto-node)
- [Consultar eventos suscritos en navegador](#consultar-eventos-suscritos-en-el-navegador)
- [Como recorrer un objeto](#como-recorrer-un-objeto)


## Función autoinvocada

Se puede usar en funciones que son anonimas y se necesita una ejecución inmediata después de su creación

    (() => {
	    const A1 = 1
	    const A2 = 2

	    return A1+A2
    })()

## Operador de fusión de nullos

    let resultado = valor1 ?? valor2;

valor1: El valor que se evalúa primero  
valor2: El valor que se devuelve si valor1 es null o undefined

- Operador de Fusión de Nulos (```??```): Proporciona un valor predeterminado solo si el valor es null o undefined.
- Operador OR (```||```): Proporciona un valor predeterminado si el valor es “falso” (0, false, "", null, undefined).

## Operador de nullidad

    const userName = user ?? 'Invitado';

Si ```user``` tiene algun valor, entonces ```userName``` será asignado con dicho valor, si  
```user``` resulta ser __null__ entonces ```userName``` tomará el valor de "invitado"

## Promesas

son funciones asíncronas de las cuales se esperan por una respuesta en el tiempo

    // Simulación de una función que realiza una solicitud HTTP
    function fetchDataFromAPI() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1'; // Ejemplo de una API pública

    return fetch(apiUrl)
        .then((response) => {
        if (!response.ok) {
            throw new Error(`Error al obtener los datos (${response.status} ${response.statusText})`);
        }
        return response.json(); // Parseamos la respuesta como JSON
        })
        .catch((error) => {
            console.error('Error en la solicitud:', error.message);
        });
    }

    // Uso de la función
    fetchDataFromAPI()
    .then((data) => {
        console.log('Datos obtenidos:', data);
    });

El manejo de errores interno permite centralizar la operación y liberar de responsabilidad al uso de la función
solo espera o no una respuesta

## Configuración archivos EMS y CSJ

si un proyecto en node.js esta configurado con ESM (ECMAScript) y algún archivo tiene el uso de la notación
CJS(CommonJS) podemos hacer 2 cosas:

1. Corregir todos los "require" por "import"
2. Renombrar el archivo como "nombre.cjs" agregando una c a la extension para que node entienda que es un CJS

## Configurar formatter en un proyecto node

configurar el formateador en un proyecto puede hacerse creando un archivo settings que sobreescriba  
la configuración general del editor vc asi:

1. Crear carpeta ".vscode"
2. Crear dentro de la carpeta el archivo de configuración "settings.json"

_contenido:_  

    {
        "[typescriptreact]" : {
            "editor.defaultFormatter" :  "biomejs.biome"
        }
    }

aqui se podra poner, eslint, prettier, etc

## Consultar eventos suscritos en el navegador

Cuando hay problemas de suscripcion de eventos, podemos verificar en la consola  
del navegador, los eventos suscritos usando la propiedad Window:

    getEventListeners(window)

## Como recorrer un objeto

    const animals = {
        "gato" : "pequenio",
        "perro" : "mediano",
        "vaca" : "grande"
    }

    const listKeys = Object.keys(animals);

    for (const i in listKeys) {
        console.log(animals[listKeys[i]])
        // mismo que
        console.log(animals[Object.keys(animals)[i]])
    }