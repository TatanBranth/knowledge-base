# Indice

- [¿Que es sprint boot?](#que-es-sprint-boot)  
- [Jar o War](#jar-o-war)  
- [Anotaciones](#anotaciones)  
- [Tipos de anotaciones](#tipos-de-anotacion)
    - [SpringBootApplication](#springbootapplication)
    - [GetMapping](#getmapping)
    - [RestController](#restcontroller)
    - [PathVariable](#pathvariable)

## ¿Que es sprint boot?

Es un framework extendido de __Spring Framework__, que simplifica drásticamente el desarrollo de  
aplicaciones java.
Se centra en la creación rápida y sencilla de aplicaciones, eliminando la necesidad de configuraciones  
externas

## JAR o WAR

__JAR__: se usa cuando se quiere desplegar una aplicación su propio servidor web embebido

    java -jar nombre-archivo

__WAR__: se usa cuando la aplicación se va a desplear en un servidor web adecuado para ello.


## Anotaciones

Una anotación se utiliza para configurar y definir el comportamiento de los componentes de una aplicación

## Tipos de anotacion:

#### SpringBootApplication

    @SpringBootApplication

Esta es la anotación principal que demarca la clase principal de una aplicación

#### GetMapping

    @GetMapping

Es una anotación que se utiliza para asignar solicitudes __HTTP GET__ a metodos de controlador  
especificos en una aplicación __spring boot__ lo que permite crear facilmente __APIS RESTful__  
y manejar las solicitudes __GET__ de manera eficiente y estructurada.

#### RestController

    @RestController

Denota que la clase java es un controlador __REST__, esta anotacion combina `@Controller` y `@ResponseBody`  
por lo que es capaz de manejar solicitudes __HTTP__ y devolver formatos __JSON__ y __XML__


Ejemplo:

    package com.cursoSpringBoot.controllers;

    import org.springframework.web.bind.annotation.GetMapping;
    import org.springframework.web.bind.annotation.RestController;

    @RestController
    public class HelloWordRestController {

        @GetMapping({"/hello", "/hw", "/hola"})
        public String helloWorld() {
            System.out.println("solicitud ejecutada! solo a cada nueva peticion del usuario");
            return "Hello world";
        }

    }

Podemos ver que con __@GetMapping__ pudimos agregar varias rutas de acceso para este especifico endpoint

#### PathVariable

    @PathVariable

Esta anotación nos sirve para usar parámetros dinámicos que sean enviados mediante url

ejemplo:

    package com.cursoSpringBoot.controllers;

    import org.springframework.web.bind.annotation.GetMapping;
    import org.springframework.web.bind.annotation.PathVariable;
    import org.springframework.web.bind.annotation.RestController;

    @RestController
    public class GreetingsRestController {

        @GetMapping({"/greetings/{name}", "/gt/{name}"})
        public String Greetings (@PathVariable String name) {
            return "Hello, " + name;
        }

    }

En el ejemplo identificamos el parámetro __name__ del metodo __Greetings__ como un parámetro  
dinámico web, entonces en cada url que declaremos para el endpoint debemos usarlo para esperar  
un dato desde el lado del cliente


## Microservicios

Son una arquitectura de software en la que una aplicación monolítica se descompone en servicios  
indepedietes.

### Ventajas

1. Escalabilidad independiente  
Cada microservicio escala de forma independiente, lo que permite ajustar de forma individual cada servicio  
según la demanda o la necesidad

2. Despliegue independiente  
Lo que facilita la entrega continua y la actualización de la aplicación sin afectar otros servicios  

3. Facilidad de mantenimiento
Al ser independientes facilita al equipo de mantenimiento la corrección de errores y la gestión de codigo  

4. Flexibilidad tecnologica  
Cada uno puede ser desarrollador en una tecnología o lenguaje distinto según lo que mejor se adapte a su función  
especifica

5. Tolerancia a fallos
Pues un problema en alguno de los microservicios no afecta a los demás lo que mantiene la usabilidad parcial de la aplicación

### Desventajas

1. Complejidad de la gestión  