import { Component,inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';  
import { TimeService } from '../../../services/time';
import { Time } from '../../../interfaces/time';
import { Router } from '@angular/router';
import { FormBuilder,ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
  
@Component({
  selector: 'app-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create.html',
  styleUrl: './create.css'
})
export class CreateComponent {
  
  form!: FormGroup;
  toaster = inject(ToastrService); 
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public timeService: TimeService,
    private router: Router
  ) { }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.form = new FormGroup({
      nome: new FormControl('', [Validators.required]),
      apelido: new FormControl('', Validators.required),
      logo: new FormControl('', Validators.required),
      brasileiros: new FormControl(0),
      copasDoBrasil: new FormControl(0),
      estaduais: new FormControl(0),      
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
    this.timeService.create(this.form.value).subscribe((res:any) => {
         console.log('Time criado com sucesso!');
         this.router.navigateByUrl('time/index');
    })
  }
  
}