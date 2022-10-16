import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CourseRepository} from '../../features/courses/services/course-repository.service';
import {Course} from '../../features/courses/models/course.model';


@Component({
  selector: 'app-bad-course-details',
  templateUrl: './bad-course-details.component.html',
  styleUrls: ['./bad-course-details.component.scss']
})
export class BadCourseDetailsComponent implements OnInit {
  course: Course | null = null;

  constructor(
    private _courseService: CourseRepository,
    private _route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this._route.paramMap.subscribe(paramMap => {
      const courseId = Number(paramMap.get('courseId'));
      this._courseService.findOne(courseId).subscribe(res => {
        const { status, data } = res;
        if (data) {
          this.course = data;
        }
      })
    });
  }

}
