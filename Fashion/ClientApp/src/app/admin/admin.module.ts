import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { NavComponent } from './components/nav/nav.component';
import { MaterialModule } from '../material/material.module';
import { LayoutModule } from '@angular/cdk/layout';
import { RegisterProductComponent } from './components/register-product/register-product.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [NavComponent, RegisterProductComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    LayoutModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,

  ]
})
export class AdminModule { }
