import { Component } from '@angular/core';

export type AlternadorTema = () => void;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isTemaEscuro: boolean;

  itensSidenav: {nomeIcone: string, nomeLink: string}[] = [
    {nomeIcone: 'home', nomeLink: 'Portal'},
    {nomeIcone: 'note_alt', nomeLink: 'Registros de concreto'},
    {nomeIcone: 'analytics', nomeLink: 'Resultados de ensaios'},
    {nomeIcone: 'analytics', nomeLink: 'Pessoas e empresas'},
    {nomeIcone: 'analytics', nomeLink: 'Finanças'}
  ];

  constructor() {
    this.isTemaEscuro = false;
  }

  alternarTema: AlternadorTema = () => {
    if (this.isTemaEscuro) {
      this.isTemaEscuro = false;
    } else {
      this.isTemaEscuro = true;
    }
  }

}
