import { Component } from '@angular/core';
import { SidebarMenuComponent } from '../../layout/sidebar-menu/sidebar-menu.component';

@Component({
  selector: 'app-home',
  imports: [SidebarMenuComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
