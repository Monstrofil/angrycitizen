import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CreateIssueComponent } from './create-issue/create-issue.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatStepperModule} from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {NgxMapboxGLModule} from "ngx-mapbox-gl";


@NgModule({
  declarations: [
    AppComponent,
    CreateIssueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMapboxGLModule.withConfig({
      accessToken: 'pk.eyJ1IjoibW9uc3Ryb2ZpbCIsImEiOiJjazVjbHc0ZWoxczNpM2xsamlsb2Vla3U3In0.D_AounEf87Va3Zq6Z8tTsg'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
