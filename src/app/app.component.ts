import { Component, OnInit } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemon-list';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',

})
export class AppComponent implements OnInit {
  pokemons_list: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon|undefined;

  ngOnInit()  {
      console.table(this.pokemons_list);

  }
  // title = 'ng pokemon-app';

  selectPokemon(pokemonId: string) {
    const pokemon: Pokemon|undefined = this.pokemons_list.find(pokemon => pokemon.id == +pokemonId);
    
    if(pokemon) 
    {
      console.log(`Vous avez demandé le pokemon ${pokemon.name}`);
      this.pokemonSelected = pokemon;
    } 
    else 
    {
      console.log(`Vous avez demandé un pokemon qui n'existe pas`);

      this.pokemonSelected = pokemon;
    }
  }
}
