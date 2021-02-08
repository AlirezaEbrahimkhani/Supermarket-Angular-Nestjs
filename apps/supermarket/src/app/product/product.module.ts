import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './components/home/home.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductRoutesModule } from './product.routes';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [ProductListComponent, HomeComponent, ProductDetailComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatCardModule,
    ProductRoutesModule,
    MatToolbarModule,
    MatMenuModule,
    MatTooltipModule,
    MatDialogModule,
  ],
  exports: [ProductDetailComponent],
  entryComponents: [ProductDetailComponent],
})
export class ProductModule {}
