import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-banda',
  templateUrl: './add-banda.component.html',
  styleUrls: ['./add-banda.component.css']
})
export class AddBandaComponent implements OnInit {


  bandaForm: FormGroup;
  numEnlaces=0;
  enlaces=new Array<string>();
  canciones= new Array<string>();
  constructor(public dialogRef: MatDialogRef<any>,private formBuilder: FormBuilder) {
    this.bandaForm=this.formBuilder.group({
      nombre:['',Validators.required],
      imagen:['',Validators.required],
      descripcion:['']
    });
   }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  addEjercicio(){
    if(this.comprobarCampos()){
        this.dialogRef.close(this.bandaForm.value);
    }
  }

  addCancion(){
    this.numEnlaces+=1;
    let nombre="Enlace"+this.numEnlaces;
    this.enlaces.push(nombre);
    this.canciones.push("");

  }
  substractCancion(){
    this.numEnlaces-=1;
    this.enlaces.pop();
    if(this.numEnlaces==0){
      
    }
    this.canciones.pop();
  }


  comprobarCampos():boolean{
    var result: boolean=true;
    var nombre = (document.getElementById('nombre') as HTMLInputElement);
    var musculo= (document.getElementById('imagen')as HTMLInputElement);
    if(this.bandaForm.get("nombre")?.invalid && this.bandaForm.get("imagen")?.invalid){
     
      nombre.style.setProperty("--c","red");
      result=false;
      musculo.style.setProperty("--p","red");
      result=false;
    }else if(this.bandaForm.get('nobre')?.invalid){
      nombre.style.setProperty("--c","red");
      result=false;
    }else if( this.bandaForm.get("imagen")?.invalid){
      musculo.style.setProperty("--p","red");
      result=false;
    }
    return result;
  }
}
