import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Funcionario } from 'app/funcionario/funcionario';
import { FuncionarioService } from 'app/funcionario/funcionario.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'jhi-adicionar-funcionario',
  templateUrl: './adicionar-funcionario.component.html',
  styleUrls: ['./adicionar-funcionario.component.scss']
})
export class AdicionarFuncionarioComponent implements OnInit {
  @Output() eventEmitter = new EventEmitter<string>();
  @Input()
  public funcionario: Funcionario = {} as Funcionario;

  constructor(private funcionarioService: FuncionarioService, private ngbActiveModal: NgbActiveModal) {}

  ngOnInit(): any {}

  adicionarFuncionario(): any {
    this.funcionarioService.adicionarFuncionario(this.funcionario).subscribe(
      () => this.sucess(),
      () => alert('deu ruim')
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
