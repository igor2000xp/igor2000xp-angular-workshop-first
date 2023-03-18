import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeGreeting'
})
export class TimeGreetingPipe implements PipeTransform {

  transform(date: Date): string {
    const hour = date.getHours();

    if (hour < 12) {
      return 'Good Morning';
    } else if (hour > 12 && hour < 17) {
      return 'Good afternoon';
    } else {
      return 'Good evening';
    }
  }

}
