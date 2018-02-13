import { Injectable } from '@angular/core';

const DOGS = [
  {name: 'Rex', weight: 20, birthdate: new Date(2006, 2, 11), formatDisplay: true},
  {name: 'Woof', weight: 8, birthdate:new Date(2004, 3, 2), formatDisplay: true},
  {name: 'Chuck', weight: 28, birthdate: new Date(2016, 4, 21), formatDisplay: true},
  {name: 'Barkley', weight: 4, birthdate: new Date(2014, 5, 11), formatDisplay: true},
  {name: 'Prince', weight: 65, birthdate: new Date(2015, 5, 19), formatDisplay: true}
];

@Injectable()
export class DogService {

  constructor() { }

  getDogs(){
  return DOGS
}
}
