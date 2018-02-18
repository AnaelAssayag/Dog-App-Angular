import { Injectable } from '@angular/core';
import { Dog } from './dog';
import { Route } from '@angular/compiler/src/core';


const DOGS: Dog[] = [
{id: 1, name: 'Rex', weight: 20, birthDate: new Date(2006, 2, 21)},
{id: 2, name: 'Woof', weight: 8, birthDate: new Date(2011, 8, 12)},
{id: 3, name: 'Chuck', weight: 28, birthDate: new Date(2015, 5, 6)},
{id: 4, name: 'Barkley', weight: 4, birthDate: new Date(2012, 3, 15)},
{id: 5, name: 'Prince', weight: 65, birthDate: new Date(2017, 5, 4)}
];


@Injectable()
export class DogService {
  dogs: Dog[] = DOGS;
  selectedDog: Dog;
  ActivatedRoute: Route

  constructor() { }

  getDogs(){
  return this.dogs
}
  getDog(id: Number):Dog{
  let updateDogIndex = this.dogs.findIndex((dog) => dog.id == id);
     return  this.dogs[updateDogIndex]
  }
  getDogName(name){

  }

  addDog(newDog: Dog){
  	newDog.id = this.generateId();
  	this.dogs.push(newDog);
  }

  generateId (): number {
  	return this.dogs[this.dogs.length - 1].id + 1;
  }

  editDog(id: Number, dog: Dog) {
    let updateDogIndex = this.dogs.findIndex((dog) => dog.id == id);
    this.dogs[updateDogIndex] = dog;
  }



}
