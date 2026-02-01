import { Component,inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { TimeService } from '../../../services/time';
import { Time } from '../../../interfaces/time';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './edit.html',
  styleUrl: './edit.css'
})
export class EditComponent {
  
  id!: string;
  time!: Time;
  form!: FormGroup;
  toaster = inject(ToastrService);    
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public postService: TimeService,
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
    this.postService.find(this.id).subscribe((data: Time)=>{
      this.time = data;
      this.form.patchValue(data);
      console.log(data)
    }); 
        
    this.form = new FormGroup({
      nome: new FormControl('', [Validators.required]),
      apelido: new FormControl('', Validators.required),
      logo: new FormControl('', Validators.required),
      brasileiros: new FormControl(0),
      copasDoBrasil: new FormControl(0),
      estaduais: new FormControl(0)
    });
  }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  get f(){
    return this.form.controls;
  }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  submit(){
    console.log(this.form.value);
    if(this.form.invalid){
     this.toaster.error("Preencha todos os campos.")
      return;
    }
    this.postService.update(this.id, this.form.value).subscribe((res:any) => {
         console.log('Time atualizado com sucesso!');
         this.router.navigateByUrl('time/index');
    })
  }
  
}