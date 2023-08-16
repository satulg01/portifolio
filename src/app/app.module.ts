import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';

import { initFlowbite } from 'flowbite';

import { faChartPie, faBox, faHouse, faBars } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';

import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { HomeComponent } from './components/home/home.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { ProjetosComponent } from './components/projetos/projetos.component';
import { ContatoComponent } from './components/contato/contato.component';


const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'sobre', component: SobreComponent },
	{ path: 'projetos', component: ProjetosComponent },
	{ path: 'contato', component: ContatoComponent },
	/*
	{
		path: 'menus', 
		children: [
		  { path: '', component: ListaMenusComponent },
		  { path: 'create', component: CriarMenuComponent },
		  { path: 'edit', component: EditarMenuComponent },
		]
	},
	*/
];

@NgModule({
	declarations: [AppComponent, CabecalhoComponent, HomeComponent, SobreComponent, ProjetosComponent, ContatoComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		FontAwesomeModule,
		RouterModule.forRoot(routes)
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {
	constructor(library: FaIconLibrary) {
		library.addIcons(faChartPie, faBox, faHouse, faBars);
	}

	ngOnInit(): void {
		initFlowbite();
	}
}
