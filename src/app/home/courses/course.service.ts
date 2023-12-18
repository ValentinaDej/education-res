import { Injectable } from '@angular/core';
import { Course } from '../../data/course.model';
import { COURSES } from '../../data/mock-course';
@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private courses: Course[] = COURSES;

  constructor() {}

  getAllCourses(): Course[] {
    return this.courses;
  }

  getCourseById(id: number): Course | undefined {
    return this.courses.find((course) => course.id === id);
  }
}
