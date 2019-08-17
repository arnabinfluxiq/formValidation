import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl,Validators, FormBuilder} from '@angular/forms';
import { CATCH_STACK_VAR } from '@angular/compiler/src/output/output_ast';
import { analyzeAndValidateNgModules } from '@angular/compiler';


@Component({
  selector: 'app-markastouched',
  templateUrl: './markastouched.component.html',
  styleUrls: ['./markastouched.component.css']
})
export class MarkastouchedComponent implements OnInit {

  validation_message ={
    'email':[
      {type:'required', message:'Email Can Not Be Blank'},
      {type:'pattern', message:'Invalid Email Format'}
    ]
  };

  validation_name ={
    'name':[
      {type:'required', message:'Name Can Not Be Null'},
      {type:'pattern', message:'Name Can Not Be Number Or Special Characters'},
      {type:'minlength',message:'Name Can Not Be Less Than Six Digits Value'},
      {type:'maxlength',message:'Name Can Not Be Grater Than Ten Digits Value'}
    ]
  };

ff:FormGroup;
  constructor(private build:FormBuilder) {
    this.ff = this.build.group({
      name:[null,Validators.compose([Validators.required,Validators.pattern(/^[a-zA-Z]/),Validators.minLength(6),Validators.maxLength(10)])],
      email:[null,Validators.compose([Validators.required, Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)])],
      t1:[],
      gender:[]
    });
   }

  ngOnInit() {
  }


    check : any ={val:true}; 
  SubmitData(){
    if(this.ff.value.t1 == null){
    this.check.val = false;
      // return this.ff.controls.t1;
    }
    let x:any;
    for(let x in this.ff.controls){
      this.ff.controls[x].markAsTouched();
    }
    console.log(this.ff.value);

  }

  inputblur(val:any){
    this.ff.controls[val].markAsUntouched();
  }

  get validate(){
    return this.ff.controls;
  }

}
