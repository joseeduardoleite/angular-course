import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBindingOutputPropertyComponent } from './data-binding-output-property.component';

describe('DataBindingOutputPropertyComponent', () => {
  let component: DataBindingOutputPropertyComponent;
  let fixture: ComponentFixture<DataBindingOutputPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataBindingOutputPropertyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataBindingOutputPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
