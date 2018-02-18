import { Component, OnInit } from '@angular/core';
import { DogService } from '../dog.service';
import { Dog } from '../dog';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent implements OnInit {
  dogs: any[];
  title:string;  
  selectedDog: Dog = new Dog();
  lastUpdated : string = '';



  constructor(
    private dogService: DogService,
    private route: ActivatedRoute
  ) { 
    }
//     let updateDogIndex = this.dogs.findIndex((dog) => dog.id == id);
//     return  this.dogs[updateDogIndex]
//  }

    
  ngOnInit() {
    this.dogs = this.dogService.getDogs();
    this.route.queryParams.subscribe(queryParams => {
      if(queryParams.name)  {
      this.dogs = this.dogs.filter((dog) => 
      // let dogName = dog.name.toLowerCase();
      dog.name.toLowerCase().includes(queryParams.name.toLowerCase())
    )
    
      // console.log(query

        // 
      // console.log("name query param is: " + queryParams.name)

      }
  
  });
  }

  editDog(dog: Dog) {
    this.selectedDog = Object.assign({}, dog
    );
    console.log(this.selectedDog)

   }

  addLastUpdated(dog) {
    this.lastUpdated = "Last dog added: " + new Date().toString() + ", name: " + dog.name;
  }

  addJustUpdated(dog) {
    this.lastUpdated = "Last dog edited: " + new Date().toString() + ", name: " + dog.name;
    
  }


}
