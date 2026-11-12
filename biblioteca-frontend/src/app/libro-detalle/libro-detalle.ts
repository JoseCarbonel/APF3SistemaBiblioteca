import { Component, inject, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BibliotecaRest } from '../servicios/biblioteca-rest';

@Component({
  selector: 'app-libro-detalle',
  imports: [FormsModule, CommonModule],
  templateUrl: './libro-detalle.html',
})
export class LibroDetalle {
  private service = inject(BibliotecaRest);
  libro = signal<any | null>(null);
  errorMsg = signal<string>('');

  onConsultarId(form: NgForm) {
    this.errorMsg.set('');
    this.libro.set(null);
    this.service.getLibroPorId(form.value.id).subscribe({
      next: (data) => {
        console.log('Detalle del libro:', data);
        this.libro.set(data);
      },
      error: () => this.errorMsg.set('No se encontró un libro con ese ID.')
    });
  }
}