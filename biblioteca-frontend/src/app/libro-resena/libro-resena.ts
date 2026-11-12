import { Component, inject, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BibliotecaRest } from '../servicios/biblioteca-rest';

@Component({
  selector: 'app-libro-resena',
  imports: [FormsModule, CommonModule],
  templateUrl: './libro-resena.html',
})
export class LibroResena {
  private service = inject(BibliotecaRest);
  mensaje = signal<string>('');
  errorMsg = signal<string>('');

  onPublicarResena(form: NgForm) {
    this.mensaje.set('');
    this.errorMsg.set('');
    const { libroId, comentario, calificacion } = form.value;
    this.service.crearResena(libroId, { comentario, calificacion }).subscribe({
      next: (res) => {
        console.log('Reseña publicada:', res);
        this.mensaje.set('¡Reseña publicada correctamente para el libro ID ' + libroId + '!');
        form.reset();
      },
      error: () => this.errorMsg.set('Error: El libro con ID ' + libroId + ' no existe.')
    });
  }
}