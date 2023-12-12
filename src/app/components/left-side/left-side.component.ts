import { Component, Input} from '@angular/core';
import { faEnvelope, faChevronUp, faChevronDown, faL } from '@fortawesome/free-solid-svg-icons';
import { PerfilComponent } from 'src/app/pages/perfil/perfil.component';




@Component({
  selector: 'app-left-side',
  templateUrl: './left-side.component.html',
  styleUrls: ['./left-side.component.css']

})
export class LeftSideComponent{

  faEnvelope = faEnvelope;
  faChevronUp = faChevronUp;
  faChevronDown = faChevronDown;

  @Input()
  username: string ='';
  @Input()
  name: string ='';
  @Input()
  avatar_url?: string;
  @Input()
  icon: string | any;
  @Input()
  bio:string = '';
  @Input()
  followers: string ='';
  @Input()
  following: string ='';
  @Input()
  company?: string;
  @Input()
  location?: string;
  @Input()
  email?: string;
  @Input()
  blog?: string;

  constructor( private perfilComponent:PerfilComponent){
  }


  trocarPerfil(){
    this.perfilComponent.hideAppear = true
  };

  inf: boolean = true;
  ico = faChevronUp;
  row = "row1"

  ocutar() {
    if(this.row==="row1"){
      this.ico = faChevronDown
      this.row = "row"
    }else{
      this.ico = faChevronUp
      this.row = "row1"
    }
  }
}

