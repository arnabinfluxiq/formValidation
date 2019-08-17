import { Component, OnInit } from '@angular/core';
import{FormControl,FormGroup,FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-sum-of-two',
  templateUrl: './sum-of-two.component.html',
  styleUrls: ['./sum-of-two.component.css']
})
export class SumOfTwoComponent implements OnInit {
form:FormGroup;
  constructor(public build:FormBuilder) {
    this.form = this.build.group({
      fno:[],
      sno:[],
      action:[],
      res:[]
    });
   }
ans:number;
   result(){
     if(this.form.value.fno !=null && this.form.value.sno != null && this.form.value.action !=null){
     switch(this.form.value.action){
     case"add":
this.ans = parseInt(this.form.value.fno)+ parseInt(this.form.value.sno);
      break;
      case"sub":
  this.ans = parseInt(this.form.value.fno)- parseInt(this.form.value.sno);
      break;
      case"mul":
this.ans = parseInt(this.form.value.fno) * parseInt(this.form.value.sno);
      break;
      case"div":
this.ans = parseInt(this.form.value.fno)/ parseInt(this.form.value.sno);
      break;
     }
     console.log(this.ans);
     this.form.patchValue({
      res:this.ans
     }); 
   }
  }
  ngOnInit() {
  }

}
