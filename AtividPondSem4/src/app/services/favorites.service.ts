// src/app/services/favorites.service.ts

import { Injectable } from '@angular/core';

export interface Pokemon {
  id: number;
  name: string;
}

@Injectable({ providedIn: 'root' })
export class FavoritesService {
  private key = 'favorites';
  private favorites: Pokemon[] = JSON.parse(localStorage.getItem(this.key) || '[]');

  addOrRemoveFavorite(pokemon: Pokemon): void {
    const index = this.favorites.findIndex(fav => fav.id === pokemon.id);

    if (index > -1) {
      this.favorites.splice(index, 1);
    } else {
      this.favorites.push(pokemon);
    }

    localStorage.setItem(this.key, JSON.stringify(this.favorites));
  }

  isFavorite(pokemonId: number): boolean {
    return this.favorites.some(pokemon => pokemon.id === pokemonId);
  }
}
