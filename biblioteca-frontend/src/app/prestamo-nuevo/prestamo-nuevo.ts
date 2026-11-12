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

  onRegistrarPrestamo(form: NgForm) {
    this.service.crearPrestamo(form.value).subscribe({
      next: (res) => {
        console.log('Préstamo registrado:', res);
        this.mensaje.set('¡Préstamo registrado! ID de Préstamo: ' + res.id + ' (Estado: ' + res.estado + ')');
        form.reset();
      },
      error: (err) => console.error('Error al registrar préstamo:', err)
    });
  }
}
