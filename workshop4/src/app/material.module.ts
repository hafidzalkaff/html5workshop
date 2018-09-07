import { NgModule } from "@angular/core";

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from "@angular/common";

const MODULES = [
    FlexLayoutModule, 
    MatToolbarModule, 
    MatInputModule,
    MatFormFieldModule,  
    MatButtonModule, 
    MatIconModule,
    MatCardModule,
    MatSnackBarModule,
    MatTabsModule,
    MatListModule
];

@NgModule({ 
    imports: [CommonModule,...MODULES],
    //imports: MODULES,
    exports: MODULES

})

export class MaterialModule {}