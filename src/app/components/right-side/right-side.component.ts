import { Component, OnInit} from '@angular/core';
import{faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import { Observable } from 'rxjs';
import { GitApiService } from 'src/app/git-api.service';
import { Repos } from 'src/app/models/repos.model';



@Component({
  selector: 'app-right-side',
  templateUrl: './right-side.component.html',
  styleUrls: ['./right-side.component.css']
})
export class RightSideComponent implements OnInit{
  //seletores dos botões
  btn1: string = "btnSelect"
  btn2: string = "btnNotSelect"

  //contatores do repositorios e estrelas
  repos: number = 0;
  stars: any = 0;

  //icone
  faMagnifyingGlass= faMagnifyingGlass;

  //Observale dos repositorios
  infRepos$= new Observable<Repos[]>();

  //Arry que guarda os repositorios
  reposInf:any[] = []

  //Seleção de filtros
  type: string = "Type";
  language: string = "Language";

  msg:boolean = false;


  constructor(private gitApiService: GitApiService){



  }
  ngOnInit(): void {
    //Chamada para obter os repositorios
    this.obterRepos()

    //chamada para obter os contadores de repositorios e estrelas
    this.reposEndStars()
    this.resetRepos()
  }

  //Metodo que obtem os repositorios
  async obterRepos(){
    this.infRepos$ = this.gitApiService.obterRepos();

    await this.infRepos$.forEach(valor => {
      this.reposInf = valor
    })

  }

  //Metodo para trocar o botão selecionado
  selectBtn(n:number){
    if(n == 1){
      this.btn1 = "btnSelect"
      this.btn2 = "btnNotSelect"
      this.resetRepos()


    }else if(n == 2){

      this.btn2 = "btnSelect"
      this.btn1 = "btnNotSelect"

      let vf:number
      let am: any
      let i:number
      let f:number

      for(i=0; i < this.reposInf.length; i ++){
        vf = i
        for(f=i+1; f < this.reposInf.length; f ++){
          if (this.reposInf[f].stargazers_count > this.reposInf[vf].stargazers_count ){
            vf = f
          }
        }
        if(i != vf){
          am = this.reposInf[i]
          this.reposInf[i] = this.reposInf[vf]
          this.reposInf[vf] = am

        }
      }

    }
  }

  //Metodo para obter os repositorios e estrelas
  async reposEndStars(){

    await this.infRepos$.forEach(valor => {
      this.reposInf = valor
    })

    this.repos = this.reposInf.length

    for (let i = 0; i < this.reposInf.length; i ++ ){
      this.stars += this.reposInf[i].stargazers_count
    }
    if (this.stars > 5000){
      this.stars = (this.stars/1000).toFixed() + "K"
    }
  }

  //Metodo para ordenar os repositorios
  async resetRepos(){
    this.language = "Language";

    await this.infRepos$.forEach(valor => {
      this.reposInf = valor
    })
    const shuffledRepos = this.reposInf.sort(() =>0.5 - Math.random())
    const slicedRepos = shuffledRepos.slice(0,4);
    this.reposInf = slicedRepos
  }

  async selectLanguage(){

    await this.infRepos$.forEach(valor => {
      this.reposInf = valor
    })
    if(this.language != "all"){
      for(let i:number =0; i < this.reposInf.length; i ++){
        if(this.reposInf[i].language != this.language){
          this.reposInf.splice(i, 1)
          i--
        }
      }

      console.log(this.reposInf)
      if (this.reposInf.length == 0){
        this.msg = true
      }else{
        this.msg = false
      }
    }


  }

  selectType(){
    console.log(this.type)
  }

  async filterResults(text: string) {
    if (!text) {
      this.resetRepos();
      return;
    }

    await this.infRepos$.forEach(valor => {
      this.reposInf = valor
    })

    this.reposInf = this.reposInf.filter(
      repos => repos?.name.toLowerCase().includes(text.toLowerCase())
    );
  }
}
