import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PainelPortalAcessoComponent } from './painel-portal-acesso/painel-portal-acesso.component';
import { PainelLoginComponent } from './painel-login/painel-login.component';

const routes: Routes = [
  { path: '', component: PainelPortalAcessoComponent },
  { path: 'login', component: PainelLoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
