import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {
  transform(phone: string, countryCode: number = 38): string {
    const match: string[] = phone.match(/(\d{3})(\d{2})(\d{2})(\d{3})/);
    return `+${countryCode}(${match[1]}) ${match[2]}-${match[3]}-${match[4]}`;
  }
}
