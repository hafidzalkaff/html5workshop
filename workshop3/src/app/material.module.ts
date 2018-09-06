import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

const MODULES = [
  FlexLayoutModule, 
  MatToolbarModule, 
  MatFormFieldModule, 
  MatInputModule, 
  MatButtonModule, 
  MatIconModule,
  MatSnackBarModule,
  MatTabsModule,
  MatListModule,
  MatCardModule
];

@NgModule({
  imports: MODULES,
  exports: MODULES,
  
  //imports: [
  //  CommonModule
  //],
  declarations: []
})
export class MaterialModule { }
