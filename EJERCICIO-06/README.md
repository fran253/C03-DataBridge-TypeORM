# Ejercicio 06: My Library 📚

Este proyecto implementa operaciones de eliminación (`DELETE`) y actualización parcial (`PATCH`) conectando una aplicación móvil con una API y una base de datos relacional mediante el flujo completo: **React Native ➔ API NestJS ➔ TypeORM ➔ PostgreSQL**.

## ¿Qué se ha implementado?

* **Backend (NestJS + TypeORM):**
  * Configuración de la base de datos `databridge_e06` en PostgreSQL.
  * Definición de la entidad `Libro` con el campo booleano `leido`.
  * Creación de endpoints para listar (`GET`), eliminar (`DELETE /libros/:id`) y actualizar el estado de lectura (`PATCH /libros/:id`).

* **Frontend (React Native & Expo):**
  * Listado dinámico de elementos usando `FlatList`.
  * Confirmación previa con `Alert.alert` antes de borrar un libro.
  * Sincronización del estado local de React (`setLibros`) para que la interfaz se actualice de inmediato tras eliminar o marcar un libro como leído, sin necesidad de reiniciar.

## Lo que he aprendido

* A entender por qué es vital sincronizar el estado visual de la app con la base de datos tras un `DELETE` o un `PATCH`.
* El uso del método `PATCH` para modificar parcialmente los datos de un recurso (como cambiar el estado a leído).
* A seguir el flujo del dato desde la pantalla del móvil, cruzando controladores, servicios y repositorios del backend, hasta la persistencia real en PostgreSQL.