import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskServiceService } from '../../service/task-service.service';
import { Task } from '../../service/task.model';
import { Subtask } from '../../subtask.module';

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
          description:this.des
        }
        this.subTask.push(newSubTask);
        this.TaskID++;
        this.des='';
      }
  }
}
