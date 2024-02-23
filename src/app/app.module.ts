import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './students/sidenav/sidenav.component';
import { LabContainerComponent } from './students/lab/lab-container/lab-container.component';
import { ActiveBarComponent } from './students/lab/active-bar/active-bar.component';
import { LabButtonsComponent } from './students/lab/lab-buttons/lab-buttons.component';
import { LabLaptopComponent } from './students/lab/lab-laptop/lab-laptop.component';



@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    LabContainerComponent,
    ActiveBarComponent,
    LabButtonsComponent,
    LabLaptopComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
