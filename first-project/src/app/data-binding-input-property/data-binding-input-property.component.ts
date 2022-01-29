import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding-input-property',
  templateUrl: './data-binding-input-property.component.html',
  styleUrls: ['./data-binding-input-property.component.css']
})
export class DataBindingInputPropertyComponent implements OnInit {

  courseName: string = 'Angular';

  constructor() { }

  ngOnInit(): void {
  }

}
