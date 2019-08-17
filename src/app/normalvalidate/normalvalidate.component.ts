import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-normalvalidate',
  templateUrl: './normalvalidate.component.html',
  styleUrls: ['./normalvalidate.component.css']
})
export class NormalvalidateComponent implements OnInit {
form:FormGroup;
  constructor(private build:FormBuilder) {
    this.form = this.build.group({
      name:[null,Validators.required],
      email:[null,[Validators.required,Validators.email]],
      password:[null,[Validators.required,Validators.minLength(4),Validators.maxLength(8)]]
    })
   }

   get validate(){
     return this.form.controls;
   }
  ngOnInit() {
  }


  array:Array<any>[];

  submit(){
    if(this.form.valid){
      console.log(this.form.value);
      // console.log(this.array);
    }else{
      console.log('Error');
    }
  }

}
