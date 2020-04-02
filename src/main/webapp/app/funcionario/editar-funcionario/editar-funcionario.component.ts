import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Funcionario } from 'app/funcionario/funcionario';
import { FuncionarioService } from 'app/funcionario/funcionario.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'jhi-editar-funcionario',
  templateUrl: './editar-funcionario.component.html',
  styleUrls: ['./editar-funcionario.component.scss']
})
export class EditarFuncionarioComponent {
  @Output() eventEmitter = new EventEmitter<string>();
  @Input() funcionario!: Funcionario;

  constructor(private funcionarioService: FuncionarioService, private ngbActiveModal: NgbActiveModal) {}

  editaFuncionario(): any {
    this.funcionarioService.editarFuncionario(this.funcionario).subscribe(
      () => this.sucess(),
      () => alert('erro ao editar funcionario')
    );
  }

  sucess(): any {
    this.ngbActiveModal.dismiss('cancel');
    this.eventEmitter.emit('OK');
  }

  close(): any {
    this.ngbActiveModal.close();
  }
}
