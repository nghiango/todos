import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ItemService } from '../app/todo/components/item/service/item.service'
import { AppComponent } from './app.component';
import { ListComponent } from './todo/components/list/list.component';
import { ItemComponent } from './todo/components/item/component/item.component';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MatInputModule, MatFormFieldModule, MatButtonModule, MatIconModule, MatListModule, MatCheckboxModule, MatToolbarModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    NgbModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatCheckboxModule,
    MatToolbarModule
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
