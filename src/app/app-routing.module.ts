import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LabContainerComponent } from './students/lab/lab-container/lab-container.component';
import { PracticeContainerComponent } from './students/practice/practice-container/practice-container.component';
import { ModuleContainerComponent } from './students/module/module-container/module-container.component';

const routes: Routes = [
{path: '', redirectTo: 'practice', pathMatch: 'full'},
{path: 'practice', component: PracticeContainerComponent},
{path: 'lab', component:LabContainerComponent},
{path: 'module' , component: ModuleContainerComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
