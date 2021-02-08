import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRegisterComponent } from './components/login-register/login-register.component';
import { AuthRoutingModule } from './auth.routing';
import { MatCardModule } from '@angular/material/card';
import { SharedModule } from './../shared/shared.module';
import { MatStepperModule } from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs'

@NgModule({
  declarations: [LoginRegisterComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule
  ],
})
export class AuthModule {}
