import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './component/task-list/task-list.component';
import { TaskDetailsComponent } from './component/task-details/task-details.component';
import { NavComponent } from './component/nav/nav.component';
import { RouterModule } from '@angular/router';
import { TaskCardsComponent } from './component/task-cards/task-cards.component';

@NgModule({
  declarations: [
    TaskListComponent,
    TaskDetailsComponent,
    NavComponent,
    TaskCardsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    TaskListComponent,
    TaskDetailsComponent
  ]
})
export class TaskModule { }
