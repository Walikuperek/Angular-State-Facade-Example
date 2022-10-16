import {ICourse} from '../interfaces/course.interface';

export class Course implements ICourse {
  readonly id: number;
  readonly title: string;
  readonly publisher_id: string;
  readonly is_deleted: boolean;
  readonly created_at: Date;
  readonly updated_at: Date;

  constructor(course: ICourse) {
    this.id = course.id;
    this.title = course.title;
    this.publisher_id = course.publisher_id;
    this.is_deleted = course.is_deleted;
    this.created_at = course.created_at;
    this.updated_at = course.updated_at;
  }
}
