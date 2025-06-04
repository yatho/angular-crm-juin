import { Component, inject } from '@angular/core';
import { ConsumerData } from '../model/consumer';
import { Consumer } from '../consumer';
import { Router } from '@angular/router';
import { Unsubscribe } from '../../common/unsubscribe';

@Component({
  selector: 'crm-list',
  standalone: false,
  templateUrl: './list.html',
  styleUrl: './list.scss'
})
export class List extends Unsubscribe {
  private readonly consumerService = inject(Consumer);
  private readonly router = inject(Router);

  consumers: ConsumerData[] = [];
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
        this.consumers = consumers;
      }
    ));
  }

  edit(consumer: ConsumerData): void {
    this.router.navigateByUrl(`/consumer-fiche/${consumer.id}`);
  }

  delete(consumer: ConsumerData): void {
    this.subscriptionList.push(this.consumerService.remove(consumer.id!).subscribe(
      () => this.find()));
  }
}
