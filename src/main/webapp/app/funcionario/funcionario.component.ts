import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from 'app/funcionario/funcionario.service';
import { Funcionario } from 'app/funcionario/funcionario';
@Component({
  selector: 'jhi-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.scss']
})
export class FuncionarioComponent implements OnInit {
  public listaDeFuncionarios: Funcionario[];

  constructor(private funcionarioService: FuncionarioService) {
    this.listaDeFuncionarios = [];
  }

  ngOnInit(): any {
    this.listarFuncionarios();
  }

  listarFuncionarios(): any {
    this.funcionarioService.listarFuncionarios().subscribe((data: Funcionario[]) => (this.listaDeFuncionarios = data));
  }
}
