import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { BandaComponent } from 'src/app/componentes/banda/banda.component';
import { Banda } from 'src/app/interfaces/banda.interfaz';
@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor( private firestore: AngularFirestore) { 

  }


  //CRUD Por defecto 
  //Crea una nueva banda
  public createBanda(data:any) {

    let datos={
      id:data.id,
      nombre:data.nombre,
      imagen:data.imagen,
      detalle:data.detalle,
      numEnlaces:data.numEnlaces,
      enlace1:data.enlace1,
      enlace2:data.enlace2,
      enlace3:data.enlace3,
      idYoutube1:data.idYoutube1,
      idYoutube2:data.idYoutube2,
      idYoutube3:data.idYoutube3,
    }
    let u={
      id:"dfnsdf"
    }
    return this.firestore.collection('Banda').doc(datos.id).set(datos);
  }
  //Obtener una Banda
  public getBanda(documentId: string)
  {
    return this.firestore.collection('Banda').doc<Banda>(documentId).snapshotChanges();
  }
  //Obtiene todos los gatos
  public getBandas() {
    return this.firestore.collection('Banda').snapshotChanges();
  }
  //Actualiza un gato
  public updateBanda(documentId: string, data: any) {
    return this.firestore.collection('Banda').doc(documentId).set(data);
  }
  public deleteBanda(documentId:string){
    return this.firestore.collection('Banda').doc(documentId).delete();
  }
  public generarID(){
    return this.firestore.createId();
  }
}
