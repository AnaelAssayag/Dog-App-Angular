import { Component, OnInit, OnDestroy, OnChanges, Input, SimpleChanges  } from '@angular/core';
import { DogService } from './dog.service';
import { CatService } from './cat.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy, OnChanges {
  constructor(
    private dogService: DogService,
    private catService: CatService ) {}
  sayHello: any;
  ngOnInit() { 
      this.dogs = this.dogService.getDogs();
      this.sayHello = window.setInterval(() => console.log('Hello!'),  10000)	
    }
  ngOnDestroy() {
    window.clearInterval(this.sayHello);	
    }
  @Input() dogName: string
  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      let chng = changes[propName];
      let cur  = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
      // this.changeLog.push(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    }
  }
   
  dogs: any[];
  title = 'my first angular 2.0 adventure!';
  // dogName:string = 'Rex';
  dogWeight: number;
  dogBirthdate: Date;

  addDog(){
    this.dogs.push({
      name:this.dogName,
      weight: this.dogWeight,
      birthdate: this.dogBirthdate,
      formatDisplay: true 
    });
  };
  format(dog) { return dog.formatDisplay ? 'MM/dd/yy' : 'shortDate';}
  toggleFormat(dog){
    dog.formatDisplay = !dog.formatDisplay
  };
  deleteDog(dog) {
    this.dogs.splice(dog,1)
  }
  cats = this.catService.getCats();
}

