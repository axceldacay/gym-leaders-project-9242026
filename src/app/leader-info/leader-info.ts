import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-leader-info',
  styleUrl: './leader-info.css',
  templateUrl: './leader-info.html',
})
export class LeaderInfo {
  @Input() leader: any; 

  @Output() monologueClick = new EventEmitter<string>();

  showMonologue() {
    this.monologueClick.emit(this.leader.motto);
  }

}
