import { Component, Input, OnInit } from '@angular/core';
import { ProgressBarModule } from 'primeng/progressbar';

@Component({
  selector: 'app-class-card',
  imports: [ProgressBarModule],
  templateUrl: './class-card.component.html',
  styleUrl: './class-card.component.scss'
})
export class ClassCardComponent implements OnInit{
  @Input() className: string = 'Sexto Grado A';
  @Input() status: 'Activo' | 'Inactivo' = 'Activo';
  @Input() numberOfStudents: number = 24;
  @Input() averageProgress: number = 65; // This will be the value for the progress bar

  constructor() { }

  ngOnInit(): void {
    // You can add any initialization logic here
  }
}
