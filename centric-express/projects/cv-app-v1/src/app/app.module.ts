import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CvBuilderComponent } from './cv-builder/cv-builder.component';
import { CvSectionComponent } from './cv-section/cv-section.component';

@NgModule({
  declarations: [
    AppComponent,
    CvBuilderComponent,
    CvSectionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
