import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesModule } from './courses/courses.module';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { InputPropertyComponent } from './input-property/input-property.component';
import { DataBindingInputPropertyComponent } from './data-binding-input-property/data-binding-input-property.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    StyleBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    InputPropertyComponent,
    DataBindingInputPropertyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CoursesModule,
    TooltipModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
