import { Component, OnInit } from '@angular/core';
import{FormBuilder,FormGroup,FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  validation_message ={
    'email':[
      {type:'required', message:'Email Can Not Be Blank'},
      {type:'pattern', message:' Is Invalid Email Format'}
    ]
  };
f:FormGroup;
  constructor(private build:FormBuilder) {
    this.f = this.build.group({
      email:[null,Validators.compose([Validators.required, Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)])],
    });
   }

  ngOnInit() {
  }

  get validate(){
    return this.f.controls;
  }

}
