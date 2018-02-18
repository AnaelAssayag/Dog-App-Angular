import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DogService } from './dog.service';
import { CatService } from './cat.service';





import { AppComponent } from './app.component';
import { DogsComponent } from './dogs/dogs.component';
import { DogEditorComponent } from './dog-editor/dog-editor.component';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    DogsComponent,
    DogEditorComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule

  ],
  providers: [DogService,
  CatService],

  bootstrap: [AppComponent]
})
export class AppModule { }