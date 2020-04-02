import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from 'app/funcionario/funcionario.service';
import { Funcionario } from 'app/funcionario/funcionario';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditarFuncionarioComponent } from 'app/funcionario/editar-funcionario/editar-funcionario.component';
import { ExcluirFuncionarioComponent } from 'app/funcionario/excluir-funcionario/excluir-funcionario.component';
import { AdicionarFuncionarioComponent } from 'app/funcionario/adicionar-funcionario/adicionar-funcionario.component';

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

  openAdicionarFuncionario(): any {
    const modalRef = this.modalService.open(AdicionarFuncionarioComponent).componentInstance;
    modalRef.eventEmitter.subscribe(() => this.listarFuncionarios());
  }

  openEditFuncionario(funcionario: Funcionario): any {
    const modalRef = this.modalService.open(EditarFuncionarioComponent).componentInstance;
    modalRef.funcionario = funcionario;
    modalRef.eventEmitter.subscribe(() => this.listarFuncionarios());
  }

  openExcluirFuncionario(funcionario: Funcionario): any {
    const modalRef = this.modalService.open(ExcluirFuncionarioComponent).componentInstance;
    modalRef.funcionario = funcionario;
    modalRef.eventEmitter.subscribe(() => this.listarFuncionarios());
  }

  listarFuncionarios(): any {
    this.funcionarioService.listarFuncionarios().subscribe((data: Funcionario[]) => (this.listaDeFuncionarios = data));
  }
}
