import { Component, input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
    selector: 'crm-help',
    templateUrl: './help.html',
    styleUrl: './help.scss'
})
export class Help {
  readonly field = input<AbstractControl>();

  readonly errorMessages = input<{
    [key: string]: string;
  }>();

  isError(): boolean {
    const field = this.field();
    return !!field && field.touched && !field.valid;
  }

  get errors(): string[] {
    return Object.keys(this.field()?.errors as object).map((key) => {
      return this.errorMessages()?.[key]??`Missing message for ${key}`;
    });
  }
}
