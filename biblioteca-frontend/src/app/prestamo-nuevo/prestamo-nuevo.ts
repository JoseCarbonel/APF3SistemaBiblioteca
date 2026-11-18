import { Component, inject, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BibliotecaRest } from '../servicios/biblioteca-rest';

@Component({
  selector: 'app-prestamo-nuevo',
  imports: [FormsModule, CommonModule],
  templateUrl: './prestamo-nuevo.html',
})
export class PrestamoNuevo {
  private service = inject(BibliotecaRest);
  mensaje = signal<string>('');
  errorMsg = signal<string>(''); // NUEVO: mensaje rojo de error

  onRegistrarPrestamo(form: NgForm) {
    this.mensaje.set(''); // NUEVO: limpia el mensaje de éxito anterior
    this.errorMsg.set(''); // NUEVO: limpia el error anterior
    const libroId = form.value.libroId; // NUEVO: guarda el id para usarlo en el mensaje (form.reset() lo borra)
    this.service.crearPrestamo(form.value).subscribe({
      next: (res) => {
        console.log('Préstamo registrado:', res);
        this.mensaje.set('¡Préstamo registrado! ID de Préstamo: ' + res.id + ' (Estado: ' + res.estado + ')');
        form.reset();
      },
      error: () => this.errorMsg.set('Error: El libro con ID ' + libroId + ' no existe.') // CAMBIADO: antes solo escribía en consola
    });
  }
}
