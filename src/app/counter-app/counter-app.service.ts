import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Counter } from './counter.model';

@Injectable({
  providedIn: 'root',
})
export class CounterAppService {
  /* private _listOfAllCounters: Subject<Counter[]> = new Subject<Counter[]>();
  public getListOfAllCounters(): Observable<Counter[]> {
    return this._listOfAllCounters.asObservable();
  }
  public setListOfAllCounters(value: Counter[]) {
    this._listOfAllCounters.next(value);
    
  } */

  private _allCounters: Counter[] = [];
  public get allCounters(): Counter[] {
    return this._allCounters;
  }
  public set allCounters(value: Counter[]) {
    this._allCounters = value;
  }
  constructor() {}
}
