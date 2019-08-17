import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NormalvalidateComponent } from './normalvalidate/normalvalidate.component';
import{FormsModule,ReactiveFormsModule} from '@angular/forms';
import{MatInputModule,MatButtonModule, MatRadioModule} from '@angular/material';
import { SumOfTwoComponent } from './sum-of-two/sum-of-two.component';
import { MattableComponent } from './mattable/mattable.component';
import{DemoMaterialModule} from 'src/app/material.module';
import{MatTableModule} from '@angular/material';
import { MarkastouchedComponent } from './markastouched/markastouched.component';
import { EmailComponent } from './email/email.component';

@NgModule({
  declarations: [
    AppComponent,
    NormalvalidateComponent,
    SumOfTwoComponent,
    MattableComponent,
    MarkastouchedComponent,
    EmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    MatTableModule,
    DemoMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
