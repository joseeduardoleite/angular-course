import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://loiane.com';
  angularCourse: boolean = true;
  imgUrl: string = 'http://lorempixel.com.br/500/400/?';

  constructor() { }

  ngOnInit(): void {
  }

  getValue() {
    return 1;
  }

  getLikeCourse() {
    return true;
  }

}