import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-repo-card',
  templateUrl: './repo-card.component.html',
  styleUrls: ['./repo-card.component.css']
})
export class RepoCardComponent {
  @Input()
  key: number = 0

  @Input()
  username: string = "";

  @Input()
  reponame: string = "";

  @Input()
  descricao?: string;

  @Input()
  language?: string;

  @Input()
  forks?: number;

  @Input()
  stars?: number;


}
