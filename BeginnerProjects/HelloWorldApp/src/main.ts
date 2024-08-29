import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'root-app',
  standalone: true,
  template: `<h1>Hello World!</h1>`,
})
export class HelloWorldComponent {
}

bootstrapApplication(HelloWorldComponent);
