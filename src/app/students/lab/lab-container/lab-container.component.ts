import { Component } from '@angular/core';

@Component({
  selector: 'app-lab-container',
  templateUrl: './lab-container.component.html',
  styleUrls: ['./lab-container.component.css']
})
export class LabContainerComponent {
  childValue: boolean = false;

  handleValueChanged(value: boolean) {
    this.childValue = value;
  }
}
