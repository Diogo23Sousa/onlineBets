import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BetanoComponent } from './pages/betano/betano.component';
import { BetclicComponent } from './pages/betclic/betclic.component';
import { BetptComponent } from './pages/betpt/betpt.component';
import { BetwayComponent } from './pages/betway/betway.component';
import { Casino888Component } from './pages/casino888/casino888.component';
import { CasinosolverdeComponent } from './pages/casinosolverde/casinosolverde.component';
import { EsconlineComponent } from './pages/esconline/esconline.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LuckiaComponent } from './pages/luckia/luckia.component';
import { NetellerComponent } from './pages/neteller/neteller.component';
import { NossaapostaComponent } from './pages/nossaaposta/nossaaposta.component';
import { RevolutComponent } from './pages/revolut/revolut.component';
import { SkrillComponent } from './pages/skrill/skrill.component';

const routes: Routes = [

  // USER ROUTES
  { path: '', component: HomepageComponent },

  { path: 'betano', component: BetanoComponent },
  { path: 'betclic', component: BetclicComponent },
  { path: 'betpt', component: BetptComponent },
  { path: 'betway', component: BetwayComponent },
  { path: '888casino', component: Casino888Component },
  { path: 'casinosolverde', component: CasinosolverdeComponent },
  { path: 'esconline', component: EsconlineComponent },
  { path: 'luckia', component: LuckiaComponent},
  { path: 'neteller', component: NetellerComponent},
  { path: 'nossaaposta', component: NossaapostaComponent},
  { path: 'revolut', component: RevolutComponent},
  { path: 'skrill', component: SkrillComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
