import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PokemonsPageComponent } from './pages/pokemons-page/pokemons-page.component';
import { PokemonPageComponent } from './pages/pokemon-page/pokemon-page.component';

const routes: Routes = [
  {
    path: "",
    component: PokemonsPageComponent
  },
  {
    path: "pokemon/:number",
    component: PokemonPageComponent
  },
  {
    path: '**',
    redirectTo: ''
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokemonRoutingModule { }
