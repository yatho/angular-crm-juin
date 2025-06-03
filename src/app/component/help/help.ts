import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'crm-help',
  standalone: false,
  templateUrl: './help.html',
  styleUrl: './help.scss'
})
export class Help {
  @Input()
  field?: AbstractControl;

  @Input()
  errorMessages?: { [key: string]: string };

  isError(): boolean {
    return !!this.field && this.field.touched && !this.field.valid;
  }

  get errors(): string[] {
    return Object.keys(this.field?.errors as object).map((key) => {
      return this.errorMessages?.[key]??`Missing message for ${key}`;
    });
  }
}
