# Indice

- [Función autoinvocada](#función-autoinvocada)
- [Operador de fusión de nullos](#operador-de-fusión-de-nullos)
- [Operador de nullidad](#operador-de-nullidad)
- [Spread operator](#spread-operator)
- [Rest operator](#rest-operator)
- [Object entries](#object-entries)
- [Object from entries](#object-from-entries)
- [Promesas](#promesas)
- [Configuración archivos EMS y CSJ](#configuración-archivos-ems-y-csj)
- [Configurar formatter en un proyecto node](#configurar-formatter-en-un-proyecto-node)
- [Consultar eventos suscritos en navegador](#consultar-eventos-suscritos-en-el-navegador)
- [Como recorrer un objeto](#como-recorrer-un-objeto)
- [Utilizar biblioteca Tempo para fechas](#)
- [Date fns](#date-fns)
- [Formularios](#formularios)
    - [Acceder a la información de los elementos del formulario](#acceder-a-la-información-de-los-elementos-del-formulario)
    - [Event preventDefault](#event-preventdefault)


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

## Spread operator

Para evitar mutar arrays u objetos se debe usar el spread operator que hace una copia  
de un objeto o array:

    const newArray = [...oldArray]
    // copia superficial del array

    const newObject = {...oldObject}
    // copia superficial del objeto

    const newArray =  structuredClone(oldArray)
    // copia profunda de un array u objecto, que tienen anidaciones de objetos o arrays dentro

## Rest operator

Este operador usulamente se usa para dividir por ejemplo en la destructuracion:

    const [primero, segundo, ...resto] = [1,2,3,4,5,6];
    console.log(resto) // [3,4,5,6]

También se puede usar para agrupar argumentos en una función

    function sumar(...numeros) {
        return numero.reduce((acumulador,numero) => acumulador + numero, 0);
    }
    // presenta la suma de todos los numeros que sean pasados por parámetro
    console.log(sumar(1,2,3,4)); // 10


## Object entries

Parámetro:  
Un objeto (clave, valor)

retorna:  
Un array de arrays de pares clave, valor: ```[[clave, valor],[clave, valor] ...]```

Ejemplo:  
    const object1 = {
        a: 'somestring',
        b: 42,
    };

    for (const [key,value] of Object.entries(object1)) { // mismo que "for (const value of Object.entries(object1))"
        console.log(`${key}: ${value}`);                 // console.log (`${value[0]}: ${value[1]}`)
    }

    // Expected output:
    // "a: somestring"
    // "b: 42"

## Object from entries

Parámetro:  
Un Array con subarrays de pares ordenados ```[[clave, valor],[clave, valor] ...]```  
también puede ser el resultado de un ``` Map() ```

Return:  
Un objeto (clave, valor)

Ejemplo:  

    const entries = new Map([
        ['foo', 'bar'],
        ['baz', 42],
    ]);

    const obj = Object.fromEntries(entries);

    console.log(obj);
    // Expected output: Object { foo: "bar", baz: 42 }

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

## Usar la biblioteca Tempo para fechas

es una biblioteca muy util para formatear fechas en javascript

    npm install @formkit/tempo

[Documentacion](https://tempo.formkit.com/#introduction)

# Formularios

## Acceder a la información de los elementos del formulario

Extraer la información de los elementos de un formulario mediante el evento:

    function handleSubmit (event) {
        const fields = New window.FormData(event.target);
        const inputValue = fields.get('inputName')
    }

HTML:

    <form class='form' onSubmit='handleSubmit'>
        <input name='inputName' placeholder='wherever'/>
        <button type='submit'>accept</button>
    </form>

Extraer multiples inputs:

    function handleSubmit (event) {
        // returna un objeto con todos los inputs del formulario
        const fields = Object.fromEntries(new window.FormData(event.target));
    }

## Event preventDefault

De manera nativa cuando usamos un formulario Html y se activa su evento "submit" este recargará la página  
para evitar este comportamiento predeterminado se usa el siguiente metodo:

    function handleSubmit(event) {
        event.preventDefault();
    }

Evitando que se recarge la página y pudiendo maniobrar sobre el formulario


## Date fns

Biblioteca para usar fechas, tiene funciones muy utiles como el uso de zonas horarias  
para mostrar una fecha y hora dependiendo desde que zona del mundo se este visualizando

[Date-fns](https://date-fns.org)

    npm install date-fns --save