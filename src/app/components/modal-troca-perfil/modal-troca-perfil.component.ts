import { Component } from '@angular/core';
import{faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import { PerfilComponent } from 'src/app/pages/perfil/perfil.component';

@Component({
  selector: 'app-modal-troca-perfil',
  templateUrl: './modal-troca-perfil.component.html',
  styleUrls: ['./modal-troca-perfil.component.css']
})
export class ModalTrocaPerfilComponent {
  faMagnifyingGlass= faMagnifyingGlass;

  constructor(private perfilComponent:PerfilComponent){
  }

  sair(){
    this.perfilComponent.hideAppear = false
  }

  newPerfil(text:string){
    this.perfilComponent.newPerfil = text
      this.perfilComponent.obterPerfil()
    this.sair()
  }

}
