import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { Title } from '@angular/platform-browser';
import { NewTaskComponent } from './new-task/new-task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  isAddingTask = false;

  tasks = [
    {
      id: 't1',
      userId: 'u9',
      title: 'Manage the ropes',
      summary: 'Gotta enroll all that rope - again',
      dueDate: '2026-04-04',
    },
    {
      id: 't2',
      userId: 'u10',
      title: 'Inspect the hull',
      summary: 'Check for cracks, leaks, or damage below deck',
      dueDate: '2026-04-02',
    },
    {
      id: 't3',
      userId: 'u7',
      title: 'Prepare the cannons',
      summary: 'Clean, load, and ready all cannons for potential combat',
      dueDate: '2026-04-03',
    },
    {
      id: 't4',
      userId: 'u5',
      title: 'Chart the course',
      summary: 'Update maps and define the next navigation route',
      dueDate: '2026-04-01',
    },
    {
      id: 't5',
      userId: 'u2',
      title: 'Cook for the crew',
      summary: 'Prepare meals and ration supplies for the journey',
      dueDate: '2026-04-02',
    },
    {
      id: 't6',
      userId: 'u4',
      title: 'Night watch duty',
      summary: 'Keep lookout for threats during the night shift',
      dueDate: '2026-04-05',
    },
    {
      id: 't7',
      userId: 'u3',
      title: 'Review the navigation charts',
      summary: 'Cross-check old Impilturian routes with current sea conditions',
      dueDate: '2026-04-01',
    },
    {
      id: 't8',
      userId: 'u10',
      title: 'Watch the horizon',
      summary: 'Spend hours observing the sea, lost in thought and memory',
      dueDate: '2026-04-02',
    },
    {
      id: 't9',
      userId: 'u3',
      title: 'Reassess command decisions',
      summary:
        'Privately review past choices and adjust the ship’s long-term course',
      dueDate: '2026-04-03',
    },
    {
      id: 't10',
      userId: 'u7',
      title: 'Resolve crew disputes',
      summary:
        'Handle conflicts among crew members before they reach the captain',
      dueDate: '2026-04-01',
    },
    {
      id: 't11',
      userId: 'u7',
      title: 'Enforce discipline',
      summary: 'Make an example out of troublemakers to maintain order onboard',
      dueDate: '2026-04-02',
    },
    {
      id: 't12',
      userId: 'u7',
      title: 'Inspect crew readiness',
      summary:
        'Ensure every crew member is fit, armed, and ready for sudden action',
      dueDate: '2026-04-03',
    },
    {
      id: 't13',
      userId: 'u2',
      title: 'Prepare the daily soup',
      summary: 'Cook the crew’s usual watery soup, twice a day without fail',
      dueDate: '2026-04-01',
    },
    {
      id: 't14',
      userId: 'u2',
      title: 'Stretch the ingredients',
      summary:
        'Make limited supplies last longer, no matter how thin the soup gets',
      dueDate: '2026-04-02',
    },
    {
      id: 't15',
      userId: 'u2',
      title: 'Experiment with flavor',
      summary: 'Attempt to improve the soup… with questionable results',
      dueDate: '2026-04-03',
    },
    {
      id: 't16',
      userId: 'u5',
      title: 'Document the journey',
      summary:
        'Write exaggerated and likely inaccurate accounts of life aboard the ship',
      dueDate: '2026-04-02',
    },
    {
      id: 't17',
      userId: 'u5',
      title: 'Test new jokes on the crew',
      summary: 'Try out freshly written jokes, regardless of how bad they are',
      dueDate: '2026-04-01',
    },
    {
      id: 't18',
      userId: 'u9',
      title: 'Stay unpredictable',
      summary:
        'Avoid routines and attention, ensuring no one tracks her movements',
      dueDate: '2026-04-03',
    },
    {
      id: 't19',
      userId: 'u8',
      title: 'Study arcane notes',
      summary:
        'Review cryptic writings about a hidden portal beneath an ancient lighthouse',
      dueDate: '2026-04-02',
    },
    {
      id: 't20',
      userId: 'u6',
      title: 'Interrogate a crew member',
      summary: 'Hear both sides of a story before forming an opinion',
      dueDate: '2026-04-01',
    },
    {
      id: 't21',
      userId: 'u6',
      title: 'Stock personal drinks',
      summary: 'Secure and hide alcohol supplies for the next few days',
      dueDate: '2026-04-02',
    },
    {
      id: 't22',
      userId: 'u4',
      title: 'Assist without magic',
      summary:
        'Help the crew with simple tasks, refusing to rely on divine powers',
      dueDate: '2026-04-01',
    },
    {
      id: 't23',
      userId: 'u1',
      title: 'Endure captivity',
      summary: 'Remain restrained and under watch, awaiting judgment',
      dueDate: '2026-04-10',
    },
  ];

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }
}
