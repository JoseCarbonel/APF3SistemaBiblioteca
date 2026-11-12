import { Component, inject, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BibliotecaRest } from '../servicios/biblioteca-rest';

@Component({
  selector: 'app-prestamo-gestion',
  imports: [FormsModule, CommonModule],
  templateUrl: './prestamo-gestion.html',
})
export class PrestamoGestion {
  private service = inject(BibliotecaRest);
  prestamos = signal<any[]>([]);
  mensaje = signal<string>('');
  usuarioActualId = 0;

  onConsultarUsuario(form: NgForm) {
    this.usuarioActualId = form.value.usuarioId;
    this.mensaje.set('');
    this.cargarPrestamos();
  }

  cargarPrestamos() {
    this.service.getPrestamosUsuario(this.usuarioActualId).subscribe({
      next: (data) => {
        console.log('Préstamos del usuario:', data);
        this.prestamos.set(data);
      },
      error: (err) => console.error('Error al listar préstamos:', err)
    });
  }

  onDevolver(prestamoId: number) {
    this.service.devolverPrestamo(prestamoId, { estado: 'DEVUELTO' }).subscribe({
      next: (res) => {
        console.log('Préstamo devuelto:', res);
        this.mensaje.set('Préstamo #' + prestamoId + ' marcado como DEVUELTO.');
        this.cargarPrestamos();
      },
      error: (err) => console.error('Error al devolver:', err)
    });
  }

  onEliminar(prestamoId: number) {
    this.service.eliminarPrestamo(prestamoId).subscribe({
      next: (res) => {
        console.log('Préstamo eliminado:', res);
        this.mensaje.set('Préstamo #' + prestamoId + ' eliminado del sistema.');
        this.cargarPrestamos();
      },
      error: (err) => console.error('Error al eliminar:', err)
    });
  }
}
