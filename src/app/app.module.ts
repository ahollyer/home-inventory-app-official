import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { RouterModule} from '@angular/router';
import { routerConfig } from './router.config';

import { ItemsService } from './items/items.service';


import {
    MdButtonModule,
    MdCheckboxModule,
    MdAutocompleteModule,
    MdInputModule,
    MdRadioModule,
    MdSelectModule,
    MdSliderModule,
    MdSlideToggleModule,
    MdMenuModule,
    MdSidenavModule,
    MdCardModule,
    MdTabsModule,
    MdExpansionModule,
    MdChipsModule,
    MdProgressBarModule,
    MdDialogModule,
    MdSnackBarModule,
    MdTableModule,
    MdListModule,
    MdPaginatorModule
  } from '@angular/material';





import { AppComponent } from './app.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemsComponent } from './items/items.component';
import { NewItemFormComponent } from './new-item-form/new-item-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    ItemsComponent,
    NewItemFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase, 'my-app-name'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot(routerConfig),
    MdButtonModule,
    MdAutocompleteModule,
    MdInputModule,
    MdRadioModule,
    MdSelectModule,
    MdSliderModule,
    MdSlideToggleModule,
    MdMenuModule,
    MdSidenavModule,
    MdCardModule,
    MdTabsModule,
    MdExpansionModule,
    MdChipsModule,
    MdProgressBarModule,
    MdDialogModule,
    MdSnackBarModule,
    MdTableModule,
    MdPaginatorModule,
    MdListModule,
    MdPaginatorModule
  ],
  providers: [
    ItemsService,
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
