import { Component, OnInit } from '@angular/core';

interface Day {
    value: number;
    weekday: number;
    month: number;
    isInFocusMonth: boolean;
    isToday: boolean;
    events: Array<Event>;
}

interface Event {
    date: Date;
    description: string;
    title: string;
    by: string;
}

@Component({
    selector: 'calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
    year: number = -1;
    month: number = -1;
    days: Array<Day> = [];
    events: Array<Event> = [];
    dayInFocus: Day;

    constructor() {
        // Dummy events
        const e1: Event = {
            title: 'The Main Event: on the side',
            description: 'event description notes comments extra words notes comments extra words notes comments extra words',
            by: 'Juan banbanban',
            date: new Date()
        };
        const d = new Date();
        d.setDate(3);
        const e2: Event = {
            title: 'The Main Event; plus one two things',
            description: 'event description notes comments extra words notes event description notes comments extra words notes event description notes comments extra words notes event description notes comments extra words notes comments extra words notes comments extra words',
            by: 'Juan banbanban, Kim bob, oneLongName Personthing',
            date: d
        };
        this.events.push(e1);
        this.events.push(e1);
        this.events.push(e2);


        this.onTodayClick();
        this.dayInFocus = this.days.filter(d => d.isToday)[0];
    }
    
    ngOnInit(): void {
    }
    
    onTodayClick(): void {
        let today: Date = new Date();
        this.year = today.getFullYear();
        this.month = today.getMonth();
        this.calcDaysForCalendar(this.month);
        this.dayInFocus = this.days.filter(d => d.isToday)[0];
    }
    onPrevClick(): void {
        this.month--;
        if (this.month < 0) {
            this.month = 11;
            this.year--;
        }
        this.calcDaysForCalendar(this.month);
    }
    onNextClick(): void {
        this.month++;
        if (this.month > 11) {
            this.month = 0;
            this.year++;
        }
        this.calcDaysForCalendar(this.month);
    }
    
    calcDaysForCalendar(month: number): void {
        const today = new Date();
        let date: Date = new Date();
        date.setMonth(month);
        this.days = [];

        let i = -date.getDay();
        const end = i + 42;
        while (i < end) {
            date = new Date();
            date.setMonth(month);
            date.setDate(i);
            const day: Day = {
                value: date.getDate(),
                isToday: date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear(),
                isInFocusMonth: date.getMonth() === month,
                month: date.getMonth(),
                weekday: date.getDay(),
                events: this.getEventsForThisDate(date)
            };
            this.days.push(day);
            i++;
        }    
        
        console.log(this.days);
    }

    getEventsForThisDate(date: Date): Array<Event> {
        return this.events.filter( e => {
            return e.date.getFullYear() === date.getFullYear() &&
                e.date.getMonth() === date.getMonth() &&
                e.date.getDate() === date.getDate();
        })
    }

    onDayClick(day: Day): void {
        console.log(day);
        this.dayInFocus = day;
    }


}
