import { Component } from '@angular/core';
import { SidebarMenuComponent } from "../../layout/sidebar-menu/sidebar-menu.component";
import { StudentTableComponent } from "../layout/student-table/student-table.component";

@Component({
  selector: 'app-students-home',
  imports: [SidebarMenuComponent, StudentTableComponent],
  templateUrl: './students-home.component.html',
  styleUrl: './students-home.component.scss'
})
export class StudentsHomeComponent {

}
