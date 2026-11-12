import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BibliotecaRest {
  private http = inject(HttpClient);
  
  private url = 'https://reimagined-carnival-wvr5j79qqgjq3gwp-8080.app.github.dev/api';

  // --- CONTROLADOR 1: LIBROS (4 Operaciones) ---
  getLibros(): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}/libros`);
  }

  getLibroPorId(id: number): Observable<any> {
    return this.http.get<any>(`${this.url}/libros/${id}`);
  }

  crearLibro(libro: any): Observable<any> {
    return this.http.post<any>(`${this.url}/libros`, libro);
  }

  crearResena(libroId: number, resena: any): Observable<any> {
    return this.http.post<any>(`${this.url}/libros/${libroId}/reseñas`, resena);
  }

  // --- CONTROLADOR 2: PRÉSTAMOS (4 Operaciones) ---
  crearPrestamo(prestamo: any): Observable<any> {
    return this.http.post<any>(`${this.url}/prestamos`, prestamo);
  }

  getPrestamosUsuario(usuarioId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}/prestamos/usuario/${usuarioId}`);
  }

  devolverPrestamo(id: number, datos: any): Observable<any> {
    return this.http.put<any>(`${this.url}/prestamos/${id}/devolver`, datos);
  }

  eliminarPrestamo(id: number): Observable<any> {
    return this.http.delete<any>(`${this.url}/prestamos/${id}`);
  }
}