import { Injectable } from '@angular/core';
import { Counter } from './counter.model';

@Injectable({
  providedIn: 'root',
})
export class CounterAppService {
  private _allCounters: Counter[] = [];
  public get allCounters(): Counter[] {
    return this._allCounters;
  }
  public set allCounters(value: Counter[]) {
    this._allCounters = value;
  }
  constructor() {}
}
