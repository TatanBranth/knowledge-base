# Indice

-[¿Que es sprint boot?](#que-es-sprint-boot)  
-[Jar o War](#jar-o-war)  
-[Anotaciones](#anotaciones)  

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

tipos de anotacion:

    @SpringBootApplication

Esta es la anotación principal que demarca la clase principal de una aplicación

    @GetMapping


    @RestController

Denota que la clase java es un controlador __REST__, esta anotacion combina `@Controller` y `@ResponseBody`  
por lo que es capaz de manejar solicitudes __HTTP__ y devolver formatos __JSON__ y __XML__