import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './components/home/home.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductRoutesModule } from './product.routes';

@NgModule({
  declarations: [ProductListComponent, HomeComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatCardModule,
    ProductRoutesModule,
    MatToolbarModule,
    MatMenuModule,
    MatTooltipModule,
  ],
  exports: [],
})
export class ProductModule {}
