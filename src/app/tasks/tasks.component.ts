import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;

  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Manage the ropes',
      summary: 'Gotta enroll all that rope - again',
      dueDate: '2026-04-04',
    },
    {
      id: 't2',
      userId: 'u2',
      title: 'Inspect the hull',
      summary: 'Check for cracks, leaks, or damage below deck',
      dueDate: '2026-04-02',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare the cannons',
      summary: 'Clean, load, and ready all cannons for potential combat',
      dueDate: '2026-04-03',
    },
    {
      id: 't4',
      userId: 'u1',
      title: 'Chart the course',
      summary: 'Update maps and define the next navigation route',
      dueDate: '2026-04-01',
    },
    {
      id: 't5',
      userId: 'u4',
      title: 'Cook for the crew',
      summary: 'Prepare meals and ration supplies for the journey',
      dueDate: '2026-04-02',
    },
    {
      id: 't6',
      userId: 'u5',
      title: 'Night watch duty',
      summary: 'Keep lookout for threats during the night shift',
      dueDate: '2026-04-05',
    },
  ];

get selectedUserTasks() {
  return this.tasks.filter((task) => task.userId === this.userId);
}
}
