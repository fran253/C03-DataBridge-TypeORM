# Ejercicio 01: Game Vault 🎮

Este proyecto implementa la persistencia de datos de extremo a extremo utilizando una base de datos relacional en PostgreSQL (`databridge_e01`), una API desarrollada con NestJS y TypeORM, y una interfaz móvil en React Native.

## 🚀 ¿Qué se ha implementado?

* **Backend (NestJS + TypeORM + PostgreSQL):**
  * Creación de la base de datos `databridge_e01`.
  * Definición de la entidad `Videojuego` con sus propiedades y columnas.
  * Inserción automática de registros iniciales al arrancar mediante `OnModuleInit`.
  * Exposición de la colección mediante un endpoint `GET /videojuegos` coordinado por el Service y el Repository.

* **Frontend (React Native & Expo):**
  * Consumo de la API mediante peticiones HTTP `fetch`.
  * Representación dinámica del listado de videojuegos utilizando componentes como `FlatList`.

## 💡 Lo que he aprendido

* A conectar una aplicación de NestJS con PostgreSQL utilizando TypeORM y Entities.
* A separar las responsabilidades del flujo de datos entre Controller, Service y Repository.
* A consumir datos reales desde una aplicación móvil en React Native.
