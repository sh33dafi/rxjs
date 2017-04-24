/*
Exercise 5:
In this exercise we are going to use 2 streams to create a sort of autocomplete


*/


const Rx = require('rxjs');

const observable$ = Rx.Observable.interval(500).take(3).map(x => "S1 - " + x);
const observable2$ = Rx.Observable.interval(1000).take(6).map(x => "S2 - " + x);

combined.subscribe(next => console.log(next));

