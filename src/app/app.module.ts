import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { HeaderComponent } from './components/header/header.component';
import { LeftSideComponent } from './components/left-side/left-side.component';
import { RightSideComponent } from './components/right-side/right-side.component';
import { RepoCardComponent } from './components/repo-card/repo-card.component';
import { RepoComponent } from './pages/repo/repo.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBook, faBuilding, faChevronDown, faChevronUp, faCodeFork, faLink, faLocationDot, faStar, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ModalTrocaPerfilComponent } from './components/modal-troca-perfil/modal-troca-perfil.component';


@NgModule({
  declarations: [
    AppComponent,
    PerfilComponent,
    HeaderComponent,
    LeftSideComponent,
    RightSideComponent,
    RepoCardComponent,
    RepoComponent,
    ModalTrocaPerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    // Add an icon to the library for convenient access in other components
    library.addIcons(
      faCodeFork,
      faBuilding,
      faLocationDot,
      faLink,
      faUserGroup,
      faStar,
      faBook,
      faChevronUp,
      faChevronDown
      );
  }
}
