/*
Exercise 4:
In this exercise we only want to react to the first 3 events
---0---1---2---3---...

Output: 0 1 2
*/


const Rx = require('rxjs');

const observable$ = Rx.Observable.interval(100);

observable$.subscribe(next => console.log(next));

