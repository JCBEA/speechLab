import { Component } from '@angular/core';

@Component({
  selector: 'app-module-container',
  templateUrl: './module-container.component.html',
  styleUrls: ['./module-container.component.css']
})
export class ModuleContainerComponent {

  title = 'speechLab';
  
  array: any[] = [{
    id: 1,
    title: 'title 1',
    image: 'assets/OIP.jpg'
  },
  {
    id: 2,
    title: 'title 2',
    image: 'assets/OIP.jpg'
  },
  {
    id: 3,
    title: 'title 3',
    image: 'assets/OIP.jpg'
  },
  {
    id: 4,
    title: 'Title 4',
    image: 'assets/OIP.jpg'
  }];

  childValue: boolean = false;
  handleValueChanged(value: boolean) {
    this.childValue = value;
  }
}
