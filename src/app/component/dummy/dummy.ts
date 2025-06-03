import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'crm-dummy',
  standalone: false,
  templateUrl: './dummy.html',
  styleUrl: './dummy.scss'
})
export class Dummy {

  @Input()
  protected label: string = '';

  @Output()
  protected clicked = new EventEmitter<string>();

  public onClick(): void {
    this.clicked.emit(this.label);
  }
}
