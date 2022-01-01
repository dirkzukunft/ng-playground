import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataServiceService {
  constructor() {}

  sampleData() {
    return { key1: 'value1', key2: 'value2' };
  }
}
