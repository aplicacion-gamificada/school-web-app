import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar-menu',
  imports: [RouterModule, CommonModule],
  templateUrl: './sidebar-menu.component.html',
  styleUrl: './sidebar-menu.component.scss'
})
export class SidebarMenuComponent {
menuItems = [
  { label: 'Inicio', icon: 'images/icon-inicio.png', route: '/home' },
  { label: 'Mis Aulas', icon: 'images/icon-aulas.png', route: '/classrooms' },
  { label: 'Estudiantes', icon: 'images/icon-logro.png', route: '/students' },
  { label: 'Reportes', icon: 'images/icon-reportes.png', route: '/reports' },
  { label: 'Logros', icon: 'images/icon-logros.png', route: '/achievements' }
];

  user = {
    name: 'Luis Valdivia',
    avatar: 'images/icon-avatar-2.png' 
  };
}
