import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './component/task-list/task-list.component';
import { TaskDetailsComponent } from './component/task-details/task-details.component';
import { TaskComponentsComponent } from './component/task-components/task-components.component';



@NgModule({
  declarations: [
    TaskListComponent,
    TaskDetailsComponent,
    TaskComponentsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TaskModule { }
