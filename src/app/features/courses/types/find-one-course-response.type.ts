import {Course} from '../models/course.model';

export type FindOneCourseResponse = {
 status: 'ok' | 'fail';
 data: Course | undefined;
}
