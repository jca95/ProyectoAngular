import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  constructor( private route: ActivatedRoute,
    private router: Router,) { }

  ngOnInit(): void {
  }
  album(){
    this.router.navigate(["banda"]);
  }
}
