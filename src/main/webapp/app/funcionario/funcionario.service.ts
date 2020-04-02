import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {
  constructor(private httpClient: HttpClient) {}

  listarFuncionarios(): any {
    return this.httpClient.get('http://localhost:8081/api/funcionarios');
  }

  editarFuncionario(request: any): any {
    return this.httpClient.put('http://localhost:8081/api/funcionarios', request);
  }

  excluirFuncionario(request: any): any {
    return this.httpClient.delete('http://localhost:8081/api/funcionarios/' + request);
  }

  adicionarFuncionario(request: any): any {
    return this.httpClient.post('http://localhost:8081/api/funcionarios', request);
  }
}
