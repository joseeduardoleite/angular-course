import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-output-property',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  @Input() value : number = 0;

  @Output() changedValue = new EventEmitter();

  @ViewChild('inputField', { static: false }) valueInputField!: ElementRef;

  constructor() { }

  ngOnInit(): void { }

  increment() {
    this.valueInputField!.nativeElement.value++;
    this.changedValue.emit(this.value);
  }

  decrement() {
    
    this.valueInputField!.nativeElement.value--;
    this.changedValue.emit(this.value);
  }

}