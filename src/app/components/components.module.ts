import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { UiModule } from '../ui/ui.module';



@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    UiModule
  ], 
  exports: [
    SigninComponent,
    SignupComponent
  ]
})
export class ComponentsModule { }
