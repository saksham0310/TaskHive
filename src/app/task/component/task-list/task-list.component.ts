import { Component } from '@angular/core';
import { TaskServiceService } from '../../service/task-service.service';
import { Task } from '../../interfaces/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {

  showTaskBox:boolean=false;
  newTaskName:string='';
  TaskHours: number| null =null;
  TaskMin:number | null =null;
  index:number=1;
  Tasks: Task[]=[];
  Total:number=0;

  constructor(private taskService:TaskServiceService){}

  OnInit():void{
    this.Tasks=this.taskService.getAllTask();
  }

   displayTaskBox():void{
    this.showTaskBox=true;
   }

   CloseTaskBox():void{
    this.showTaskBox=false;
    this.resetTaskInputs();
   }

   SubmitNewTask():void{
    if(this.newTaskName.trim())
      {
        const task:Task={
          id:this.index,
          name:this.newTaskName,
          hours:this.TaskHours || 0,
          minutes:this.TaskMin || 0,
          done:false
        }
        this.taskService.addTask(task)
        this.index++;
        this.showTaskBox=false;
        this.Tasks=this.taskService.getAllTask();
        this.Total=this.Tasks.length;
      }
    else
      {
      alert('not create');
      }
    this.resetTaskInputs();
    this.CloseTaskBox();
   }

   private resetTaskInputs(): void {
    this.newTaskName = '';
    this.TaskHours = null;
    this.TaskMin = null;
  }

  removeTask(id:number):void{
    this.taskService.deleteTask(id)
    this.Tasks=this.taskService.getAllTask();
    this.Total=this.Tasks.length;
  }

  DoneTask(id:number)
  {
    const currTask=this.Tasks.find(task=>task.id===id);
    if(currTask)
      {
        currTask.done=!currTask.done;
      }
  }

}
