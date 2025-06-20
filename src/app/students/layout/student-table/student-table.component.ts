import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Required for ngIf/ngClass
import { TableModule } from 'primeng/table'; // PrimeNG Table Module
import { PaginatorModule, PaginatorState } from 'primeng/paginator'; // PrimeNG Paginator Module (often included with Table, but good to be explicit)
import { ButtonModule } from 'primeng/button';

interface Student {
  name: string;
  classroom: string;
  progress: number;
  achievements: number;
  level: string;
  time: number;
  status: 'Excelente' | 'Bueno' | 'Bajo'; // Enforce specific status values
}

@Component({
  selector: 'app-student-table',
  imports: [CommonModule, // For ngClass
    TableModule,
    PaginatorModule, // Include PaginatorModule
    ButtonModule],
  templateUrl: './student-table.component.html',
  styleUrl: './student-table.component.scss'
})
export class StudentTableComponent implements OnInit{
   students: Student[] = []; // Array to hold student data

  constructor() { }

  ngOnInit(): void {
    // Initialize your student list here
    this.students = [
      { name: 'Pepito García', classroom: '6to A', progress: 92, achievements: 15, level: 'Avanzado', time: 14, status: 'Excelente' },
      { name: 'Carlitos Gonzales', classroom: '6to A', progress: 72, achievements: 9, level: 'Intermedio', time: 10, status: 'Bueno' },
      { name: 'Juancito Perez', classroom: '6to B', progress: 50, achievements: 10, level: 'Intermedio', time: 12, status: 'Excelente' },
      { name: 'Luisito Ramírez', classroom: '6to B', progress: 12, achievements: 1, level: 'Básico', time: 2, status: 'Bajo' },
      { name: 'Jaimito López', classroom: '6to C', progress: 29, achievements: 8, level: 'Avanzado', time: 10, status: 'Excelente' },
      { name: 'Juanito Torres', classroom: '6to C', progress: 15, achievements: 3, level: 'Básico', time: 4, status: 'Bajo' },
      { name: 'Maria Rodriguez', classroom: '6to A', progress: 85, achievements: 12, level: 'Avanzado', time: 13, status: 'Excelente' },
      { name: 'Pedro Martinez', classroom: '6to B', progress: 60, achievements: 7, level: 'Intermedio', time: 9, status: 'Bueno' },
      { name: 'Ana Sánchez', classroom: '6to C', progress: 35, achievements: 5, level: 'Básico', time: 6, status: 'Bajo' },
      { name: 'Diego Gómez', classroom: '6to A', progress: 95, achievements: 18, level: 'Avanzado', time: 15, status: 'Excelente' },
      { name: 'Laura Díaz', classroom: '6to B', progress: 70, achievements: 11, level: 'Intermedio', time: 8, status: 'Bueno' },
      { name: 'Carlos Ruíz', classroom: '6to C', progress: 20, achievements: 2, level: 'Básico', time: 3, status: 'Bajo' },
      // Add more dummy data as needed
    ];
  }

  first: number = 0;

    rows: number = 10;

    onPageChange(event: PaginatorState) {
        this.first = event.first ?? 0;
        this.rows = event.rows ?? 10;
    }

}
