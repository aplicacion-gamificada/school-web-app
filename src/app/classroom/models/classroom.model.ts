export interface Classroom {
  id: number;
  nombre: string;
  estado: string;
  logo: string;
  progresoPromedio: number;
  estudiantes: number[];
}