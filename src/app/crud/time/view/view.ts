import { Component } from '@angular/core';  
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router,RouterModule } from '@angular/router';
import { TimeService } from '../../../services/time';
import { Time } from '../../../interfaces/time';


@Component({
  selector: 'app-view',
  standalone: true,
  imports: [],
  templateUrl: './view.html',
  styleUrl: './view.css'
})
export class ViewComponent {
  
  id!: string;
  time!: Time;
      
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public  timeService: TimeService,
    private route: ActivatedRoute,
    private router: Router
   ) { }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['timeId'];
          
    this.timeService.find(this.id).subscribe((data: Time)=>{
      this.time = data;
    });
  }
  
}