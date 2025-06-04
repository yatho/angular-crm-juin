import { Component, inject, OnInit, signal } from '@angular/core';
import { ConsumerData } from '../model/consumer';
import { Consumer } from '../consumer';
import { Router, RouterLink } from '@angular/router';
import { Unsubscribe } from '../../common/unsubscribe';
import { MatFormField, MatLabel, MatInput } from '@angular/material/input';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatTable, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow } from '@angular/material/table';
import { PhonePipe } from '../../common/phone-pipe';

@Component({
    selector: 'crm-list',
    templateUrl: './list.html',
    styleUrl: './list.scss',
    imports: [MatFormField, MatLabel, MatInput, ReactiveFormsModule, FormsModule, MatIconButton, RouterLink, MatIcon, MatTable, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow, PhonePipe]
})
export class List extends Unsubscribe implements OnInit {
  private readonly consumerService = inject(Consumer);
  private readonly router = inject(Router);

  consumers = signal<ConsumerData[]>([]);
  search = '';
  displayedColumns: string[] = ['civility', 'firstname', 'lastname', 'email', 'phone', 'actions'];

  ngOnInit() {
    this.find();
  }

  find(search?: string): void {
    if (search !== undefined) {
      this.search = search;
    }
    this.subscriptionList.push(this.consumerService.find(this.search).subscribe(
      (consumers) => {
        this.consumers.set(consumers);
      }
    ));
  }

  edit(consumer: ConsumerData): void {
    this.router.navigateByUrl(`/consumer-fiche/${consumer.id}`);
  }

  delete(consumer: ConsumerData): void {
    if (confirm(`Are you sure you want to delete ${consumer.firstname} ${consumer.lastname}?`)) {
      this.subscriptionList.push(this.consumerService.remove(consumer.id!).subscribe(
        () => this.find()));
    }
  }
}
