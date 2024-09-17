# Indice

- [Hook useRef]()


## Hook useRef

1. Es un hook que nos permite crear una referencia mutable  
2. Persiste durante todo el ciclo de vida del componente  
3. Util para guardar cualquier valor que se pueda muta: id, DOM element, contador etc  
4. Cada vez que un elemento referenciado cambia NO vuelve a renderizar el componente (lo que lo diferencia de useState)  
5. Uso más típico es referenciar elementos del DOM  
6. Si se necesitan referenciar demasiados elementos del DOM es mejor hacerlo con el objeto FormData del evento del formulario  
con javascript puro.

APP:

    import { useRef } from 'react';

    export function App () {
    const inputRef = useRef();

    const handleClick = () => {
        // siempre se debe acceder a la propiedad "current" de la referencia, que es donde esta el input
        // esto lo hace react por que es un objeto mutable
        const value = inputRef.current.value
        console.log(value);
    }
        return (
            <button onClick={handleClick}> </button>
        )
    }

## Manejo de formularios

Para extraer datos de un formulario diligenciado podemos hacerlo de dos maneras con react:

1. Forma no controlada:

    function handleSubmit (event) {
        const fields = New window.FormData(event.target);
        const inputValue = fields.get('inputName')
    }

HTML:

    <form class='form' onSubmit='handleSubmit'>
        <input name='inputName' placeholder='wherever'/>
        <button type='submit'>accept</button>
    </form>

Se dice "forma no controlada" por que React no es quien se está encargando de controlar lo que sucede
con el formulario, en este caso lo estamos haciendo con javascript.

2. Forma controlada:

    import { useRef } from 'react';

    function App() {
        const inputRef = useRef();

        const handleSubmit =  (event) =>{
            event.preventDefault();
            const inputValue = inputRef.current.value;
        }
        return (
        <form onSubmit={handleSubmit}>
            <input ref={inputRef} type="text" placeholder='Search movie'/>
            <button type='submit' >Search</button>
        </form>
        )
    }

## Iconos react

Libreria de iconos para react

    $ npm install react-icons

![alt text](./images/icons.png)