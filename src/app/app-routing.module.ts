import { DashboardComponent } from './dashboard/dashboard.component';
import { QuoteDetailComponent } from './quote-detail/quote-detail.component';
import { QuotesComponent } from './quotes/quotes.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [{path: '', redirectTo: '/dashboard', pathMatch: 'full'},
{ path: 'dashboard', component: DashboardComponent },
{ path: 'detail/:id', component: QuoteDetailComponent},
{ path: 'quotes', component: QuotesComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
