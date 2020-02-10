import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }
  bigChart() {
    return [{
      name: 'Asia',
      data: [502, 635, 809, 947, 1402, 3634, 5268]
  }, {
      name: 'Africa',
      data: [106, 107, 111, 133, 221, 767, 1766]
  }, {
      name: 'Europe',
      data: [163, 203, 276, 408, 547, 729, 628]
  }, {
      name: 'America',
      data: [18, 31, 54, 156, 339, 818, 1201]
  }, {
      name: 'Oceania',
      data: [2, 2, 2, 6, 13, 30, 46]
  }];
  }

  cards() {
    return [71, 78, 39, 66];
  }
  pieChart() {
    return [{
      name: 'Asia',
      y: 61.41,
      sliced: true,
      selected: true
  }, {
      name: 'Africa',
      y: 11.84
  }, {
      name: 'Europe',
      y: 10.85
  }, {
      name: 'America',
      y: 4.67
  }, {
      name: 'Australia',
      y: 4.18
  }, {
      name: 'Canada',
      y: 1.64
  }, {
      name: 'Greenland',
      y: 1.6
  }, {
      name: 'Gulf',
      y: 1.2
  }, {
      name: 'Other',
      y: 2.61
  }];

  }
}
