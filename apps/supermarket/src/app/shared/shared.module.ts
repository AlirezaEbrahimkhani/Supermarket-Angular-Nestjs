import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

const MAT_MODULES = [MatButtonModule, MatIconModule, MatInputModule];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...MAT_MODULES,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
  ],
  exports: [
    ...MAT_MODULES,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
  ],
})
export class SharedModule {}
