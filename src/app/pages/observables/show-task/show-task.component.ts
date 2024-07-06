import { Component, OnInit, inject } from '@angular/core';
import { TaskService } from '../../../services/task.service';

@Component({
  selector: 'app-show-task',
  standalone: true,
  imports: [],
  templateUrl: './show-task.component.html',
  styleUrl: './show-task.component.scss'
})
export class ShowTaskComponent implements OnInit{

  title = 'RxJS Subject Example'
tasks:string[] = ['task 1', 'task 2', 'task 3']

constructor(private taskService:TaskService){}


ngOnInit(): void {
this.taskService.CreateTask.subscribe((val:string) => {
  this.tasks.push(val)
})
  }
}
