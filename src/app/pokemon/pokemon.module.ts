import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonPageComponent } from './pages/pokemon-page/pokemon-page.component';
import { PokemonsPageComponent } from './pages/pokemons-page/pokemons-page.component';
import { PokemonRoutingModule } from './pokemon-routing.module';



@NgModule({
  declarations: [
    PokemonPageComponent,
    PokemonsPageComponent
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule
  ],
})
export class PokemonModule { }
