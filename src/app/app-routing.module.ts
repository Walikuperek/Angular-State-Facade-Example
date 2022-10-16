import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'publisher-courses',
    loadChildren: () => import('./views/publisher-courses/publisher-courses.module').then(m => m.PublisherCoursesModule)
  },
  {
    path: 'course-details',
    loadChildren: () => import('./views/course-details/course-details.module').then(m => m.CourseDetailsModule)
  },
  {
    path: '',
    loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule)
  },
  { path: 'bad-course-details', loadChildren: () => import('./views/bad-course-details/bad-course-details.module').then(m => m.BadCourseDetailsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
