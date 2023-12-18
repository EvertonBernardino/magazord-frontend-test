import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GitApiService } from 'src/app/git-api.service';
import { Perfil } from 'src/app/models/pefill.model';



@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  infPerfil$= new Observable <Perfil>;
  perfil: any;
  hideAppear:any;

  newPerfil:string="EvertonBernardino";



  constructor(private gitApiService: GitApiService){

    this.obterPerfil();
  }
  ngOnInit(): void {

  }

  async obterPerfil(){
    this.gitApiService.user = this.newPerfil
    this.infPerfil$ = this.gitApiService.obterPerfil();
    await this.infPerfil$.forEach(valor => {this.perfil = valor});
  }
}
