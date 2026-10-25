# Ejercicio 08: My Playlists 🎵

Este proyecto implementa la **relación de datos mediante claves foráneas** (`OneToMany` y `ManyToOne`) conectando una aplicación móvil con una API de NestJS y una base de datos relacional en PostgreSQL (`databridge_e08`).

## ¿Qué se ha implementado?

* **Backend (NestJS + TypeORM + PostgreSQL):**
  * Creación y configuración de la base de datos relacional `databridge_e08`.
  * Definición de las entidades `Playlist` (con relación `@OneToMany`) y `Cancion` (con relación `@ManyToOne`).
  * Creación del DTO de inserción (`CreateCancionDto`) adaptado para recibir el identificador de la playlist asociada.
  * Desarrollo de la lógica en el servicio para buscar la entidad padre antes de guardar el registro hijo y cargar las relaciones mediante `relations`.
  * Exposición de los endpoints correspondientes para la lectura de la playlist con sus canciones (`GET /playlists/:id`) y la creación de nuevas canciones asociadas (`POST`).

* **Frontend (React Native & Expo):**
  * Visualización de la información principal de la playlist y su listado de canciones mediante componentes estructurados con `FlatList`.
  * Integración del botón **"+ Añadir canción"** para enviar peticiones `POST` vinculadas al ID de la playlist activa.
  * Resincronización automática de la interfaz tras cada inserción para reflejar los datos actualizados al instante.

## Lo que he aprendido

* A estructurar relaciones de tipo uno a muchos (`OneToMany` / `ManyToOne`) y gestionar claves foráneas utilizando TypeORM.
* A coordinar operaciones en el backend donde un recurso hijo depende directamente de la existencia de un recurso padre.
* A seguir y comprender el flujo completo de los datos relacionales desde una interfaz móvil hasta su almacenamiento persistente en PostgreSQL.