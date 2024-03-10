import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'concreplus';

  isTemaEscuro: boolean = false;

  itensSidenav: {nomeIcone: string, nomeLink: string}[] = [
    {nomeIcone: 'home', nomeLink: 'Portal'},
    {nomeIcone: 'note_alt', nomeLink: 'Registros de concreto'},
    {nomeIcone: 'analytics', nomeLink: 'Resultados de ensaios'},
    {nomeIcone: 'analytics', nomeLink: 'Pessoas e empresas'},
    {nomeIcone: 'analytics', nomeLink: 'Finanças'}
  ];

  alternarTema() {
    if (this.isTemaEscuro) {
      this.isTemaEscuro = false;
    } else {
      this.isTemaEscuro = true;
    }
  }
}
