import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UrlTree } from '@angular/router';
import { Banda } from 'src/app/interfaces/banda.interfaz';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';

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
  constructor(public dialogRef: MatDialogRef<any>,private formBuilder: FormBuilder, private firestoreService: FirestoreService) {
    this.bandaForm=this.formBuilder.group({
      nombre:['',Validators.required],
      imagen:['',Validators.required],
      descripcion:['',Validators.required]
    });
   }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  addCancionForm(){
    if(this.comprobarCampos()){
      let banda:Banda;
      var en1="";
      var en2="";
      var en3="";
      var id1:string
      var id2:string;
      var id3:string;
      var url:URL;
      id1="";
      id2="";
      id3="";
      switch(this.numEnlaces){
        case 1:
          en1 = (document.getElementById('enlace0') as HTMLInputElement).value;
          url=new URL(en1)
          let id=url.searchParams.get("v");
          if(id==null){
            id1="";
          }else{
            id1=id;
          }
          id2="";
          id3="";
           break;
        case 2:
          en1 = (document.getElementById('enlace0') as HTMLInputElement).value;
          url=new URL(en1)
          let idd=url.searchParams.get("v");
          if(idd==null){
            id1="";
          }else{
            id1=idd;
          }
          en2 = (document.getElementById('enlace1') as HTMLInputElement).value;
          url=new URL(en2)
          idd=url.searchParams.get("v");
          
          if(idd==null){
            id2="";
          }else{
            id2=idd;
          }
          
          id3="";
          break;
        case 3:
          en1 = (document.getElementById('enlace0') as HTMLInputElement).value;
          url=new URL(en1)
          let iddd=url.searchParams.get("v");
          if(iddd==null){
            id1="";
          }else{
            id1=iddd;
          }
          en2 = (document.getElementById('enlace1') as HTMLInputElement).value;
          url=new URL(en2)
          iddd=url.searchParams.get("v");
          
          if(iddd==null){
            id2="";
          }else{
            id2=iddd;
          }
          en3 = (document.getElementById('enlace2') as HTMLInputElement).value;
          url=new URL(en3)
          iddd=url.searchParams.get("v");
          if(iddd==null){
            id3="";
          }else{
            id3=iddd;
          }
          break;
      };
      banda={
        id:this.firestoreService.generarID(),
        nombre:this.bandaForm.value.nombre,
        imagen:this.bandaForm.value.imagen,
        detalle:this.bandaForm.value.descripcion,
        numEnlaces:this.numEnlaces,
        enlace1:en1,
        enlace2:en2,
        enlace3:en3,
        idYoutube1:id1,
        idYoutube2:id2,
        idYoutube3:id3,
      }



        this.dialogRef.close(banda);
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
    }else if(this.bandaForm.get('nombre')?.invalid){
      nombre.style.setProperty("--c","red");
      result=false;
    }else if( this.bandaForm.get("imagen")?.invalid){
      musculo.style.setProperty("--p","red");
      result=false;
    }
    return result;
  }
  
}
