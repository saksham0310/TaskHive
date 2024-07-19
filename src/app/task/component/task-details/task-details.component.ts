import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  timer:any;
  IsTimerRunning:boolean=false;
  hours:number=0;
  minutes:number=0;
  seconds:number=0;

  constructor(private route:ActivatedRoute,private service:TaskServiceService, private routes:Router){}

  ngOnInit():void{
    const ID=+this.route.snapshot.paramMap.get('id')!;
    this.task=this.service.getTaskByID(ID);
    this.hours=this.task?.hours||0;
    this.minutes=this.task?.minutes||0;
  }

  startTimer():void{
    if(!this.IsTimerRunning)
    {
      this.IsTimerRunning=true;
      this.timer=setInterval(()=>{
        this.seconds--;
        if(this.seconds<0)
          {
            this.seconds=59;
            this.minutes--;
            if(this.minutes<0)
            {
              this.minutes=59;
              this.hours--;
              if(this.hours<0)
              {
                this.StopTimer();
                alert("Time up!");
              }
            }
          }
      },1000)
    }
  }

  StopTimer():void
  {
    clearInterval(this.timer);
    this.IsTimerRunning=false;
  }

  resetTimer():void{
    this.StopTimer();
    this.hours=this.task?.hours||0;
    this.minutes=this.task?.minutes||0;
    this.seconds=0;
  }

  doneTask(){
    if(this.task)this.task.done=true ;
    this.routes.navigate(['/task-list']);
  }

  deleteTask(){
    if(this.task){
    this.service.deleteTask(this.task.id);
    }
    this.routes.navigate(['/task-list']);
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
