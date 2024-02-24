import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LabContainerComponent } from './students/lab/lab-container/lab-container.component';
import { ActiveBarComponent } from './students/lab/active-bar/active-bar.component';
import { LabButtonsComponent } from './students/lab/lab-buttons/lab-buttons.component';
import { LabLaptopComponent } from './students/lab/lab-laptop/lab-laptop.component';
import { TestComponent } from './students/test/test.component';
import { HomeComponent } from './students/home/home.component';




@NgModule({
  declarations: [
    AppComponent,
    LabContainerComponent,
    ActiveBarComponent,
    LabButtonsComponent,
    LabLaptopComponent,
    TestComponent,
    HomeComponent,
   


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
