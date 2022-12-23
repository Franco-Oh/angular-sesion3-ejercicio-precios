import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  description = 'Adquiere uno de nuestros planes en promoción.';
  
  saludo3 !: string;

  urlImage3 = 'https://www.grupoioe.es/wp-content/uploads/2020/12/tarjetas-de-navidad-originales.jpg'

  constructor() { }

  ngOnInit(): void {
  }

}
