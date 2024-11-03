import { AsyncPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from '../../counter/counter.actions';
import { counterSelector } from '../../counter/counter.selectors';
import { IAppState } from '../../inteface/iapp-state';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [AsyncPipe],
  template: `
    <div>Current Count: {{ counter$ | async }}</div>

    <button (click)="increment()">Increment</button>
    <button (click)="decrement()">Decrement</button>
    <button (click)="reset()">Reset</button>
  `,
})
export class CounterComponent implements OnInit {
  private store = inject(Store<IAppState>);
  counter$?: Observable<number>;
  counter?: number;

  ngOnInit(): void {
    this.counter$ = this.store.select(counterSelector);
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
