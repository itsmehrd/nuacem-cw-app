import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Counter } from './counter.model';

@Injectable({
  providedIn: 'root',
})
export class CounterAppService {
  private _listOfAllCounters: Subject<Counter[]> = new Subject<Counter[]>();
  public get listOfAllCounters(): any {
    return this._listOfAllCounters.asObservable();
  }
  public set listOfAllCounters(value: any) {
    this._listOfAllCounters.next(value);
  }
  constructor() {}
}
