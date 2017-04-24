/*
Exercise 3:
In this exercise the output stream should only contain odd numbers
---0---1---2---3---...

---1---3---5---7---...
*/


const Rx = require('rxjs');

const observable$ = Rx.Observable.interval(100);

observable$.subscribe(next => console.log(next));

