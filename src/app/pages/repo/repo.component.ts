import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { GitApiService } from 'src/app/git-api.service';
import { Repos } from 'src/app/models/repos.model';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent {

  infRepos$= new Observable<Repos[]>();

  constructor(private gitApiService: GitApiService){
   this.obterRepos()

  }

  obterRepos(){
    this.infRepos$ = this.gitApiService.obterRepos();
  }


}
