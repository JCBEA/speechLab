import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LabContainerComponent } from './students/lab/lab-container/lab-container.component';
import { ActiveBarComponent } from './students/lab/active-bar/active-bar.component';
import { LabButtonsComponent } from './students/lab/lab-buttons/lab-buttons.component';
import { LabLaptopComponent } from './students/lab/lab-laptop/lab-laptop.component';
import { PracticeContainerComponent } from './students/practice/practice-container/practice-container.component';
import { ModuleContainerComponent } from './students/module/module-container/module-container.component';






import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatGridListModule} from '@angular/material/grid-list';
import { LabContainerTeacherComponent } from './teacher/lab/lab-container-teacher/lab-container-teacher.component';
import { LabLaptopTeacherComponent } from './teacher/lab/lab-laptop-teacher/lab-laptop-teacher.component';
import { ModalsComponent } from './components/modals/modals.component';





@NgModule({
  declarations: [
    AppComponent,
    LabContainerComponent,
    ActiveBarComponent,
    LabButtonsComponent,
    LabLaptopComponent,
    PracticeContainerComponent,
    ModuleContainerComponent,
    LabContainerTeacherComponent,
    LabLaptopTeacherComponent,
    ModalsComponent,

   


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule, MatButtonModule, MatIconModule,MatTabsModule,MatGridListModule,MatIconModule,MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
