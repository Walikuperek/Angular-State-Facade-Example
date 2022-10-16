import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BadCourseDetailsComponent } from './bad-course-details.component';

const routes: Routes = [{ path: ':courseId', component: BadCourseDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BadCourseDetailsRoutingModule { }
