import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './components/course-list/course-list.component';
import { CourseDetailsCardComponent } from './components/course-details-card/course-details-card.component';



@NgModule({
    declarations: [
        CourseListComponent,
        CourseDetailsCardComponent
    ],
    exports: [
        CourseDetailsCardComponent,
        CourseListComponent
    ],
    imports: [
        CommonModule
    ]
})
export class CoursesModule { }
