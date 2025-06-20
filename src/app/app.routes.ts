import { Routes } from '@angular/router';
import { HomeComponent } from './dashboard/home/home.component';
import { ClassroomHomeComponent } from './classroom/classroom-home/classroom-home.component';
import { StudentsHomeComponent } from './students/students-home/students-home.component';
import { ReportHomeComponent } from './reports/report-home/report-home.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path:'classrooms',
        component: ClassroomHomeComponent,
    },
    {
        path:'students',
        component: StudentsHomeComponent,
    },
    {
        path:'reports',
        component: ReportHomeComponent
    }
];
