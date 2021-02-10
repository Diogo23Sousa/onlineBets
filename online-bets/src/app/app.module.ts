import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Casino888Component } from './pages/casino888/casino888.component';
import { BetanoComponent } from './pages/betano/betano.component';
import { BetclicComponent } from './pages/betclic/betclic.component';
import { BetptComponent } from './pages/betpt/betpt.component';
import { BetwayComponent } from './pages/betway/betway.component';
import { CasinosolverdeComponent } from './pages/casinosolverde/casinosolverde.component';
import { EsconlineComponent } from './pages/esconline/esconline.component';
import { LuckiaComponent } from './pages/luckia/luckia.component';
import { NetellerComponent } from './pages/neteller/neteller.component';
import { NossaapostaComponent } from './pages/nossaaposta/nossaaposta.component';
import { RevolutComponent } from './pages/revolut/revolut.component';
import { SkrillComponent } from './pages/skrill/skrill.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { FooterComponent } from './pages/footer/footer.component';
import { HomepageComponent } from './pages/homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    Casino888Component,
    BetanoComponent,
    BetclicComponent,
    BetptComponent,
    BetwayComponent,
    CasinosolverdeComponent,
    EsconlineComponent,
    LuckiaComponent,
    NetellerComponent,
    NossaapostaComponent,
    RevolutComponent,
    SkrillComponent,
    NavbarComponent,
    FooterComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
