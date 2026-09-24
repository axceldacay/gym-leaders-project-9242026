import { Component, inject } from '@angular/core';
import { HoennTrainersService } from '../hoenn-trainers-service';

@Component({
  imports: [],
  selector: 'app-hoenn',
  styleUrl: './hoenn.css',
  templateUrl: './hoenn.html',
})
export class Hoenn {
  hoennLeaders = inject(HoennTrainersService);
}
