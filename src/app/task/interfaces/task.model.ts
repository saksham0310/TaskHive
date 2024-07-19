export interface Task{
  id:number;
  name:string;
  hours:number | null;
  minutes:number | null;
  done:boolean;
}