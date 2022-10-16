import {Injectable} from '@angular/core';
import {FindOneCourseResponse} from '../types/find-one-course-response.type';
import {Course} from '../models/course.model';
import {ICourse} from '../interfaces/course.interface';
import {Observable, of} from 'rxjs';
import {FindAllForPublisherResponse} from '../types/find-all-for-publisher-response.type';


export const FIRST_PUBLISHER_ID = 'ERfa*7&8kasko187)';
export const SECOND_PUBLISHER_ID = 'ERfa*^%12178ajs0)';

export const FIRST_COURSE_ID = 5478780898098009;
export const SECOND_COURSE_ID = 5478780898098010;
export const THIRD_COURSE_ID = 5478780898098011;

@Injectable({
  providedIn: 'root'
})
export class CourseRepository {

  public findOne(courseId: number): Observable<FindOneCourseResponse> {
    const course = fetchCourseById(courseId);
    return of({
      status: course ? 'ok' : 'fail',
      data: course ? new Course(course) : undefined
    })
  }

  public findAllForPublisher(publisherId: string): Observable<FindAllForPublisherResponse> {
    const courses = fetchCoursesByPublisherId(publisherId);
    courses.map(course => new Course(course));
    return of({
      status: courses ? 'ok' : 'fail',
      data: courses ? courses : undefined
    })
  }

}


function fetchCourseById(courseId: number): ICourse | undefined {
  return dbCoursesTable().find(course => course.id === courseId);
}


function fetchCoursesByPublisherId(id: string): ICourse[] {
  return dbCoursesTable().filter(course => course.publisher_id === id);
}


function dbCoursesTable(): ICourse[] {
  return [
    {
      id: FIRST_COURSE_ID,
      title: 'Last Kingdom 3E',
      publisher_id: FIRST_PUBLISHER_ID,
      is_deleted: false,
      created_at: new Date('11/09/2022'),
      updated_at: new Date('11/09/2022')
    },
    {
      id: SECOND_COURSE_ID,
      title: 'Last Kingdom 4E',
      publisher_id: SECOND_PUBLISHER_ID,
      is_deleted: false,
      created_at: new Date('11/09/2022'),
      updated_at: new Date('11/09/2022')
    },
    {
      id: THIRD_COURSE_ID,
      title: 'Last Kingdom 5E',
      publisher_id: SECOND_PUBLISHER_ID,
      is_deleted: false,
      created_at: new Date('12/09/2022'),
      updated_at: new Date('12/09/2022')
    }
  ]
}
