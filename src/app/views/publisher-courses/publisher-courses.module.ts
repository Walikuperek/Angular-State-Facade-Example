import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PublisherCoursesRoutingModule} from './publisher-courses-routing.module';
import {PublisherCoursesComponent} from './publisher-courses.component';
import {CoursesModule} from '../../features/courses/courses.module';


@NgModule({
  declarations: [
    PublisherCoursesComponent
  ],
  imports: [
    CommonModule,
    PublisherCoursesRoutingModule,
    CoursesModule
  ]
})
export class PublisherCoursesModule {
}
