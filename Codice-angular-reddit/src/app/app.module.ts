import { BrowserModule }    from '@angular/platform-browser';
import { NgModule }         from '@angular/core';
import { NgbModule}         from '@ng-bootstrap/ng-bootstrap'; //Aggiungiamo qui
import { ArticleComponent } from './article/article.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule, NgbModule //Aggiungiamolo qui

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
