import { PageEvent } from '@angular/material/paginator';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from './course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css',
})
export class CoursesComponent {
  courses: any;
  displayedCourses: any;
  totalCourses: number;

  pageSize = 8;
  currentPage = 0;

  constructor(private router: Router, private courseService: CourseService) {}

  ngOnInit() {
    this.courses = this.courseService.getAllCourses();
    this.totalCourses = this.courses.length;
    this.displayedCourses = this.courses.slice(0, this.pageSize);
  }

  onPageChange(event: PageEvent) {
    const startIndex = event.pageIndex * event.pageSize;
    const endIndex = startIndex + event.pageSize;
    this.displayedCourses = this.courses.slice(startIndex, endIndex);
  }

  viewDetails(courseId: number) {
    this.router.navigate(['/home', courseId]);
  }
}
