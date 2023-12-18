import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.css',
})
export class CourseDetailsComponent {
  course: any;
  panelOpenState: boolean;

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService,
    private location: Location
  ) {}

  ngOnInit() {
    const courseId = +this.route.snapshot.paramMap.get('id');
    this.course = this.courseService.getCourseById(courseId);
  }
  goBack() {
    this.location.back();
  }
}
