import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class UsuariosService {
  usuarios: any[] = [];

  getUsuarios() {
    return (this.usuarios = [
      { id: 1, nome: "User 01", email: "user01@email.com" },
      { id: 2, nome: "User 02", email: "user02@email.com" },
      { id: 3, nome: "User 03", email: "user03@email.com" },
      { id: 4, nome: "User 04", email: "user04@email.com" },
      { id: 1, nome: "User 05", email: "user05@email.com" },
      { id: 2, nome: "User 06", email: "user06@email.com" },
      { id: 3, nome: "User 07", email: "user07@email.com" },
      { id: 4, nome: "User 08", email: "user08@email.com" },
      { id: 1, nome: "User 09", email: "user09@email.com" },
      { id: 2, nome: "User 10", email: "user10@email.com" },
      { id: 3, nome: "User 11", email: "user11@email.com" },
      { id: 4, nome: "User 12", email: "user12@email.com" }
    ]);
  }

  getUserById(id: number) {
    for (let index = 0; index < this.usuarios.length; index++) {
      const user = this.usuarios[index];
      if (id == user.id) {
        return user;
      }
    }
    return null;
  }
}
