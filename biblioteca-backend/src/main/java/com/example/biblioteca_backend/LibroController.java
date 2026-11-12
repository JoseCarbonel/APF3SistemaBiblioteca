package com.example.biblioteca_backend;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/libros")
@SuppressWarnings({"rawtypes", "unchecked"})
public class LibroController {

    private static List libros = new ArrayList();
    private static List resenas = new ArrayList();
    private static int secuenciaLibroId = 3;

    static {
        Map l1 = new HashMap();
        l1.put("id", 1);
        l1.put("titulo", "Cien Años de Soledad");
        l1.put("autor", "Gabriel García Márquez");
        l1.put("isbn", "978-0307474728");
        l1.put("stock", 5);
        libros.add(l1);

        Map l2 = new HashMap();
        l2.put("id", 2);
        l2.put("titulo", "Clean Code");
        l2.put("autor", "Robert C. Martin");
        l2.put("isbn", "978-0132350884");
        l2.put("stock", 3);
        libros.add(l2);
    }

    // 1. GET /api/libros
    @GetMapping
    public List listarLibros() {
        return libros;
    }

    // 2. GET /api/libros/{id}
    @GetMapping("/{id}")
    public ResponseEntity obtenerLibroPorId(@PathVariable int id) {
        for (Object obj : libros) {
            Map l = (Map) obj;
            if ((int) l.get("id") == id) {
                return ResponseEntity.ok(l);
            }
        }
        return ResponseEntity.notFound().build();
    }

    // 3. POST /api/libros
    @PostMapping
    public Map registrarLibro(@RequestBody Map nuevoLibro) {
        nuevoLibro.put("id", secuenciaLibroId++);
        libros.add(nuevoLibro);
        return nuevoLibro;
    }

// 4. POST /api/libros/{id}/reseñas
    @PostMapping("/{id}/reseñas")
    public ResponseEntity agregarResena(@PathVariable int id, @RequestBody Map nuevaResena) {
        boolean existeLibro = false;
        for (Object obj : libros) {
            Map l = (Map) obj;
            if ((int) l.get("id") == id) {
                existeLibro = true;
                break;
            }
        }
        if (!existeLibro) {
            return ResponseEntity.notFound().build();
        }
        nuevaResena.put("libroId", id);
        resenas.add(nuevaResena);
        return ResponseEntity.ok(nuevaResena);
    }
}