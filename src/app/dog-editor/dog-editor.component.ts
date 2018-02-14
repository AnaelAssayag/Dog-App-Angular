import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { DogService } from '../dog.service';
import { Dog } from '../dog';




@Component({
  selector: 'app-dog-editor',
  templateUrl: './dog-editor.component.html',
  styleUrls: ['./dog-editor.component.css']
})

export class DogEditorComponent implements OnInit {
  name: string;
  weight: number;
  birthDate: Date;
  constructor(private dogService: DogService) { }
  @Input() dog: Dog = new Dog();
  @Output() dogAdded : EventEmitter<Dog> = new EventEmitter();


  ngOnInit() {

  }

  addDog() {
    let newDog = new Dog();
    newDog.name = this.name;
    newDog.weight = this.weight;
    newDog.birthDate = this.birthDate;
    this.dogService.addDog(newDog);
    }

  editDog(dog: Dog) {
    this.dogService.editDog(this.dog.id, this.dog);  		

  }
  cancel(){
      this.dog = new Dog();
  }



}


