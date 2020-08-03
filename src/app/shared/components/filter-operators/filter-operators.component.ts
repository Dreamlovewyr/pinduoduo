import { Component, OnInit, OnDestroy } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject, Observable, interval, fromEvent } from 'rxjs';

@Component({
  selector: 'app-filter-operators',
  templateUrl: './filter-operators.component.html',
  styleUrls: ['./filter-operators.component.less']
})
export class FilterOperatorsComponent implements OnInit, OnDestroy {
  interval$: Observable<any>;
  clickEvent$: Subject<boolean> = new Subject();
  constructor() { }

  ngOnInit(): void {
    this.interval$ = interval(1000);
    this.interval$.pipe(
      takeUntil(this.clickEvent$)
    ).subscribe(val => { console.log('val', val); });
  }

  nextValue(): void {
    this.clickEvent$.next(true);
  }

  ngOnDestroy(): void {
    this.clickEvent$.next(false);
    this.clickEvent$.complete();
  }

}
