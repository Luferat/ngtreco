import { ContactsComponent } from './pages/contacts/contacts.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { E404Component } from './pages/e404/e404.component';

const routes: Routes = [

  // Rota padrão → Página inicial → 'home'.
  // Deve ser SEMPRE a primeira rota.
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  // Página 'home'.
  {
    path: 'home',
    title: 'Página Inicial',
    component: HomeComponent
  },

  {
    path: 'contacts',
    title: 'Faça contato',
    component: ContactsComponent
  },

  {
    path: 'about',
    title: 'Sobre',
    component: AboutComponent
  },

  {
    path: '404',
    title: 'Erro 404',
    component: E404Component
  },

  // Se uma rota não existe, vai para a página 404.
  // deve ser SEMPRE a última rota.
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
