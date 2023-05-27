import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-listado-articulos',
  templateUrl: './listado-articulos.component.html',
  styleUrls: ['./listado-articulos.component.css']
})
export class ListadoArticulosComponent {
  @Input()FavoriteBooks!:any[]; //Propiedad que por medio del decorador Input va a recibir cualquier tipo de dato en un array

  constructor(){}
}
