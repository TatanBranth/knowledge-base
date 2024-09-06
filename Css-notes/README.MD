# Indice

- [Funcionalidad para animaciones @starting style](#funcionalidad-starting-style)
- [Funcionalidad Aspect-Ratio](#funcionalidad-aspect-ratio)


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
