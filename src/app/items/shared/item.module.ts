import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { SharedModule } from '../../shared/shared.module';

import { ItemService } from './item.service';
import { ItemsListComponent } from '../items-list/items-list.component';
import { ItemFormComponent } from '../item-form/item-form.component';
import { ItemDetailComponent } from '../item-detail/item-detail.component';

// Material Angular Components & Modules
import { MdFormFieldModule } from '@angular/material';
import {MdInputModule} from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireDatabaseModule,
    MdFormFieldModule,
    MdInputModule
  ],
  declarations: [
    ItemsListComponent,
    ItemFormComponent,
    ItemDetailComponent,
  ],
  providers: [
    ItemService
  ]
})
export class ItemModule { }
