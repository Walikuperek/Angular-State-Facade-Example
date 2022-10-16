import {Component, OnInit} from '@angular/core';
import {CourseFacade} from '../../features/courses/domain/course-facade.service';
import {switchMap} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {

  constructor(
    public courseFacade: CourseFacade,
    private _route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this._route.paramMap.pipe(
      switchMap(paramMap => this.courseFacade.findOne(Number(paramMap.get('courseId'))))
    ).subscribe();
  }

}
