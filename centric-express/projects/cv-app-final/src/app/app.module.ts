import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CvBuilderComponent } from './cv-builder/cv-builder.component';
import { CvSectionComponent } from './cv-section/cv-section.component';
import { CvPreviewComponent } from './cv-preview/cv-preview.component';
const appRoutes: Routes = [
  { path: '', component: CvBuilderComponent },
  { path: 'preview', component: CvPreviewComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    CvBuilderComponent,
    CvSectionComponent,
    CvPreviewComponent
  ],
  imports: [
    BrowserModule, FormsModule,   RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
