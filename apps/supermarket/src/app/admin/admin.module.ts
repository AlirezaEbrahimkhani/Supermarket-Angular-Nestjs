import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './components/panel/panel.component';
import { AdminRoutesModule } from './admin.routing';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ManageComponent } from './components/manage/manage.component';
import { SharedModule } from '../shared/shared.module';
import { ManageProductsComponent } from './components/manage-products/manage-products.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductModule } from '../product/product.module';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    PanelComponent,
    AddProductComponent,
    ManageComponent,
    ManageProductsComponent,
    CartComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutesModule,
    MatCardModule,
    SharedModule,
    MatProgressBarModule,
    ProductModule,
    MatDialogModule,
  ],
})
export class AdminModule {}
