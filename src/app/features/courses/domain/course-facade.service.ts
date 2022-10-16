import { Injectable } from '@angular/core';
import { StateService } from 'util-abstracts';
import {Course} from '../models/course.model';
import {CourseRepository} from '../services/course-repository.service';
import {Observable, tap} from 'rxjs';
import {FindOneCourseResponse} from '../types/find-one-course-response.type';
import {FindAllForPublisherResponse} from "../types/find-all-for-publisher-response.type";

const DEFAULT_STATE = null;

@Injectable({
  providedIn: 'root'
})
export class CourseFacade extends StateService<Course | null> {

  $course = this.select(state => state);

  constructor(private _repository: CourseRepository) {
    super(DEFAULT_STATE);
  }

  findOne(courseId: number): Observable<FindOneCourseResponse> {
    return this._repository.findOne(courseId).pipe(
      tap(res => {
        const course = res.data ? res.data : this.state;
        this.setState(course);
      })
    );
  }

  findAllForPublisher(publisherId: string): Observable<FindAllForPublisherResponse> {
    return this._repository.findAllForPublisher(publisherId);
  }

}
