import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, of } from 'rxjs';
import { Classroom } from '../models/classroom.model';
import { Docente } from '../../shared/docente.service';

@Injectable({ providedIn: 'root' })
export class ClassroomService {
  private url = 'assets/data/aulas.json';
  private cache: Classroom[] = [];

  constructor(private http: HttpClient) {}

  obtenerAulas(): Observable<Classroom[]> {
    if (this.cache.length > 0) return of(this.cache);
    return this.http.get<Classroom[]>(this.url);
  }

  obtenerAulaPorId(id: number): Observable<Classroom | undefined> {
    return this.obtenerAulas().pipe(
      map((aulas: any[]) => aulas.find((aula) => aula.id === id))
    );
  }

  obtenerAulasDeDocente(docente: Docente): Observable<Classroom[]> {
  return this.obtenerAulas().pipe(
    map((aulas) =>
      aulas.filter((aula) => docente.aulasAsignadas.includes(aula.id))
    )
  );
}
}