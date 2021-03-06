import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numToWeekday'
})
export class NumToWeekdayPipe implements PipeTransform {

    transform(value: number, arg: string): string {
        if (arg === 'short') {
            return this.numToShortWeekday(value);
        }
        return this.numToWeekday(value);
    }

    numToWeekday(i: number): string {
        switch (i) {
            case 0: return "Sunday";
            case 1: return "Monday";
            case 2: return "Tuesday";
            case 3: return "Wednesday";
            case 4: return "Thursday";
            case 5: return "Friday";
            case 6: return "Saturday";
            default: return "--";
        }
    }

    numToShortWeekday(i: number): string {
        switch (i) {
            case 0: return "Sun";
            case 1: return "Mon";
            case 2: return "Tue";
            case 3: return "Wed";
            case 4: return "Thu";
            case 5: return "Fri";
            case 6: return "Sat";
            default: return "--";
        }
    }

}
