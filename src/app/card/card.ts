import { Component, Input } from '@angular/core';
import { RouterOutlet,RouterModule } from '@angular/router';
import {Time} from "../interfaces/time";

@Component({
  selector: 'card',
  imports:[RouterModule],
  templateUrl: './card.html',
  styleUrls: ['./card.scss']
})
export class CardComponent {

   @Input() item: Time|undefined;


  
}
