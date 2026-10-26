# Ejercicio 03: Pet Profile 🐾

Este proyecto implementa la lectura de un registro concreto mediante **Path Param** y búsqueda individual en una API con NestJS, TypeORM y PostgreSQL (`databridge_e03`), conectado con una interfaz móvil en React Native.

## 🚀 ¿Qué se ha implementado?

* **Backend (NestJS + TypeORM + PostgreSQL):**
  * Creación de la base de datos relacional `databridge_e03` y la entidad `Mascota` (incorporando el campo `nivelEnergia`).
  * Inserción automática de datos iniciales al arrancar mediante `OnModuleInit`.
  * Desarrollo de la lógica en el servicio utilizando `findOneBy({ id })` para recuperar una única entidad.
  * Control de errores de búsqueda individual lanzando un código `404` mediante `NotFoundException` cuando el recurso no existe.
  * Exposición del endpoint individual utilizando `@Get(':id')`, `@Param('id')` y `ParseIntPipe`.

* **Frontend (React Native & Expo):**
  * Solicitud de la ficha de una mascota concreta (`GET /mascotas/:id`) mediante peticiones HTTP `fetch`.
  * Representación visual de los datos de la mascota incluyendo el nuevo atributo de energía.

## 💡 Lo que he aprendido

* A utilizar **Path Params** (`:id`) para identificar recursos específicos en la URL.
* A emplear validadores de parámetros como `ParseIntPipe` y consultas individuales con `findOneBy()`.
* A mantener y ampliar un modelo de datos desde la persistencia en PostgreSQL hasta la pantalla en React Native.
