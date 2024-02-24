import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LabContainerComponent } from './students/lab/lab-container/lab-container.component';
import { TestComponent } from './students/test/test.component';
import { HomeComponent } from './students/home/home.component';

const routes: Routes = [
{path: '', redirectTo: 'home', pathMatch: 'full'},
{path: 'home', component: HomeComponent},
{path: 'test' , component: TestComponent},
{path: 'lab', component:LabContainerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
