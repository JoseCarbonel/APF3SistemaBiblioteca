package com.example.biblioteca_backend;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/prestamos")
@SuppressWarnings({"rawtypes", "unchecked"})
public class PrestamoController {

    private static List prestamos = new ArrayList();
    private static int secuenciaPrestamoId = 2;

    static {
        Map p1 = new HashMap();
        p1.put("id", 1);
        p1.put("usuarioId", 1);
        p1.put("libroId", 1);
        p1.put("diasPrestamo", 7);
        p1.put("estado", "ACTIVO");
        prestamos.add(p1);
    }

    // 5. POST /api/prestamos
    @PostMapping
    public Map crearPrestamo(@RequestBody Map nuevoPrestamo) {
        nuevoPrestamo.put("id", secuenciaPrestamoId++);
        nuevoPrestamo.put("estado", "ACTIVO");
        prestamos.add(nuevoPrestamo);
        return nuevoPrestamo;
    }

    // 6. GET /api/prestamos/usuario/{usuarioId}
    @GetMapping("/usuario/{usuarioId}")
    public List listarPorUsuario(@PathVariable int usuarioId) {
        List resultado = new ArrayList();
        for (Object obj : prestamos) {
            Map p = (Map) obj;
            if (Integer.parseInt(p.get("usuarioId").toString()) == usuarioId) {
                resultado.add(p);
            }
        }
        return resultado;
    }

    // 7. PUT /api/prestamos/{id}/devolver
    @PutMapping("/{id}/devolver")
    public ResponseEntity devolverPrestamo(@PathVariable int id) {
        for (Object obj : prestamos) {
            Map p = (Map) obj;
            if ((int) p.get("id") == id) {
                p.put("estado", "DEVUELTO");
                return ResponseEntity.ok(p);
            }
        }
        return ResponseEntity.notFound().build();
    }

    // 8. DELETE /api/prestamos/{id}
    @DeleteMapping("/{id}")
    public ResponseEntity eliminarPrestamo(@PathVariable int id) {
        for (int i = 0; i < prestamos.size(); i++) {
            Map p = (Map) prestamos.get(i);
            if ((int) p.get("id") == id) {
                prestamos.remove(i);
                Map resp = new HashMap();
                resp.put("mensaje", "Préstamo eliminado correctamente");
                return ResponseEntity.ok(resp);
            }
        }
        return ResponseEntity.notFound().build();
    }
}