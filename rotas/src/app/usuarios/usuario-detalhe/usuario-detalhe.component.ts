import { Component, OnInit, OnDestroy } from "@angular/core";
import { UsuariosService } from "../usuarios.service";
import { Subscription } from "rxjs";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-usuario-detalhe",
  templateUrl: "./usuario-detalhe.component.html",
  styleUrls: ["./usuario-detalhe.component.css"]
})
export class UsuarioDetalheComponent implements OnInit, OnDestroy {
  usuario: any;
  inscricao: Subscription;

  constructor(
    private usuariosService: UsuariosService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe((params: any) => {
      let id: number = params["id"];
      this.usuario = this.usuariosService.getUserById(id);
      if (this.usuario == null) {
        this.router.navigate(["/naoEncontrado"]);
      }
    });
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
}
