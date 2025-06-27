import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

export interface Docente {
  id: number;
  nombre: string;
  email: string;
  aulasAsignadas: number[];
}

@Injectable({ providedIn: 'root' })
export class DocenteService {
  private url = 'assets/data/docente.json';

  constructor(private http: HttpClient) {}

  obtenerDocente(): Observable<Docente> {
    return this.http.get<Docente>(this.url);
  }
}
