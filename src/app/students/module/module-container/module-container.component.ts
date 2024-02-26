import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-module-container',
  templateUrl: './module-container.component.html',
  styleUrls: ['./module-container.component.css']
})
export class ModuleContainerComponent {
  constructor(private router: Router) { }

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


  redirectToOtherPage() {
    // Use the router to navigate to the desired page
    this.router.navigate(['student/learning_module']); // Replace '/other-page' with the actual route you want to navigate to
  }
}
