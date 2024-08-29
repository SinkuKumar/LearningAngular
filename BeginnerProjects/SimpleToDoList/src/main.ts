import { Component, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  // Import CommonModule

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule],  // Make sure CommonModule is here
  template: `
    <div>
      <h1>Simple To-Do List</h1>
      <input [(ngModel)]="newTask" placeholder="Add a new task" />
      <button (click)="addTask()">Add Task</button>
      <ul>
        <li *ngFor="let task of tasks">
          {{ task }}
          <button (click)="removeTask(task)">Remove</button>
        </li>
      </ul>
    </div>
  `,
})
export class SimpleToDoComponent {
  newTask: string = '';  // Variable to hold new task input
  tasks: string[] = [];  // Array to store tasks

  // Method to add a new task to the list
  addTask() {
    if (this.newTask.trim()) {
      this.tasks.push(this.newTask.trim());
      this.newTask = '';  // Clear the input after adding
    }
  }

  // Method to remove a task from the list
  removeTask(task: string) {
    this.tasks = this.tasks.filter(t => t !== task);
  }
}

// Bootstrap the application with the SimpleToDoComponent
bootstrapApplication(SimpleToDoComponent, {
  providers: [importProvidersFrom(FormsModule)]
});
