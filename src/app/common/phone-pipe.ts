import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone',
  standalone: false
})
export class PhonePipe implements PipeTransform {
  transform(phone: string): string {
    return phone.replace(/(.{2})/g, "$1 ").trim();
  }
}
