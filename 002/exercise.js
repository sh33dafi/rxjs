/*
Exercise 2:
transform the input stream to match the following output stream
---0---1---2---3---...

---0---2---4---5---...
*/


const Rx = require('rxjs');

const observable$ = Rx.Observable.interval(100);

observable$.subscribe(next => console.log(next));
