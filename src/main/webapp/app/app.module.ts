import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { TesteGatewaySharedModule } from 'app/shared/shared.module';
import { TesteGatewayCoreModule } from 'app/core/core.module';
import { TesteGatewayAppRoutingModule } from './app-routing.module';
import { TesteGatewayHomeModule } from './home/home.module';
import { TesteGatewayEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';
import { FuncionarioModule } from 'app/funcionario/funcionario.module';

@NgModule({
  imports: [
    BrowserModule,
    TesteGatewaySharedModule,
    TesteGatewayCoreModule,
    TesteGatewayHomeModule,
    FuncionarioModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    TesteGatewayEntityModule,
    TesteGatewayAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent]
})
export class TesteGatewayAppModule {}
