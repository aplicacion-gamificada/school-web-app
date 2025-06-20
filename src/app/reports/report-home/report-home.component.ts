import { Component } from '@angular/core';
import { SidebarMenuComponent } from "../../layout/sidebar-menu/sidebar-menu.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ReportFilter {
  fechaInicio: string;
  fechaFin: string;
  aula: string;
  bloque: string;
}

interface ReportItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  details: string[];
}

@Component({
  selector: 'app-report-home',
  imports: [SidebarMenuComponent, FormsModule, CommonModule],
  templateUrl: './report-home.component.html',
  styleUrl: './report-home.component.scss'
})
export class ReportHomeComponent {
filters: ReportFilter = {
    fechaInicio: '',
    fechaFin: '',
    aula: '',
    bloque: ''
  };

  reports: ReportItem[] = [
    {
      id: 'progreso',
      title: 'Reporte de progreso',
      description: 'Análisis detallado del avance académico por estudiante, tema y aula. Incluye precisión, ejercicios completados y tendencias de aprendizaje.',
      icon: 'chart',
      color: 'blue',
      details: [
        'Porcentaje de avance por tema',
        'Precisión en ejercicios',
        'Comparativos entre estudiantes',
        'Identificación de áreas de mejora'
      ]
    },
    {
      id: 'logros',
      title: 'Reporte de logros',
      description: 'Estadísticas completas de logros obtenidos, distribución por dificultad y análisis de motivación estudiantil.',
      icon: 'trophy',
      color: 'green',
      details: [
        'Logros más y menos obtenidos',
        'Distribución por dificultad',
        'Impacto motivacional',
        'Sugerencias de nuevos logros'
      ]
    },
    {
      id: 'tiempo',
      title: 'Reporte de tiempo',
      description: 'Análisis del tiempo dedicado por estudiante, eficiencia de aprendizaje y patrones de uso de la plataforma.',
      icon: 'clock',
      color: 'orange',
      details: [
        'Tiempo promedio por ejercicio',
        'Patrones de uso diario/semanal',
        'Eficiencia de aprendizaje',
        'Recomendaciones de práctica'
      ]
    }
  ];

  constructor() {}

  onFilter() {
    console.log('Filtros aplicados:', this.filters);
    // Aquí implementarías la lógica de filtrado
  }

  onPreview(reportId: string) {
    console.log('Vista previa del reporte:', reportId);
    // Aquí implementarías la lógica de vista previa
  }

  onDownloadCSV(reportId: string) {
    console.log('Descargando CSV del reporte:', reportId);
    // Aquí implementarías la lógica de descarga
  }

  clearFilters() {
    this.filters = {
      fechaInicio: '',
      fechaFin: '',
      aula: '',
      bloque: ''
    };
  }
}
