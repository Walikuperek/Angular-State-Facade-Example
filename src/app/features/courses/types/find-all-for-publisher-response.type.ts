import {Course} from '../models/course.model';

export type FindAllForPublisherResponse = {
 status: 'ok' | 'fail';
 data: Course[] | undefined;
}
