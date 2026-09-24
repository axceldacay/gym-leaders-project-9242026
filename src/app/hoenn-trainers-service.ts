import { Service, Injectable, signal } from '@angular/core';

@Service()
export class HoennTrainersService {
    private registry = signal([
        {
            name: 'Roxanne',  
            team: ['Geodude', 'Nosepass'],  
            town: 'Rustboro City',
            badge: 'Stone Badge',
            specialty: 'Rock'
        },
        {
            name: 'Brawly',  
            team: ['Machop', 'Makuhita -> Hariyama'],  
            town: 'Dewford Town',
            badge: 'Knuckle Badge',
            specialty: 'Fighting'
        },
        {
            name: 'Wattson',  
            team: ['Magnemite', 'Voltorb', 'Magneton','Electrike -> Manectric'],  
            town: 'Mauville City',
            badge: 'Dynamo Badge',
            specialty: 'Electric'
        },
        {
            name: 'Flannery',  
            team: ['Mag', 'Meg', 'Torkoal'],  
            town: 'Lavaridge Town',
            badge: 'Heat Badge',
            specialty: 'Fire'
        },
        {
            name: 'Norman',  
            team: ['Vigoroth', 'Slakoth', 'Slaking'],  
            town: 'Petalburg City',
            badge: 'Balance Badge',
            specialty: 'Normal'
        },
        {
            name: 'Winona',  
            team: ['Skarmory', 'Altaria', 'Pelipper', 'Swellow'],  
            town: 'Fortree City',
            badge: 'Feather Badge',
            specialty: 'Flying'
        },
        {
            name: 'Tate and Liza',  
            team: ['Solrock', 'Lunatone', 'Baltoy(x4)'],  
            town: 'Mossdeep City',
            badge: 'Mind Badge',
            specialty: 'Psychic'
        },
        {
            name: 'Wallace',  
            team: ['Milotic', 'Swampert', 'Walrein'],  
            town: 'Sootopolis City',
            badge: 'Rain Badge',
            specialty: 'Water'
        },
        {
            name: 'Juan',  
            team: ['Milotic', 'Luvdisc', 'Sealeo', 'Seaking', 'Whiscash'],  
            town: 'Sootpolis City',
            badge: 'Rain Badge',
            specialty: 'Water'
        },
    ]);

    trainers = this.registry.asReadonly(); 
}
