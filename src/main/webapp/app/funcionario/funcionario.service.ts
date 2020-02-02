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
}
