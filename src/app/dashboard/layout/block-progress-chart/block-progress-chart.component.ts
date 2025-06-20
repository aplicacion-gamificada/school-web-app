import { ChangeDetectorRef, Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-block-progress-chart',
  imports: [ChartModule],
  templateUrl: './block-progress-chart.component.html',
  styleUrl: './block-progress-chart.component.scss'
})
export class BlockProgressChartComponent implements OnInit {
  basicData: any;
    basicOptions: any;

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
            const textColorSecondary = '#989898';
            const surfaceBorder = '#ffffff';

            // Datos hardcodeados
            this.basicData = {
                labels: ['Bloque 1', 'Bloque 2', 'Bloque 3', 'Bloque 4'],
                datasets: [
                    {
                        label: 'Número de Estudiantes',
                        data: [33, 27, 19, 5],
                        backgroundColor: [
                            '#1D4872',
                            '#0CB976',
                            '#FF6C4E',
                            '#27BEF0',
                        ],
                        borderColor: [
                            '#1D4872', 
                            '#0CB976', 
                            '#FF6C4E', 
                            '#27BEF0'
                        ],
                        borderWidth: 1,
                    },
                ],
            };

            this.basicOptions = {
                maintainAspectRatio: false,
                responsive: true,
                aspectRatio: 0.8,
                plugins: {
                    legend: {
                        labels: {
                            color: textColor,
                        },
                    },
                },
                scales: {
                    x: {
                        ticks: {
                            color: textColorSecondary,
                        },
                        grid: {
                            color: surfaceBorder,
                        },
                    },
                    y: {
                        beginAtZero: true,
                        ticks: {
                            color: textColorSecondary,
                        },
                        grid: {
                            color: surfaceBorder,
                        },
                    },
                },
            };
            
            this.cd.markForCheck();
        }
    }

    // Método para actualizar datos cuando tengas tu servicio
    updateChartData(newData: any[]) {
        if (this.basicData) {
            this.basicData = {
                ...this.basicData,
                datasets: [
                    {
                        ...this.basicData.datasets[0],
                        data: newData
                    }
                ]
            };
            this.cd.markForCheck();
        }
    }
}
