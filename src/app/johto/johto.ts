import { Component } from '@angular/core';
import { LeaderInfo } from '../leader-info/leader-info';

@Component({
  imports: [LeaderInfo],
  selector: 'app-johto',
  styleUrl: './johto.css',
  templateUrl: './johto.html',
})
export class Johto {
  johtoLeaders = [
  {
  name: 'Falkner', 
  age: '19',
  location: 'Violet City', 
  type: 'Flying', 
  badge: 'Zephyr Badge',
  pokemonTeam: 'Pidgey, Pidgeotto' },
{
  name: 'Bugsy', 
  age: '14',
  location: 'Azalea Town', 
  type: 'Bug',
  typeImg: 'bug.png',
  badge: 'Hive Badge',
  pokemonTeam: 'Metapod, Kakuna, Scyther' },
{
  name: 'Whitney', 
  age: '17',
  location: 'Goldenrod City', 
  type: 'Normal', 
  badge: 'Plain Badge',
  pokemonTeam: 'Clefairy, Miltank' },
{
  name: 'Morty', 
  age: '24',
  location: 'Ecruteak City', 
  type: 'Ghost', 
  badge: 'Fog Badge',
  pokemonTeam: 'Gastly, Haunter, Gengar' },
{
  name: 'Chuck', 
  age: '45',
  location: 'Cianwood City', 
  type: 'Fighting', 
  badge: 'Storm Badge',
  pokemonTeam: 'Primeape, Poliwrath' },
{
  name: 'Jasmine', 
  age: '19',
  location: 'Olivine City', 
  type: 'Steel', 
  badge: 'Mineral Badge',
  pokemonTeam: 'Magnemite, Steelix' },
{
  name: 'Pryce', 
  age: '65',
  location: 'Mahogany Town', 
  type: 'Ice', 
  badge: 'Glacier Badge',
  pokemonTeam: 'Dewgong, Piloswine' },
{
  name: 'Clair', 
  age: '23',
  location: 'Blackthorn City', 
  type: 'Dragon', 
  badge: 'Rising Badge',
  pokemonTeam: 'Dragonair, Kingdra' }
]
}
