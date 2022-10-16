import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublisherCoursesComponent } from './publisher-courses.component';

const routes: Routes = [{ path: '', component: PublisherCoursesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublisherCoursesRoutingModule { }
