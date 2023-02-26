import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from './products';

@Injectable({
  providedIn: 'root',
})
export class AuctionService {
  private auctionList: Product[] = [
    {
      id: 1,
      name: 'Phone XL 2nd Hand',
      price: 799,
      description: 'A large phone with one of the best screens',
    },
  ];

  private listSubject = new Subject<any[]>();

  constructor() {}
}

// Subject's example

// import { Subject } from 'rxjs';

// // Create a new Subject
// const subject = new Subject();

// // Subscribe to the Subject
// subject.subscribe(value => console.log(`Subscriber A: ${value}`));

// // Emit a value to the Subject
// subject.next('hello');

// // Subscribe to the Subject again
// subject.subscribe(value => console.log(`Subscriber B: ${value}`));

// // Emit another value to the Subject
// subject.next('world');

// BehaviorSubject's example

// import { BehaviorSubject } from 'rxjs';

// const behaviorSubject = new BehaviorSubject('initial value');

// // Subscribe to the BehaviorSubject
// behaviorSubject.subscribe(value => console.log(value)); // Output: 'initial value'

// // Emit a new value
// behaviorSubject.next('new value'); // Output: 'new value'

// replay's example

// import { ReplaySubject } from 'rxjs';

// const replaySubject = new ReplaySubject(2); // Replay last two emitted values

// // Emit some values
// replaySubject.next('value 1');
// replaySubject.next('value 2');
// replaySubject.next('value 3');

// // Subscribe to the ReplaySubject
// replaySubject.subscribe(value => console.log(value)); // Output: 'value 2', 'value 3'

// // Emit another value
// replaySubject.next('value 4'); // Output: 'value 3', 'value 4'

// async's example

// import { AsyncSubject } from 'rxjs';

// const asyncSubject = new AsyncSubject();

// // Subscribe to the AsyncSubject
// asyncSubject.subscribe(value => console.log(value)); // Output: nothing

// // Emit some values
// asyncSubject.next('value 1');
// asyncSubject.next('value 2');

// // Complete the AsyncSubject
// asyncSubject.complete();

// // Subscribe again
// asyncSubject.subscribe(value => console.log(value)); // Output: 'value 2'
