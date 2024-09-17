# Indice

- [Funcionalidad para animaciones @starting style](#funcionalidad-starting-style)
- [Funcionalidad Aspect-Ratio](#funcionalidad-aspect-ratio)
- [Funcionalidad animacion inifita de carga](#funcionalidad-animacion-inifita-de-carga)


## Funcionalidad Starting style

funciona para asignar estilos iniciales a una animacion

    dialog[open] { // second step
        scale: 1;
        transition: scale .3s ease-in-out;
        transition: 0px 100px;

        @starting-style { // first step
            scale: 0;
            translate: 0px 0px;
        }
    }

    dialog { // third step
        transition: scale .3s ease,
        display .3s ease allow-discrete;
        scale: 0;
    }

Como se observa asignamos un estado "inicial" a la animación

## Funcionalidad Aspect-Ratio

Utilizar el aspect-ratio: 1/1 para hacer el espacio para iconos previo a su carga
esto evita saltos de renderizacion cuando el icono aun no está y luego aparece

    aspect-ratio: 1/1

También util en la carga de videos o imágenes que puedan tener aspectos como 16/9 (panoramico) por ejemplo

## Funcionalidad animacion inifita de carga

Animacion que puede ser usada en una pantalla de carga mientras se renderiza cierto contenido sin imagenes y solo 200bytes

html:
```
    <div
        class="spinner"
        role="status"
        aria-live="polite"
        area-label="Cargando"
    >
        <span class="visually-hidden">
            Cargando...
        </span>
    </div>
```
Css:

    .spinner {
        width: 36px;
        height: 36px;

        border: 5px solid #fffc;
        border-top-color: #09f;
        border-raduis-color: 100%

        animation: spin 1s infinite;
    }
    .visually-hidden {
        position: absolute;
        width: 1px;
        height: 1px;
        margin: -1px;
        padding: 0;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        border: 0;
    }
    body {
        display: grid;
        place-content: center;
        height: 100vh;
        background: #222;
    }
    @keyframes spin {
        to { transform: rotate(360deg) }
    }

Resultado:
<div
    class="spinner"
    role="status"
    aria-live="polite"
    area-label="Cargando"
    style="width: 36px; height: 36px; border: 5px solid #fffc; border-top-color: #09f; border-radius: 100%; animation: spin 1s infinite;"
>
    <span class="visually-hidden">
        Cargando...
    </span>
</div>
<style>
    .visually-hidden {
        position: absolute;
        width: 1px;
        height: 1px;
        margin: -1px;
        padding: 0;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        border: 0;
    }
    @keyframes spin {
        to {
            transform: rotate(360deg);
        }
    }
</style>
