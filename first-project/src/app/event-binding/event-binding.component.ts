import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  currentValue: string = '';
  savedValue: string = '';
  isMouseOver: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  clicked() {
    alert('Clicado')
  }

  onKeyUp(event: KeyboardEvent) {
    // this.currentValue = evento.key;
    this.currentValue = (<HTMLInputElement>event.target).value;
  }

  saveValue(value: any) {
    this.savedValue = value;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }
}