import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { ReactiveFormsModule } from '@angular/forms';

import { NgxMaskModule } from 'ngx-mask';
import { ShareModule } from '../share/share.module';

// Material modules
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';

// Components
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { AddProductModalComponent } from './components/add-product-modal/add-product-modal.component';
import { GroupComponent } from './components/group/group.component';
import { GroupModalComponent } from './components/group-modal/group-modal.component';

@NgModule({
  declarations: [HomeComponent, AddProductModalComponent, GroupComponent, GroupModalComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    AngularFireDatabaseModule,
    ReactiveFormsModule,
    NgxMaskModule,
    ShareModule,
  ],
})
export class HomeModule {}
