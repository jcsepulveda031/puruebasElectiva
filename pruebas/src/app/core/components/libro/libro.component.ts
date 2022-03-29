import { Component, OnInit } from '@angular/core';
import { Libro } from '../../models/libro';
import { ServicioService } from '../../service/servicio.service';
@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.scss']
})
export class LibroComponent implements OnInit {
  libro : Libro[] = [];
  constructor(
    private _servicio: ServicioService
  ) { }

  ngOnInit(): void {
    this._servicio.consumirServicio().subscribe(
      req =>{
        this.libro = req
      },
      err =>{
        var mes = err.error("hay un error care monda");
        console.log(mes);
      },


    )
  }

}
