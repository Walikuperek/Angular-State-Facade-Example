import {Component, Input} from '@angular/core';
import {Course} from '../../models/course.model';

@Component({
  selector: 'app-course-details-card',
  templateUrl: './course-details-card.component.html',
  styleUrls: ['./course-details-card.component.scss']
})
export class CourseDetailsCardComponent {

  @Input() course: Course | null = null;

}
