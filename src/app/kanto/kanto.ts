import { Component } from '@angular/core';
import { LeaderInfo } from '../leader-info/leader-info';

@Component({
  imports: [LeaderInfo],
  selector: 'app-kanto',
  styleUrl: './kanto.css',
  templateUrl: './kanto.html',
})
export class Kanto {
  kantoLeaders = [
  {
    name: 'Brock', 
    age: 15, // Remember to use numbers, not strings!
    location: 'Pewter City', 
    type: 'Rock', 
    badge: 'Boulder Badge',
    pokemonTeam: 'Geodude, Onix' 
  },
  {
    name: 'Misty', 
    age: 13,
    location: 'Cerulean City', 
    type: 'Water', 
    badge: 'Cascade Badge',
    pokemonTeam: 'Staryu, Starmie' 
  },
  {
    name: 'Lt. Surge', 
    age: 30,
    location: 'Vermilion City', 
    type: 'Electric', 
    badge: 'Thunder Badge',
    pokemonTeam: 'Voltorb, Pikachu, Raichu' 
  },
  {
    name: 'Erika', 
    age: 18,
    location: 'Celadon City', 
    type: 'Grass', 
    badge: 'Rainbow Badge',
    pokemonTeam: 'Victreebel, Tangela, Vileplume' 
  },
  {
    name: 'Koga', 
    age: 35,
    location: 'Fuchsia City', 
    type: 'Poison', 
    badge: 'Soul Badge',
    pokemonTeam: 'Koffing, Muk, Weezing' 
  },
  {
    name: 'Sabrina', 
    age: 21,
    location: 'Saffron City', 
    type: 'Psychic', 
    badge: 'Marsh Badge',
    pokemonTeam: 'Kadabra, Mr. Mime, Alakazam' 
  },
  {
    name: 'Blaine', 
    age: 58,
    location: 'Cinnabar Island', 
    type: 'Fire', 
    badge: 'Volcano Badge',
    pokemonTeam: 'Growlithe, Ponyta, Arcanine' 
  },
  {
    name: 'Giovanni', 
    age: 42,
    location: 'Viridian City', 
    type: 'Ground', 
    badge: 'Earth Badge',
    pokemonTeam: 'Rhyhorn, Dugtrio, Rhydon' 
  }
];

}
