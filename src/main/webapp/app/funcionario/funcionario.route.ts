import { Route } from '@angular/router';
import { FuncionarioComponent } from './funcionario.component';

export const FuncionarioRoute: Route = {
  path: 'funcionario',
  component: FuncionarioComponent,
  data: {
    authorities: [],
    pageTitle: 'funcionario.title'
  }
};
