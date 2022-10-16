import { Component } from '@angular/core';
import {FIRST_COURSE_ID, SECOND_COURSE_ID} from '../../features/courses/services/course-repository.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public firstCourseId = FIRST_COURSE_ID;
  public secondCourseId = SECOND_COURSE_ID;

}
