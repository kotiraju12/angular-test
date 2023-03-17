import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';

import {MatButtonModule} from '@angular/material/button';
import {MatCommonModule} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDividerModule} from '@angular/material/divider';


const matrialComponents = [
  MatButtonModule,
  MatCheckboxModule,
  MatDividerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  FlexLayoutModule,
  MatCommonModule
]

@NgModule({
  declarations: [],
   
  imports: [
    CommonModule,
    matrialComponents
  ],
  exports: [
    matrialComponents
  ]
})
export class UiModule { }
