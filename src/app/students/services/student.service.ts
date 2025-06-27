import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, of } from 'rxjs';
import { Student } from '../models/student.model';
import { Docente } from '../../shared/docente.service';

@Injectable({ providedIn: 'root' })
export class EstudianteService {
  private url = 'assets/data/estudiantes.json';
  private cache: Student[] = [];

  constructor(private http: HttpClient) {}

  obtenerEstudiantes(): Observable<Student[]> {
    if (this.cache.length > 0) return of(this.cache);
    return this.http.get<Student[]>(this.url);
  }

  obtenerPorAula(aulaId: number): Observable<Student[]> {
    return this.obtenerEstudiantes().pipe(
      map((lista) => lista.filter((e) => e.aulaId === aulaId))
    );
  }

  obtenerEstudiantePorId(id: number): Observable<Student | undefined> {
    return this.obtenerEstudiantes().pipe(
      map((lista) => lista.find((e) => e.id === id))
    );
  }

  obtenerEstudiantesPorDocente(docente: Docente): Observable<Student[]> {
  return this.obtenerEstudiantes().pipe(
    map((estudiantes) =>
      estudiantes.filter((e) => docente.aulasAsignadas.includes(e.aulaId))
    )
  );
}
}