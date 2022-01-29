import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }

  getCourses() {
    return [
      'Java',
      '.NET 6',
      'Dart',
      'Angular',
      'JavaScript'
    ]
  }
}