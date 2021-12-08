import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { StartComponent } from "./components/start/start.component";
import { UserComponent } from "./components/user/user.component";
import { CashierComponent } from "./components/cashier/cashier.component";
import { CommonModule } from "@angular/common";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    UserComponent,
    CashierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
