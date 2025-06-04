import { Component, input, output } from '@angular/core';

@Component({
    selector: 'crm-dummy',
    templateUrl: './dummy.html',
    styleUrl: './dummy.scss'
})
export class Dummy {
  protected readonly label = input<string>('');
  protected readonly clicked = output<string>();

  public onClick(): void {
    this.clicked.emit(this.label());
  }
}
