import { Component } from '@angular/core';

@Component({
  selector: 'crm-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {
  public phone = '0601020304';
}