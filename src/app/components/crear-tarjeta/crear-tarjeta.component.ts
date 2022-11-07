import { Component, OnInit } from '@angular/core';
import{FormBuilder,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-tarjeta',
  templateUrl: './crear-tarjeta.component.html',
  styleUrls: ['./crear-tarjeta.component.css']
})
export class CrearTarjetaComponent implements OnInit {

  forma: FormGroup;

  constructor(private fb: FormBuilder) {

    this.forma = this.fb.group({
      titular :['', Validators.required],
      numtarjeta:['',[Validators.required, Validators.minLength(16), Validators.maxLength(16)]],
      fechaexp:['',[Validators.required, Validators.minLength(5), Validators.maxLength(5)]],
      cvv:['',[Validators.required, Validators.minLength(3), Validators.maxLength(3)]]
    })


  }

  ngOnInit(): void {
  }


get titular(){
  return this.forma.get('titular')?.dirty && this.forma.get('titular')?.touched && this.forma.get('titular')?.valid
}

get titularNoValido(){
  return this.forma.get('titular')?.invalid && this.forma.get('titular')?.touched
}


get numtarjeta(){
  return this.forma.get('numtarjeta')?.dirty && this.forma.get('numtarjeta')?.touched && this.forma.get('numtarjeta')?.valid
}

get numtarjetaNoValido(){
  return this.forma.get('numtarjeta')?.invalid && this.forma.get('numtarjeta')?.touched
}

get fechaexp(){
  return this.forma.get('fechaexp')?.dirty && this.forma.get('fechaexp')?.touched && this.forma.get('fechaexp')?.valid
}

get fechaexpNoValido(){
  return this.forma.get('fechaexp')?.invalid && this.forma.get('fechaexp')?.touched
}

get cvv(){
  return this.forma.get('cvv')?.dirty && this.forma.get('cvv')?.touched && this.forma.get('cvv')?.valid
}

get cvvNoValido(){
  return this.forma.get('cvv')?.invalid && this.forma.get('cvv')?.touched
}




  guardarTarjeta(){

    console.log(this.forma);
    this.forma.reset();

  }
}
