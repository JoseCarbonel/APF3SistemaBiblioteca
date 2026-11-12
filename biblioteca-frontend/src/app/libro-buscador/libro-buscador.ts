import { Component, inject, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BibliotecaRest } from '../servicios/biblioteca-rest';

@Component({
  selector: 'app-libro-buscador',
  imports: [FormsModule, CommonModule],
  templateUrl: './libro-buscador.html',
})
export class LibroBuscador {
  private service = inject(BibliotecaRest);
  libros = signal<any[]>([]);

  onBuscar(form: NgForm) {
    const filtro = (form.value.titulo || '').toLowerCase();
    this.service.getLibros().subscribe({
      next: (data) => {
        console.log('Catálogo recibido:', data);
        const filtrados = filtro 
          ? data.filter(l => l.titulo?.toLowerCase().includes(filtro))
          : data;
        this.libros.set(filtrados);
      },
      error: (err) => console.error('Error al consultar libros:', err)
    });
  }
}
