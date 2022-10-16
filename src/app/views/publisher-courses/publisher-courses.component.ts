import {Component, OnInit} from '@angular/core';
import {forkJoin} from 'rxjs';
import {SECOND_PUBLISHER_ID} from '../../features/courses/services/course-repository.service';
import {PublisherFacade} from '../../features/publisher/domain/publisher-facade.service';

@Component({
  selector: 'app-publisher-courses',
  templateUrl: './publisher-courses.component.html',
  styleUrls: ['./publisher-courses.component.scss']
})
export class PublisherCoursesComponent implements OnInit {

  constructor(public publisherFacade: PublisherFacade) {
  }

  ngOnInit(): void {
    const publisherIdFromSomewhere = SECOND_PUBLISHER_ID;
    const initObservables = [this.publisherFacade.findAll(publisherIdFromSomewhere)];
    forkJoin(initObservables)
      .subscribe();
  }

}
