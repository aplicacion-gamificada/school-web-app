import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar-menu',
  imports: [RouterModule, CommonModule],
  templateUrl: './sidebar-menu.component.html',
  styleUrl: './sidebar-menu.component.scss'
})
export class SidebarMenuComponent implements OnInit {
  userType: 'docente' | 'apoderado' = 'docente'; // Valor por defecto

  menuItemsDocente = [
    { label: 'Inicio', icon: 'images/icon-inicio.png', route: '/home' },
    { label: 'Mis Aulas', icon: 'images/icon-aulas.png', route: '/classrooms' },
    { label: 'Estudiantes', icon: 'images/icon-logro.png', route: '/students' },
    { label: 'Reportes', icon: 'images/icon-reportes.png', route: '/reports' },
    { label: 'Logros', icon: 'images/icon-logros.png', route: '/achievements' }
  ];

  menuItemsApoderado = [
    { label: 'Inicio Ap', icon: 'images/icon-inicio.png', route: '/home-ap' },
    { label: 'Reportes Ap', icon: 'images/icon-reportes.png', route: '/reports-ap' },
    { label: 'Logros Ap', icon: 'images/icon-logros.png', route: '/achievements-ap' }
  ];

  menuItems = this.menuItemsDocente; // Inicialmente, se muestran los elementos del docente

  user = {
    name: 'Luis Valdivia',
    avatar: 'images/icon-avatar-2.png' 
  };

  ngOnInit() {
    this.updateMenuItems();
  }

  updateMenuItems() {
    if (this.userType === 'docente') {
      this.menuItems = this.menuItemsDocente;
    } else {
      this.menuItems = this.menuItemsApoderado;
    }
  }
}
