const Rx = require('rxjs');

const observable$ = Rx.Observable.interval(100);
observable$.subscribe(next => console.log(next));

