import {Injectable} from '@angular/core';
import {StateService} from 'util-abstracts';
import {Observable, shareReplay, tap} from 'rxjs';
import {CourseFacade} from '../../courses/domain/course-facade.service';
import {Course} from '../../courses/models/course.model';
import {FindAllForPublisherResponse} from '../../courses/types/find-all-for-publisher-response.type';

interface PublisherState {
  publisherId: string | null;
  publisherCourses: Course[];
}

const DEFAULT_STATE = {
  publisherId: null,
  publisherCourses: []
};

@Injectable({
  providedIn: 'root'
})
export class PublisherFacade extends StateService<PublisherState> {

  $publisherId = this.select(state => state.publisherId).pipe(shareReplay({bufferSize: 1, refCount: true}));
  $publisherCourses = this.select(state => state.publisherCourses);

  constructor(
    private _courseFacade: CourseFacade
  ) {
    super(DEFAULT_STATE);
  }

  findAll(publisherId: string): Observable<FindAllForPublisherResponse> {
    return this._courseFacade.findAllForPublisher(publisherId).pipe(
      tap(res => {
        this.setState({
          publisherId: publisherId,
          publisherCourses: res.data ? res.data : this.state.publisherCourses
        });
      })
    );
  }

}
