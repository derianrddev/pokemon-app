import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Pokemon } from '../interfaces/pokemon.interface';
import { environments } from '../../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  constructor(private http: HttpClient) { }

  getPokemons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(`${environments.api_base_url}/pokemon`);
  }

  getPokemonByNumber(no: number): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${environments.api_base_url}/pokemon/${no}`);
  }

  getTypeColor(type: string): string {
    const typeColorMap: { [key: string]: string } = {
      fire: 'bg-yellow-500',
      water: 'bg-blue-500',
      grass: 'bg-green-500',
      electric: 'bg-yellow-300',
      ice: 'bg-blue-200',
      fighting: 'bg-red-500',
      poison: 'bg-purple-500',
      ground: 'bg-yellow-700',
      flying: 'bg-indigo-500',
      psychic: 'bg-pink-500',
      bug: 'bg-green-200',
      rock: 'bg-gray-500',
      ghost: 'bg-indigo-900',
      dark: 'bg-gray-900',
      dragon: 'bg-indigo-700',
      steel: 'bg-gray-300',
      fairy: 'bg-pink-300',
      normal: 'bg-gray-300'
    };

    return typeColorMap[type] || 'bg-gray-200';
  }
}
