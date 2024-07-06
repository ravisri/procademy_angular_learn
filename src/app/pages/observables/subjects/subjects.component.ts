import { Component } from '@angular/core';
import { NewTaskComponent } from '../new-task/new-task.component';
import { ShowTaskComponent } from '../show-task/show-task.component';
import { SubjectComponent } from '../subject/subject.component';

@Component({
  selector: 'app-subjects',
  standalone: true,
  imports: [NewTaskComponent, ShowTaskComponent, SubjectComponent],
  templateUrl: './subjects.component.html',
  styleUrl: './subjects.component.scss'
})
export class SubjectsComponent {

}
