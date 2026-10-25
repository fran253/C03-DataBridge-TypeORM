# Ejercicio 07: Sneaker Vault 👟

Este proyecto implementa un **CRUD completo** (Create, Read, Update, Delete) conectando una aplicación móvil con una API de NestJS y una base de datos relacional en PostgreSQL (`databridge_e07`), incorporando además una regla visual derivada para el control de stock.

## ¿Qué se ha implementado?

* **Backend (NestJS + TypeORM + PostgreSQL):**
  * Configuración de la base de datos `databridge_e07`.
  * Creación de la entidad `Sneaker` y sus DTOs asociados incluyendo la propiedad numérica `stock`.
  * Exposición y comprobación de las operaciones HTTP mediante endpoints robustos: `GET`, `POST`, `PATCH` y `DELETE`.

* **Frontend (React Native & Expo):**
  * Listado dinámico de zapatillas utilizando `FlatList`.
  * Creación de nuevos registros mediante peticiones `POST` conectadas a la API local.
  * Renderizado condicional en la interfaz: visualización del stock numérico o la etiqueta **"AGOTADO"** en rojo cuando el valor de stock es `0`.
  * Resincronización automática de la interfaz (`cargar()`) tras cada modificación o eliminación de datos.

## Lo que he aprendido

* A coordinar el flujo completo de los datos desde la interfaz de React Native, atravesando controladores, servicios y repositorios de NestJS, hasta la persistencia real en PostgreSQL.
* A manejar un CRUD completo combinando métodos HTTP de creación, lectura, actualización parcial y borrado.
* A implementar lógica de presentación derivada (como mostrar "AGOTADO") a partir de un valor numérico almacenado en la base de datos sin alterar la naturaleza del dato original.