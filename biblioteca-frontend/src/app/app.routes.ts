import { Routes } from '@angular/router';
import { LibroBuscador } from './libro-buscador/libro-buscador';
import { LibroNuevo } from './libro-nuevo/libro-nuevo';
import { LibroDetalle } from './libro-detalle/libro-detalle';
import { LibroResena } from './libro-resena/libro-resena';
import { PrestamoNuevo } from './prestamo-nuevo/prestamo-nuevo';
import { PrestamoGestion } from './prestamo-gestion/prestamo-gestion';

export const routes: Routes = [
  { path: '', redirectTo: 'libros', pathMatch: 'full' },
  { path: 'libros', component: LibroBuscador, title: 'Catálogo de Libros' },
  { path: 'libros/nuevo', component: LibroNuevo, title: 'Nuevo Libro' },
  { path: 'libros/detalle', component: LibroDetalle, title: 'Detalle de Libro' },
  { path: 'libros/resena', component: LibroResena, title: 'Reseñas' },
  { path: 'prestamos/nuevo', component: PrestamoNuevo, title: 'Nuevo Préstamo' },
  { path: 'prestamos/gestion', component: PrestamoGestion, title: 'Gestión de Préstamos' },
];