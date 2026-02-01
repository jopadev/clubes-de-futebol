import { Component,OnInit,signal } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';
import { TimeService } from '../../../services/time';
import { Time } from '../../../interfaces/time';
import { CardComponent } from '../../../card/card';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule, RouterModule,CardComponent],
  templateUrl: './index.html',
  styleUrl: './index.css'
})
export class IndexComponent implements OnInit {
  isLoading = false;
  times = signal<Time[]>([]);
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(public timeService: TimeService) {
  

   }
      
  /**
   * Write code on Method
   *
   * @return response()
   */

  ngOnInit(): void {
    this.isLoading = true; // Show loading indicator
    this.timeService.getAll().subscribe({
      next: (data) => {
        this.times.set(data);
        this.isLoading = false; // Hide loading indicator on success
      },
      error: (error) => {
        console.error('Error fetching data:', error);
        this.isLoading = false; // Hide loading indicator on error
      }
    });
  }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  deleteTime(id:string){
    this.timeService.delete(id).subscribe(res => {
        //  this.times = this.times.filter(item => item.id !== id);
         console.log('Post deleted successfully!');
    })
  }
  
}