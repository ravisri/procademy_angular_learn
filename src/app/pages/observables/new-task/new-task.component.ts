import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../../services/task.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss'
})
export class NewTaskComponent {
newTask:string = ''

taskService:TaskService = inject(TaskService)

onCreateTask(){
 this.taskService.onCreateTask(this.newTask)
  // this.taskService.onCreateTask(this.newTask)
}
}
