import { Component } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-learning-modules',
  templateUrl: './learning-modules.component.html',
  styleUrls: ['./learning-modules.component.css']
})
export class LearningModulesComponent {
  constructor(private location: Location) { }

  redirectToOtherPage() {
    this.location.back();
  }
  
}
