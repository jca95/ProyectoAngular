import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor( private firestore: AngularFirestore) { 

  }


  //CRUD Por defecto 
  //Crea un nuevo gato
  public createBanda(data: {nombre: string, url: string}) {
    return this.firestore.collection('Bandas').add(data);
  }
  //Obtiene un gato
  public getBanda(documentId: string) {
    return this.firestore.collection('Bandas').doc(documentId).snapshotChanges();
  }
  //Obtiene todos los gatos
  public getBandas() {
    return this.firestore.collection('Bandas').snapshotChanges();
  }
  //Actualiza un gato
  public updateBanda(documentId: string, data: any) {
    return this.firestore.collection('Bandas').doc(documentId).set(data);
  }
}
