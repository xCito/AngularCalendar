import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { NumToMonthPipe } from './pipes/num-to-month.pipe';
import { NumToWeekdayPipe } from './pipes/num-to-weekday.pipe';
import { OrdinalSuffixPipe } from './pipes/ordinal-suffix.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    NumToMonthPipe,
    NumToWeekdayPipe,
    OrdinalSuffixPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
