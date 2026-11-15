**Sistema de Gestión de Biblioteca - API REST + Angular (APF3)**

Este proyecto es una aplicación full stack desarrollada bajo los principios de la arquitectura RESTful: un backend en Spring Boot que expone la API REST y un frontend en Angular 20 que la consume mediante HttpClient. Los datos se gestionan en memoria RAM (ArrayList y HashMap) y se precargan al iniciar el servidor.

**Arquitectura del Proyecto**

El sistema está construido en dos aplicaciones que se comunican mediante HTTP + JSON (backend en el puerto 8080 y frontend en el puerto 4200):

Controller (com.example.biblioteca_backend): Expone la API REST (@RestController) mediante ResponseEntity, gestionando los verbos HTTP (GET, POST, PUT, DELETE) y mapeando datos con @PathVariable y @RequestBody. Está dividido en dos controladores: LibroController (libros y reseñas) y PrestamoController (préstamos).

Configuración CORS (CorsConfig): Autoriza al frontend Angular (localhost:4200 y Codespaces) a realizar peticiones GET, POST, PUT, DELETE y OPTIONS hacia el backend.

Servicio Angular (src/app/servicios/biblioteca-rest.ts): Servicio inyectable (BibliotecaRest) que centraliza las 8 llamadas a la API mediante HttpClient y devuelve Observables.

Componentes Angular (src/app/...): 6 componentes con formularios (ngForm) que usan Signals para actualizar la interfaz: LibroBuscador, LibroDetalle, LibroNuevo, LibroResena, PrestamoNuevo y PrestamoGestion.

Configuración y rutas Angular (app.config.ts, app.routes.ts): Activan HttpClient y el enrutamiento SPA, asociando cada URL con su componente.

**Endpoints de la API (8 Operaciones REST)**

**Gestión de Libros (/api/libros)**

GET /api/libros — Listar todos los libros (200 OK).

GET /api/libros/{id} — Buscar un libro por ID (200 OK / 404 Not Found).

POST /api/libros — Registrar un nuevo libro (200 OK).

POST /api/libros/{id}/reseñas — Agregar una reseña a un libro (200 OK / 404 Not Found).

**Gestión de Préstamos (/api/prestamos)**

POST /api/prestamos — Registrar un préstamo con estado ACTIVO (200 OK).

GET /api/prestamos/usuario/{usuarioId} — Listar préstamos por usuario (200 OK).

PUT /api/prestamos/{id}/devolver — Devolver un libro prestado, cambia el estado a DEVUELTO (200 OK / 404 Not Found).

DELETE /api/prestamos/{id} — Cancelar/Eliminar un préstamo (200 OK / 404 Not Found).

**Formularios Angular (6 Pantallas)**

/libros — Catálogo y búsqueda por título (LibroBuscador).

/libros/detalle — Consultar ficha de un libro por ID (LibroDetalle).

/libros/nuevo — Registrar un nuevo libro (LibroNuevo).

/libros/resena — Publicar una reseña de un libro (LibroResena).

/prestamos/nuevo — Solicitar un nuevo préstamo (PrestamoNuevo).

/prestamos/gestion — Listar, devolver y eliminar préstamos por usuario (PrestamoGestion).

**Ejecución del Proyecto**

Iniciar el backend (Spring Boot, puerto 8080): ./gradlew bootRun

Iniciar el frontend (Angular, puerto 4200): ng serve
