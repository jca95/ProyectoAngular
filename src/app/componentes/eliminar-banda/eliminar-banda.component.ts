import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-eliminar-banda',
  templateUrl: './eliminar-banda.component.html',
  styleUrls: ['./eliminar-banda.component.css']
})
export class EliminarBandaComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<any>) {
  }

  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  eliminar(){
    this.dialogRef.close(true);
  }
}
