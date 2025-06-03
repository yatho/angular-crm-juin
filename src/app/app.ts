import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'crm-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {
  label: string = 'Angular CRM';

  consol(valueFromChild: string): void {
    console.log('Hello from dummy', valueFromChild);
  }
}
