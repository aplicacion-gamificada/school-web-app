import { Component } from '@angular/core';
import { SidebarMenuComponent } from '../../layout/sidebar-menu/sidebar-menu.component';
import { WeeklyActivityChartComponent } from "../layout/weekly-activity-chart/weekly-activity-chart.component";
import { BlockProgressChartComponent } from "../layout/block-progress-chart/block-progress-chart.component";
import { HomeCardComponent } from "../layout/home-card/home-card.component";

@Component({
  selector: 'app-home',
  imports: [SidebarMenuComponent, WeeklyActivityChartComponent, BlockProgressChartComponent, HomeCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
