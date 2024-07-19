import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskServiceService } from '../../service/task-service.service';
import { Task } from '../../interfaces/task.model';
import { Subtask } from '../../interfaces/subtask.module';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent {

  task:Task|undefined;
  subTask:Subtask[]=[];
  des:string='';
  TaskID:number=0;

  hours:number=0;
  minutes:number=0;
  seconds:number=0;

  constructor(private route:ActivatedRoute,private service:TaskServiceService){}

  ngOnInit():void{
    const ID=+this.route.snapshot.paramMap.get('id')!;
    this.task=this.service.getTaskByID(ID);
  }

  addTask():void{
    if(this.des.trim())
      {
        const newSubTask={
          id:this.TaskID,
          description:this.des,
          done:false
        }
        this.subTask.push(newSubTask);
        this.TaskID++;
        this.des='';
      }
  }

  toggleDone(doneTask:Subtask):void
  {
    doneTask.done=!doneTask.done;
  }

  DeleteBtn(deleteTask:Subtask){
    this.subTask=this.subTask.filter(task=>task!==deleteTask)
  }
}
