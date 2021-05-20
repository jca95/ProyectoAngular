import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Banda } from 'src/app/interfaces/banda.interfaz';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';
import { AddBandaComponent } from '../add-banda/add-banda.component';




export interface BandaElement {
  name: String;
  img: String;
}

const ELEMENT_DATA: BandaElement[] = [
  {name:'Queen II',img: 'https://images-na.ssl-images-amazon.com/images/I/61ei6DU64mL._SY355_.jpg'},
  {name: 'Black Ice', img: 'https://www.todorock.com/wp-content/uploads/2019/07/ac-dc-black-ice.jpg'},
  { name: 'Some Girl',img:'https://images-na.ssl-images-amazon.com/images/I/81gRMFAKxmL._SX355_.jpg'},
  { name: 'Ramones Rocket to Rusia', img:'https://i.pinimg.com/originals/6c/e8/43/6ce843875af20ca7d3fa02285a86ec18.jpg'},
  {name: 'Black Ice',img:'https://www.todorock.com/wp-content/uploads/2019/07/ac-dc-black-ice.jpg'},
  { name: 'Queen II', img:'https://images-na.ssl-images-amazon.com/images/I/61ei6DU64mL._SY355_.jpg'},
  { name: 'Some Girl', img:'https://images-na.ssl-images-amazon.com/images/I/81gRMFAKxmL._SX355_.jpg'},
  {name: 'Ramones Rocket to Rusia', img:'https://i.pinimg.com/originals/6c/e8/43/6ce843875af20ca7d3fa02285a86ec18.jpg'},
  
];



@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements  OnInit, AfterViewInit {
  busqueda:string;
  datos:Array<Banda>;
  bandas:Array<Banda>;
  filterName: string | undefined;
  filterPost=''
  page_size: number=10;
  page_number: number=1;
  page_size_option= [5,10,20];
  constructor( private route: ActivatedRoute,private router: Router,public dialog: MatDialog,private firestoreService: FirestoreService,) { 
    this.bandas=[];
    this.busqueda="";
    this.datos=new Array<Banda>();
  }
  ngAfterViewInit(): void {
    this.bandas=[];
    this.firestoreService.getBandas().subscribe((bandas)=>{
      this.bandas=[];
      bandas.forEach((i:any)=>{
        var b:Banda;
       
        b={
          id:i.payload.doc.data().id,
          nombre:i.payload.doc.data().nombre,
          imagen:i.payload.doc.data().imagen,
          detalle:i.payload.doc.data().detalle,
          numEnlaces:i.payload.doc.data().numEnlaces,
          enlace1:i.payload.doc.data().enlace1,
          enlace2:i.payload.doc.data().enlace2,
          enlace3:i.payload.doc.data().enlace3,
          idYoutube1:i.payload.doc.data().idYoutube1,
          idYoutube2:i.payload.doc.data().idYoutube2,
          idYoutube3:i.payload.doc.data().idYoutube3,
        }
        this.bandas.push(b);
        
        
      })
      this.busqueda="Buscar"
     this.datos=this.bandas;
     
    })
  }
 
    
  ngOnInit(): void {
    
  }
  

  handlePage(e:PageEvent){
    this.page_size=e.pageSize
    this.page_number=e.pageIndex + 1
  }
 
  applyFilter(event:Event){
    let filterValue = (event.target as HTMLInputElement).value;
    if(filterValue==""){
     this.bandas=this.datos;
    }else{
      filterValue= filterValue.toLowerCase();
      filterValue= filterValue.trim();
      this.bandas=this.bandas.filter(item => {
        let a: string;
        a=""+item.nombre;
        a.toLowerCase();
        a.trim()
        a.includes(filterValue);
        return item.nombre.toLowerCase().trim().includes(filterValue);
      })
    }
    
  }
  album(i: number){
    this.router.navigate(["banda/",this.bandas[i].id]);
  }

  addBanda(){
    const dialofgRef=this.dialog.open(AddBandaComponent,{
      width:'auto',
      height: 'auto',
    });
    dialofgRef.afterClosed().subscribe(result=>{
      if(result!=undefined){
   
         this.firestoreService.createBanda(result);
        }
     
    })
  }
}
