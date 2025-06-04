import { Directive, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[crmUnsubscribe]',
  standalone: false
})
export class Unsubscribe implements OnDestroy {
  protected subscriptionList: Array<Subscription> = [];

  ngOnDestroy(): void {
    this.subscriptionList.forEach(subscription => subscription.unsubscribe());
  }

}
