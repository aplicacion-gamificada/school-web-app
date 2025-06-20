
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-weekly-activity-chart',
  imports: [ChartModule],
  templateUrl: './weekly-activity-chart.component.html',
  styleUrl: './weekly-activity-chart.component.scss'
})
export class WeeklyActivityChartComponent implements OnInit{
  data: any;
    options: any;

    constructor(private cd: ChangeDetectorRef) {}

    ngOnInit() {
        // Pequeño delay para asegurar que el DOM esté listo
        setTimeout(() => {
            this.initChart();
        }, 0);
    }

    initChart() {
        // Verificar si estamos en el navegador de forma simple
        if (typeof document !== 'undefined') {
            const textColor = '#989898';
            const textColorSecondary ='#989898';
            const surfaceBorder ='#ffffff';
            
            // Datos hardcodeados con un solo dataset
            this.data = {
                labels: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
                datasets: [
                    {
                        label: 'Estudiantes Activos',
                        data: [32, 20, 15, 12, 10, 12, 9],
                        fill: false,
                        borderColor: '#0CB976',
                        backgroundColor: '#0CB976',
                        tension: 0.4,
                        pointRadius: 4,
                        pointHoverRadius: 6
                    }
                ]
            };

            this.options = {
                maintainAspectRatio: false,
                responsive: true,
                aspectRatio: 0.9, // Hace el gráfico más bajo
                plugins: {
                    legend: {
                        labels: {
                            color: textColor
                        }
                    }
                },
                scales: {
                    x: {
                        ticks: {
                            color: textColorSecondary
                        },
                        grid: {
                            color: surfaceBorder,
                            drawBorder: false
                        }
                    },
                    y: {
                        beginAtZero: true,
                        ticks: {
                            color: textColorSecondary
                        },
                        grid: {
                            color: surfaceBorder,
                            drawBorder: false
                        }
                    }
                }
            };
            
            this.cd.markForCheck();
        }
    }

    // Método para actualizar datos cuando tengas tu servicio
    updateChartData(newData: any[], newLabels?: string[]) {
        if (this.data) {
            this.data = {
                labels: newLabels || this.data.labels,
                datasets: [
                    {
                        ...this.data.datasets[0],
                        data: newData
                    }
                ]
            };
            this.cd.markForCheck();
        }
    }
}
