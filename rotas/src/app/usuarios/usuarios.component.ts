import { Component, OnInit } from "@angular/core";
import { UsuariosService } from "./usuarios.service";

@Component({
  selector: "app-usuarios",
  templateUrl: "./usuarios.component.html",
  styleUrls: ["./usuarios.component.css"]
})
export class UsuariosComponent implements OnInit {
  usuarios: any[] = [];

  constructor(private usuariosService: UsuariosService) {}

  ngOnInit(): void {
    this.usuarios = this.usuariosService.getUsuarios();
    console.log(this.usuarios.length);
  }
}
