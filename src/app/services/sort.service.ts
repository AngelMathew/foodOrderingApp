import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SortService {
  // constructor() {}
  sortString = new EventEmitter<string>();
}
