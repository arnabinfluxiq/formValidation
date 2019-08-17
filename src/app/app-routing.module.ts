import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NormalvalidateComponent } from './normalvalidate/normalvalidate.component';
import { SumOfTwoComponent } from './sum-of-two/sum-of-two.component';
import { MattableComponent } from './mattable/mattable.component';
import { MarkastouchedComponent } from './markastouched/markastouched.component';
import { EmailComponent } from './email/email.component';


const routes: Routes = [
  {path: '',component:NormalvalidateComponent},
  {path:'sumoftwo',component:SumOfTwoComponent},
  {path:'mattable',component:MattableComponent},
  {path :'markastouched', component:MarkastouchedComponent},
  {path:'email', component:EmailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
