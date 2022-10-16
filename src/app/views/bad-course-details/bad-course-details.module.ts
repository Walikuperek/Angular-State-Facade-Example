import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BadCourseDetailsRoutingModule} from './bad-course-details-routing.module';
import {BadCourseDetailsComponent} from './bad-course-details.component';
import {CoursesModule} from '../../features/courses/courses.module';

@NgModule({
  declarations: [
    BadCourseDetailsComponent
  ],
  imports: [
    CommonModule,
    BadCourseDetailsRoutingModule,
    CoursesModule
  ]
})
export class BadCourseDetailsModule {
}
