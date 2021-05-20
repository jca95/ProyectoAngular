import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { YouTubePlayer } from '@angular/youtube-player';
import { Banda } from 'src/app/interfaces/banda.interfaz';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';
import { EditBandaComponent } from '../edit-banda/edit-banda.component';
import { EliminarBandaComponent } from '../eliminar-banda/eliminar-banda.component';

@Component({
  selector: 'app-banda',
  templateUrl: './banda.component.html',
  styleUrls: ['./banda.component.css']
})
export class BandaComponent implements OnInit ,AfterViewInit {
  id:string;
   idBanda:string;
   banda:Banda;

   enlaces:Array<string>;
  constructor( private route: ActivatedRoute,
    private router: Router,public dialog: MatDialog,private firestoreService: FirestoreService) {
      this.idBanda="";
      this.id="mmjpqOhBVKE";
      this.banda={
        id:"",
        nombre:"",
        imagen:"",
        detalle:"",
        numEnlaces:0,
        enlace1:"",
        enlace2:"",
        enlace3:"",
        idYoutube1:"mmjpqOhBVKE",
        idYoutube2:"mmjpqOhBVKE",
        idYoutube3:"mmjpqOhBVKE",
      };
      this.enlaces=new Array<string>();
     }
  ngAfterViewInit(): void {
   
    this.RecogerParametros();
    this.firestoreService.getBanda(this.idBanda).subscribe((i:any)=>{
      this.banda={
        id:i.payload.id,
        nombre:i.payload.data().nombre,
        imagen:i.payload.data().imagen,
        detalle:i.payload.data().detalle,
        numEnlaces:i.payload.data().numEnlaces,
        enlace1:i.payload.data().enlace1,
        enlace2:i.payload.data().enlace2,
        enlace3:i.payload.data().enlace3,
        idYoutube1:i.payload.data().idYoutube1,
        idYoutube2:i.payload.data().idYoutube2,
        idYoutube3:i.payload.data().idYoutube3,
      }
      switch(this.banda.numEnlaces){
        case 1:
          this.enlaces.push(this.banda.idYoutube1);
          break;
        case 2:
          this.enlaces.push(this.banda.idYoutube1);
          this.enlaces.push(this.banda.idYoutube2);
          break;
        case 3:
          this.enlaces.push(this.banda.idYoutube1);
          this.enlaces.push(this.banda.idYoutube2);
          this.enlaces.push(this.banda.idYoutube3);
          break;
      }
      
      this.id="mmjpqOhBVKE"
    })
  }

  ngOnInit(): void {
  
  }
 banda1() {
   return this.banda.idYoutube1;
 }
  public RecogerParametros() {
    this.route.params.subscribe((params: Params) => {
      this.idBanda = params.id;
    })

  }


  public showEdit(){
    const dialogRef = this.dialog.open(EditBandaComponent,{
      width: '374px',
      height: 'auto',
      data:{
        id:this.banda.id,
        nombre:this.banda.nombre,
        detalle:this.banda.detalle,
        imagen:this.banda.imagen,
        enlace1:this.banda.enlace1,
        enlace2:this.banda.enlace2,
        enlace3:this.banda.enlace3,
        numEnlaces:this.banda.numEnlaces,
        idYoutube1:this.banda.idYoutube1,
        idYoutube2: this.banda.idYoutube2,
        idYoutube3:this.banda.idYoutube3
      },
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result!=undefined){
        //eliminar de la base de datos
        this.firestoreService.updateBanda(this.banda.id,result);
      }
    });
  }
  public showEliminar(){
    const dialogRef = this.dialog.open(EliminarBandaComponent,{
      width: '374px',
      height: 'auto',
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result==true){
        //eliminar de la base de datos
       
       this.firestoreService.deleteBanda(this.banda.id);
       this.router.navigate([""]);
      }
    });
  }
 
}
