import { NgModule } from '@angular/core';
import { TesteGatewaySharedModule } from 'app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { FuncionarioRoute } from 'app/funcionario/funcionario.route';
import { FuncionarioComponent } from 'app/funcionario/funcionario.component';

@NgModule({
  imports: [TesteGatewaySharedModule, RouterModule.forChild([FuncionarioRoute])],
  declarations: [FuncionarioComponent]
})
export class FuncionarioModule {}
