import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pokestore';

  valorTotal: number = 12

  pokemonsComprados$ = [
    {nome: 'pikachu', id: 'algum', qtd: 2, val: 10},
    {nome: 'bulbasauro', id: 'bulba', qtd: 1, val: 30}

  ];


}
