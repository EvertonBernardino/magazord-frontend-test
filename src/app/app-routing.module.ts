import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PerfilComponent } from './pages/perfil/perfil.component';
import { RepoComponent } from './pages/repo/repo.component';


const routes: Routes = [
  {path:'',component: PerfilComponent},
  {path:'repo', component: RepoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
