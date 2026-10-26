# Ejercicio 02: CineBox 🎬

Este proyecto implementa la lectura de colecciones mediante TypeORM (`repository.find()`), conectando una base de datos PostgreSQL (`databridge_e02`) con una API de NestJS y una interfaz móvil en React Native.

## ¿Qué se ha implementado?

* **Backend (NestJS + TypeORM + PostgreSQL):**
  * Creación de la base de datos relacional `databridge_e02`.
  * Definición de la entidad `Pelicula` incorporando el campo booleano `favorita`.
  * Inserción automática de registros iniciales al arrancar mediante `OnModuleInit`.
  * Desarrollo de la lógica en el servicio utilizando `repository.find()` con opciones de ordenación y exposición de la colección mediante un endpoint `GET /peliculas`.

* **Frontend (React Native & Expo):**
  * Consumo de la API de películas mediante peticiones HTTP `fetch`.
  * Representación visual de la colección usando `FlatList` e incorporando el renderizado condicional del estado favorita con los símbolos `♥` / `♡`.

## Lo que he aprendido

* A utilizar `repository.find()` para recuperar colecciones completas desde PostgreSQL de forma ordenada.
* A añadir propiedades adicionales persistentes (como `favorita`) y hacerlas ir de extremo a extremo hasta la interfaz de usuario.
* A gestionar colecciones de datos dinámicas en componentes móviles de React Native.
