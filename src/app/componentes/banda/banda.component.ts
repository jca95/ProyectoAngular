import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { EliminarBandaComponent } from '../eliminar-banda/eliminar-banda.component';

@Component({
  selector: 'app-banda',
  templateUrl: './banda.component.html',
  styleUrls: ['./banda.component.css']
})
export class BandaComponent implements OnInit {

  constructor( private route: ActivatedRoute,
    private router: Router,public dialog: MatDialog) { }

  ngOnInit(): void {

    const tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);

    
  }
  public showEliminar(){
    const dialogRef = this.dialog.open(EliminarBandaComponent,{
      width: '374px',
      height: 'auto',
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result!=undefined){
        //eliminar de la base de datos
       
      }
    });
  }
 
}
