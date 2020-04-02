import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FuncionarioService } from 'app/funcionario/funcionario.service';
import { Funcionario } from 'app/funcionario/funcionario';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'jhi-excluir-funcionario',
  templateUrl: './excluir-funcionario.component.html',
  styleUrls: ['./excluir-funcionario.component.scss']
})
export class ExcluirFuncionarioComponent {
  @Output() eventEmitter = new EventEmitter<string>();
  @Input() funcionario!: Funcionario;

  constructor(private funcionarioService: FuncionarioService, private ngbActiveModal: NgbActiveModal) {}

  excluiFuncionario(): any {
    this.funcionarioService.excluirFuncionario(this.funcionario.id).subscribe(
      () => this.sucess(),
      () => alert('erro ao excluir funcionario')
    );
  }

  sucess(): any {
    this.ngbActiveModal.dismiss('cancel');
    this.eventEmitter.emit('OK');
  }

  close(): any {
    this.ngbActiveModal.close();
  }

  clear(): any {
    this.ngbActiveModal.dismiss('cancel');
  }
}
