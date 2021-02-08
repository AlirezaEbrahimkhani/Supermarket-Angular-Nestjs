import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './components/panel/panel.component';
import { AdminRoutesModule } from './admin.routing';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [PanelComponent],
  imports: [CommonModule, AdminRoutesModule, MatCardModule],
})
export class AdminModule {}
