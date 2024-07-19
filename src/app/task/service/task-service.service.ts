import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  private Tasks:Task[]=[]

  getAllTask()
  {
    return this.Tasks;
  }

  getTaskByID(id:number)
  {
    return this.Tasks.find(task=>task.id===id);
  }

  addTask(task:Task)
  {
    task.id=this.Tasks.length+1;
    this.Tasks.push(task);
  }

  updateTask(updatedTask:Task){
    const index=this.Tasks.findIndex(task=>task.id==updatedTask.id);
    this.Tasks[index]=updatedTask
  }

  deleteTask(id:number)
  {
    this.Tasks=this.Tasks.filter(task=>task.id!==id)
  }
}
