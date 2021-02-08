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

@NgModule({
  declarations: [
    PanelComponent,
    AddProductComponent,
    ManageComponent,
    ManageProductsComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutesModule,
    MatCardModule,
    SharedModule,
    MatProgressBarModule,
  ],
})
export class AdminModule {}
