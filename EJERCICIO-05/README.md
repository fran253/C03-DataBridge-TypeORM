# Ejercicio 05: Travel Book ✈️

Este proyecto implementa la actualización parcial de registros (**PATCH**) conectando una aplicación móvil con una API robusta y una base de datos relacional mediante el flujo: **React Native ➔ API NestJS ➔ TypeORM ➔ PostgreSQL**.

##  ¿Qué se ha implementado?

* **Backend (NestJS + TypeORM):**
  * Creación y configuración de la base de datos `databridge_e05` en PostgreSQL.
  * Definición de la entidad `Viaje` y un DTO de actualización (`UpdateViajeDto`) con campos opcionales.
  * Implementación del endpoint **`PATCH /viajes/:id`** en el controlador y servicio, utilizando `repository.merge()` y `repository.save()` para persistir solo los cambios necesarios.

* **Frontend (React Native & Expo):**
  * Una interfaz de usuario para interactuar con la API y actualizar los datos en tiempo real.
  * Configuración de la comunicación por red usando la IP local del equipo para evitar errores de conexión (`Failed to fetch`) en dispositivos o emuladores.

## Lo que he aprendido

* A entender el flujo completo de una petición: cómo el dato viaja desde el botón del móvil, cruza los controladores y servicios del backend, y se actualiza en la base de datos.
* La utilidad del método HTTP **`PATCH`** para modificar parcialmente un recurso existente sin requerir la estructura completa del objeto.
* A resolver problemas comunes de redes locales, puertos y la comprobación directa de registros mediante comandos en la consola de PostgreSQL (`psql`).