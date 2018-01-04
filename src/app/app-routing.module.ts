import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListOfListsComponent } from './list-of-lists/list-of-lists.component';
import { TaskComponent } from './task/task.component';


const routes: Routes = [
  { path: '', redirectTo: '/tasks', pathMatch: 'full' },
  { path: 'tasks', component: TaskComponent },
  { path: 'lists', component: ListOfListsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }