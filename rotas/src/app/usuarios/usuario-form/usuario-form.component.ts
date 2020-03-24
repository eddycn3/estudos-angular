import { Component, OnInit } from "@angular/core";
import { FormControl, Validators, ReactiveFormsModule } from "@angular/forms";
import { UsuariosService } from "../usuarios.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Usuario } from "../usuario";

@Component({
  selector: "app-usuario-form",
  templateUrl: "./usuario-form.component.html",
  styleUrls: ["./usuario-form.component.css"]
})
export class UsuarioFormComponent implements OnInit {
  usuario: Usuario;

  //this.usuario.email = new FormControl("", [Validators.required, Validators.email]);

  constructor(
    private usersService: UsuariosService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {}
}
