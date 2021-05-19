import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { AddBandaComponent } from '../add-banda/add-banda.component';




export interface BandaElement {
  name: string;
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
export class PrincipalComponent implements  OnInit {

  datos=ELEMENT_DATA;
  constructor( private route: ActivatedRoute,private router: Router,public dialog: MatDialog) { }

    
  ngOnInit(): void {
  }
  filterName: string | undefined;
 filterPost=''
  page_size: number=7;
  page_number: number=1;
  page_size_option= [5,10,20];

  handlePage(e:PageEvent){
    this.page_size=e.pageSize
    this.page_number=e.pageIndex + 1
  }
 
  applyFilter(event:Event){
    let filterValue = (event.target as HTMLInputElement).value;
    if(filterValue==""){
     this.datos=ELEMENT_DATA;
    }else{
      
      filterValue= filterValue.toLowerCase();
      filterValue= filterValue.trim();
      this.datos=this.datos.filter(item => {
        return item.name.toLowerCase().trim().includes(filterValue);
      })
    }
    
  }
  album(){
    this.router.navigate(["banda"]);
  }

  addBanda(){
    const dialofgRef=this.dialog.open(AddBandaComponent,{
      width:'auto',
      height: 'auto',
    });
    dialofgRef.afterClosed().subscribe(result=>{
      if(result!=undefined){
        /*
          let data={
            nombre:result.nombre,
            musculo:result.musculo,
            descripcion:result.descripcion,
          }*/
         // let _id=this.firestoreService.addEjercicios(data);
        }
      
    })
  }
}
