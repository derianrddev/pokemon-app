import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../interfaces/pokemon.interface';

@Component({
  selector: 'app-pokemon-page',
  templateUrl: './pokemon-page.component.html',
  styleUrl: './pokemon-page.component.css'
})
export class PokemonPageComponent implements OnInit {
  public pokemon?: Pokemon;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private pokemonService: PokemonService,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap( ({ number }) => this.pokemonService.getPokemonByNumber( number )),
      )
      .subscribe( pokemon => {
        if ( !pokemon ) return this.router.navigateByUrl('');
        return this.pokemon = pokemon;
      });
  }

  getTypeColor(type: string): string {
    return this.pokemonService.getTypeColor(type);
  }

  joinAbilities(abilities: string[]): string {
    return abilities.join(', ');
  }
}
