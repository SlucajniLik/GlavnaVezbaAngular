import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UnesiPodatkeComponent } from './unesi-podatke/unesi-podatke.component';
import {HttpClientModule} from "@angular/common/http";
import { ListaPodatakaComponent } from './lista-podataka/lista-podataka.component'
import { ReactiveFormsModule,FormsModule} from '@angular/forms';
import { NavigacijaComponent } from './navigacija/navigacija.component';

import { JednaOsobaComponent } from './jedna-osoba/jedna-osoba.component';
import { UpdateOsobaComponent } from './update-osoba/update-osoba.component';
import { UnesiPodComponent } from './DrugaVezba/unesi-pod/unesi-pod.component';
import { ListaPodComponent } from './DrugaVezba/lista-pod/lista-pod.component';
import { NavigComponent } from './DrugaVezba/navig/navig.component';
import { Router, RouterModule } from '@angular/router';
import { UpdateOsobu2Component } from './DrugaVezba/update-osobu2/update-osobu2.component';
import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    UnesiPodatkeComponent,
    ListaPodatakaComponent,
    NavigacijaComponent,
    JednaOsobaComponent,
    UpdateOsobaComponent,
    UnesiPodComponent,
    ListaPodComponent,
    NavigComponent,
    UpdateOsobu2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(
      [
       {path:'dodajOsobu2',component:UnesiPodComponent},
       {path:'listaOsoba',component:ListaPodComponent},
       {path:'updateOsobu2/:id',component:UpdateOsobu2Component},
       {path:'jednaOsoba2',component:JednaOsobaComponent,canActivate:[AuthGuard]}

      ]
    )
  /*  RouterModule.forRoot(
      [

        {
          path:'dodajOsobu',component:UnesiPodatkeComponent
        },
        {
          path:'Osobe',component:ListaPodatakaComponent
        },
        {
          path:'Osobe/:id',component:JednaOsobaComponent
        },
        {
          path:'updateOsobu/:id',component:UpdateOsobaComponent
        },
      ]
    )*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
