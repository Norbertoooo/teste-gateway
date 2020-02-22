import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from 'app/funcionario/funcionario.service';
import { Funcionario } from 'app/funcionario/funcionario';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditarFuncionarioComponent } from 'app/funcionario/editar-funcionario/editar-funcionario.component';
import { ExcluirFuncionarioComponent } from 'app/funcionario/excluir-funcionario/excluir-funcionario.component';
@Component({
  selector: 'jhi-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.scss']
})
export class FuncionarioComponent implements OnInit {
  public listaDeFuncionarios: Funcionario[];

  constructor(private funcionarioService: FuncionarioService, private modalService: NgbModal) {
    this.listaDeFuncionarios = [];
  }

  ngOnInit(): any {
    this.listarFuncionarios();
  }

  openEditFuncionario(): any {
    this.modalService.open(EditarFuncionarioComponent);
  }

  openExcluirFuncionario(): any {
    this.modalService.open(ExcluirFuncionarioComponent);
  }

  listarFuncionarios(): any {
    this.funcionarioService.listarFuncionarios().subscribe((data: Funcionario[]) => (this.listaDeFuncionarios = data));
  }
}
