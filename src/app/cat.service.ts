import { Injectable } from '@angular/core';
const CATS = [
  {name: 'noisette', weight: 9, birthdate: new Date(2006, 2, 11), formatDisplay: true},
  {name: 'white', weight: 8, birthdate:new Date(2004, 3, 2), formatDisplay: true},
  {name: 'red', weight: 12, birthdate: new Date(2016, 4, 21), formatDisplay: true},
  {name: 'ok', weight: 4, birthdate: new Date(2014, 5, 11), formatDisplay: true},
];

@Injectable()
export class CatService {

  constructor() { }

getCats() {
return CATS
}
}
