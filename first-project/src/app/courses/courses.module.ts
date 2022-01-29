import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CoursesComponent } from './courses.component';
import { CoursesService } from './services/courses.service';



@NgModule({
  declarations: [
    CoursesComponent,
    CourseDetailComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CoursesComponent
  ],
  providers: [
    CoursesService
  ]
})
export class CoursesModule { }
