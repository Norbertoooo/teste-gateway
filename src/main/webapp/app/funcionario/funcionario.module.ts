import { NgModule } from '@angular/core';
import { TesteGatewaySharedModule } from 'app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { FuncionarioRoute } from 'app/funcionario/funcionario.route';
import { FuncionarioComponent } from 'app/funcionario/funcionario.component';
import { EditarFuncionarioComponent } from 'app/funcionario/editar-funcionario/editar-funcionario.component';
import { ExcluirFuncionarioComponent } from 'app/funcionario/excluir-funcionario/excluir-funcionario.component';
import { AdicionarFuncionarioComponent } from './adicionar-funcionario/adicionar-funcionario.component';

@NgModule({
  imports: [TesteGatewaySharedModule, RouterModule.forChild([FuncionarioRoute])],
  declarations: [FuncionarioComponent, EditarFuncionarioComponent, ExcluirFuncionarioComponent, AdicionarFuncionarioComponent],
  entryComponents: [EditarFuncionarioComponent, ExcluirFuncionarioComponent, AdicionarFuncionarioComponent]
})
export class FuncionarioModule {}
