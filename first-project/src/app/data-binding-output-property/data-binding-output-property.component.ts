import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding-output-property',
  templateUrl: './data-binding-output-property.component.html',
  styleUrls: ['./data-binding-output-property.component.css']
})
export class DataBindingOutputPropertyComponent implements OnInit {

  initialValue: number = 15;

  constructor() { }

  ngOnInit(): void { }

  onChangedValue(event: any) {
    console.log(event);    
  }

}