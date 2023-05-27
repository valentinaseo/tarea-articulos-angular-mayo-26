import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Artículos Valentina tarea';
  libros = [
    {
      nombre: "Amar o depender",
      autor: "Walter Riso", 
      year: 1999
    },
    {
      nombre: "Mujeres que corren con los lobos",
      autor: "Clarissa Pinkola",
      year: 1989
    }, 
    {
      nombre: "Amar es para valientes",
      autor: "Itiel Arroyo",
      year: 2019
    },
    {
      nombre: "Moby Dick",
      autor: "Hernann Melville",
      year: 1851
    },
    {
      nombre: "El amor en los tiempos del cólera",
      autor: "Gabriel García Márquez",
      year: 1985
    }
  ]
  
}
