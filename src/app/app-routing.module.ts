import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CareertipsComponent } from './careertips/careertips.component';
import { CompaniesComponent } from './companies/companies.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'careertips', component: CareertipsComponent},
  {path: 'companies', component: CompaniesComponent},
  {path: '', redirectTo: '/home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
