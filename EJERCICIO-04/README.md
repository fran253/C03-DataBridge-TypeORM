# Ejercicio 04: Food Spots 🍜

Este proyecto implementa la creación de datos mediante solicitudes **POST**, el uso de **DTOs** para validar los datos de entrada, y la persistencia con `repository.create()` y `repository.save()` en una base de datos PostgreSQL (`databridge_e04`) conectada con una interfaz móvil en React Native.

## ¿Qué se ha implementado?

* **Backend (NestJS + TypeORM + PostgreSQL):**
  * Creación de la base de datos relacional `databridge_e04` y la entidad `Restaurante` (incorporando el campo `precioMedio`).
  * Creación del objeto `CreateRestauranteDto` para describir y estructurar los datos que entran en la API.
  * Desarrollo de la lógica en el servicio utilizando `repository.create(dto)` en memoria y `repository.save()` para persistir el recurso.
  * Exposición del endpoint de creación mediante el decorador `@Post()` y la recepción del cuerpo de la petición con `@Body()`.

* **Frontend (React Native & Expo):**
  * Implementación de un formulario con componentes `TextInput` para capturar los datos introducidos por el usuario.
  * Envío de la información mediante una petición HTTP de tipo `POST` usando `fetch`, transformando el objeto a formato JSON con `JSON.stringify()`.

## Lo que he aprendido

* A utilizar el método **POST** y el decorador **`@Body()`** para recibir datos desde el cliente móvil.
* A emplear un **DTO** (*Data Transfer Object*) para definir y validar la forma de los datos de entrada en la API separándolos de la Entity de persistencia.
* A persistir nuevos registros en PostgreSQL utilizando los métodos `create()` y `save()` de TypeORM.
