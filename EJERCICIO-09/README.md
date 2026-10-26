# Ejercicio 09: Event Radar 🎟️

Este proyecto implementa el **filtrado de datos mediante parámetros de consulta opcionales (`Query Params`)** utilizando NestJS, TypeORM y PostgreSQL (`databridge_e09`), conectado de extremo a extremo con una interfaz móvil en React Native.

## ¿Qué se ha implementado?

* **Backend (NestJS + TypeORM + PostgreSQL):**
  * Creación de la base de datos relacional `databridge_e09` y la entidad `Evento` (con campos de nombre, ciudad, categoría y fecha).
  * Inserción automática de datos iniciales al arrancar el módulo.
  * Desarrollo de la lógica en el servicio utilizando el tipado `FindOptionsWhere` de TypeORM para construir consultas dinámicas.
  * Exposición de un endpoint flexible (`GET /eventos`) capaz de recibir y combinar múltiples filtros opcionales (`ciudad` y `categoria`) de forma simultánea.

* **Frontend (React Native & Expo):**
  * Visualización de un listado de eventos mediante componentes estructurados con `FlatList`.
  * Integración de una cabecera informativa que refleja los filtros aplicados en la vista.
  * Consumo de la API mediante peticiones HTTP parametrizadas para mostrar los resultados filtrados al instante en la interfaz móvil.

## Lo que he aprendido

* A utilizar decoradores de consulta (`@Query`) en los controladores de NestJS para capturar parámetros opcionales de la URL.
* A construir dinámicamente condiciones de filtrado en TypeORM según los datos recibidos sin romper las consultas cuando faltan parámetros.
* A coordinar la comunicación Full Stack desde la interfaz de usuario móvil hasta las consultas condicionales en bases de datos relacionales.