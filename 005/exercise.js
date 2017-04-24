/*
Exercise 5:
In this exercise we are going to use 2 streams to create a sort of autocomplete

 S1 - 0 = S2 - 0
 S1 - 1 = S2 - 0
 S1 - 2 = S2 - 0
 S1 - 2 = S2 - 1
 S1 - 2 = S2 - 2
 S1 - 2 = S2 - 3

*/


const Rx = require('rxjs');

const observable$ = Rx.Observable.interval(500).take(3).map(x => "S1 - " + x);
const observable2$ = Rx.Observable.interval(1000).take(6).map(x => "S2 - " + x);



// Only react to the five first event

combined.subscribe(next => console.log(next));
