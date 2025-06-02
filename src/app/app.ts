import { Component } from '@angular/core';

@Component({
  selector: 'crm-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {
  protected title = 'angularCRM';

  protected product = {
    name: 'Angular course',
    price: 99.99,
    description: 'Learn Angular from scratch with this comprehensive course.',
    image: 'https://angular.io/assets/images/logos/angular/angular.png',
    vendable: false
  }

  displayOk(event: any): void {
    console.log('Event:', event, typeof event);
    console.log('Ok button clicked');
  }

  priceOverFifty(price: number): boolean {
    return price > 50;
  }

  protected tableProducts = [
    this.product,
    {
      ...this.product,
      price: 49.99,
    }
  ]
}
