import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-form-pipes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form-pipes.component.html',
  styleUrl: './form-pipes.component.css'
})
export class FormPipesComponent {

  alumnos = [
    {nombre: "Ugaz"},
    {nombre: "Gamarra"},
    {nombre: "Carbajo"},
    {nombre: "Rojas"},
    {nombre: "Polleri"}
  ]

    fechaActual = new Date()
    mostrarResultados = 0

    cursos = [ 
      {nombre: "Desarrollos web", profesor: "Damasso Lopez", precio: 2500},
      {nombre: "Preoyecto Certificador", profesor: "Marco Villa", precio: 1500},
      {nombre: "Ingles Tecnico", profesor: "Maria Chavez", precio: 2000},
      {nombre: "Servicio Web 1", profesor: "Silfrido Alva", precio: 2000},


    ]

    mostrarAlumnos(){
      this.mostrarResultados = 1
    }

    mostrarCursos(){
      this.mostrarResultados = 0
    }

   

}
