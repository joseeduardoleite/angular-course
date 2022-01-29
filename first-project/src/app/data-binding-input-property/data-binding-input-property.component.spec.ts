import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBindingInputPropertyComponent } from './data-binding-input-property.component';

describe('DataBindingInputPropertyComponent', () => {
  let component: DataBindingInputPropertyComponent;
  let fixture: ComponentFixture<DataBindingInputPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataBindingInputPropertyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataBindingInputPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
