import { Component } from '@angular/core';
import { ClassCardComponent } from "../layout/class-card/class-card.component";
import { SidebarMenuComponent } from "../../layout/sidebar-menu/sidebar-menu.component";

@Component({
  selector: 'app-classroom-home',
  imports: [ClassCardComponent, SidebarMenuComponent],
  templateUrl: './classroom-home.component.html',
  styleUrl: './classroom-home.component.scss'
})
export class ClassroomHomeComponent {

}
