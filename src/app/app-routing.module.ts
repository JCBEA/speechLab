import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LabContainerComponent } from './students/lab/lab-container/lab-container.component';
import { PracticeContainerComponent } from './students/practice/practice-container/practice-container.component';
import { ModuleContainerComponent } from './students/module/module-container/module-container.component';
import { LabContainerTeacherComponent } from './teacher/lab/lab-container-teacher/lab-container-teacher.component';
import { TdashboardComponent } from './teacher/tdashboard/tdashboard.component';
import { LabLaptopComponent } from './students/lab/lab-laptop/lab-laptop.component';
import { DashboardComponent } from './students/dashboard/dashboard.component';
import { LearningModulesComponent } from './students/module/learning-modules/learning-modules.component';

const routes: Routes = [
 {path: 'student', component: DashboardComponent, children: [
    {path: '', redirectTo: 'practice', pathMatch: 'full'},
    {path: 'practice', component: PracticeContainerComponent},
    {path: 'lab', component:LabContainerComponent},
    {path: 'module' , component: ModuleContainerComponent},
    {path: 'learning_module' , component: LearningModulesComponent},
  ]},
{path: 'teacher', component: TdashboardComponent, children: [
  {path: '',redirectTo:'lab',pathMatch:'full'},
  {path: 'lab', component: LabContainerTeacherComponent},
  {path: 'module' , component: ModuleContainerComponent},

]
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
