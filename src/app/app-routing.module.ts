import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PainelPortalAcessoComponent } from './painel-portal-acesso/painel-portal-acesso.component';

const routes: Routes = [
  { path: '', component: PainelPortalAcessoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
