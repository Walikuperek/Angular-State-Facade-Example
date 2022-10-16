import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CourseDetailsRoutingModule} from './course-details-routing.module';
import {CourseDetailsComponent} from './course-details.component';
import {CoursesModule} from '../../features/courses/courses.module';


@NgModule({
  declarations: [
    CourseDetailsComponent
  ],
  imports: [
    CommonModule,
    CourseDetailsRoutingModule,
    CoursesModule
  ]
})
export class CourseDetailsModule {
}
