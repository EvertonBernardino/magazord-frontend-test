import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Perfil } from './models/pefill.model';
import { Repos} from './models/repos.model';
import { Observable, Subject } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class GitApiService {

  user = "gustavoguanabara"

  private url = environment.api

  constructor(private httpcliente:HttpClient) {
  }

  obterPerfil(){
    return this.httpcliente.get<Perfil>(this.url + this.user )
  }

  obterRepos(): Observable<Repos[]>{



    return this.httpcliente.get<Repos[]>(this.url + this.user + "/repos")
  }


}

