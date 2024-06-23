import { Component, OnInit } from '@angular/core';

import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../interfaces/pokemon.interface';

@Component({
  selector: 'app-pokemons-page',
  templateUrl: './pokemons-page.component.html',
  styleUrl: './pokemons-page.component.css'
})
export class PokemonsPageComponent implements OnInit {
  public pokemons: Pokemon[] = [];

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.getPokemons()
      .subscribe(pokemons => this.pokemons = pokemons);
  }

  getTypeColor(type: string): string {
    return this.pokemonService.getTypeColor(type);
  }
}
