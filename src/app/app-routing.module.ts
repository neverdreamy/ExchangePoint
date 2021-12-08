import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from "./components/user/user.component";
import { CashierComponent } from "./components/cashier/cashier.component";
import { StartComponent } from "./components/start/start.component";

const routes: Routes = [
  { path: '', component: StartComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'user', component: UserComponent },
  { path: 'cashier', component: CashierComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
