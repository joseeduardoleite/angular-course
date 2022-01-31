import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output-property',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  @Input() value : number = 0;

  @Output() changedValue = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  increment() {
    this.value++;
    this.changedValue.emit(this.value);
  }

  decrement() {
    this.value--
  }

}