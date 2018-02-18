import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { DogService } from '../dog.service';
import { Dog } from '../dog';
import { ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-dog-editor',
  templateUrl: './dog-editor.component.html',
  styleUrls: ['./dog-editor.component.css']
})

export class DogEditorComponent implements OnInit {
  
  name: string;
  weight: number;
  birthDate: Date;
  dog: Dog = new Dog();
  @Output() dogAdded : EventEmitter<Dog> = new EventEmitter();
  @Output() dogUpdated : EventEmitter<Dog> = new EventEmitter();

  constructor(private dogService: DogService, 
              private route: ActivatedRoute) { }



  ngOnInit() {
     this.route.params.subscribe(params => {
           this.dog= this.dogService.getDog(params.id); 
           
    });
  }

  

  addDog() {
    this.dogService.addDog(this.dog);
    this.dogAdded.emit(this.dog);   

    }

  editDog(dog: Dog) {;
    this.dogService.editDog(this.dog.id, this.dog); 
    this.dogUpdated.emit(this.dog);   
 		

  }
  cancel(){
      this.dog = new Dog();
      console.log(this.dog)
  }



}


