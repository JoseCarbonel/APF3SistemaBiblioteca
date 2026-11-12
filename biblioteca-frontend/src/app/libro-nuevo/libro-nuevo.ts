import { Component, inject, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BibliotecaRest } from '../servicios/biblioteca-rest';

@Component({
  selector: 'app-libro-nuevo',
  imports: [FormsModule, CommonModule],
  templateUrl: './libro-nuevo.html',
})
export class LibroNuevo {
  private service = inject(BibliotecaRest);
  mensaje = signal<string>('');

  onGuardar(form: NgForm) {
    this.service.crearLibro(form.value).subscribe({
      next: (res) => {
        console.log('Libro guardado:', res);
        this.mensaje.set('¡Libro registrado con éxito! Nuevo ID: ' + res.id);
        form.reset();
      },
      error: (err) => console.error('Error al registrar libro:', err)
    });
  }
}
