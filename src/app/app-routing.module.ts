import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculatorComponent } from '../app/calculator/calculator.component';
import { CurrencyComponent } from '../app/currency/currency.component';
import { HomeComponent } from '../app/home/home.component';

const routes: Routes = [
  { path: 'calculator', component: CalculatorComponent },
  { path: 'currency', component: CurrencyComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
