import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoActionAddComponent } from './to-do-action-add/to-do-action-add.component';
import { ToDoActionListComponent } from './to-do-action-list/to-do-action-list.component';
import {FormsModule} from "@angular/forms";
import {ToDoService} from "./to-do.service";

@NgModule({
  declarations: [
    AppComponent,
    ToDoActionAddComponent,
    ToDoActionListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ToDoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
