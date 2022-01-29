import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  portalName: string;

  courses: string[] = [
    'Java',
    '.NET 6',
    'Dart',
    'Angular',
    'JavaScript'
  ]

  constructor() {
    this.portalName = 'http://loiane.training'
  }

  ngOnInit(): void {
  }

}
