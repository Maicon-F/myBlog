import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { AlertasService } from '../service/alertas.service';
import { AuhService } from '../service/auh.service';


@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {


  user: User = new User
  confirmarSenha: string
  tipoUsuario: string

  nomeValido: boolean = false;
  emailValido: boolean = false;
  senhaValida: boolean = false;
  senhasIguais: boolean = false;

  constructor( 
  private authService: AuhService,
  private router: Router,
  private alertas: AlertasService

  ) {}

  ngOnInit() {
    window.scroll(0,0)
  }

  confirmSenha(event:any){
    this.confirmarSenha = event.target.value
  }

  tipoUser(event:any){
    this.tipoUsuario = event.target.value
  }

  cadastrar(){

    this.user.tipo=this.tipoUsuario
    if(this.user.senha != this.confirmarSenha){
      alert('As senhas estão incorretas!')

    }else{
      this.authService.cadastrar(this.user).subscribe((resp: User) =>{
        this.user = resp
        this.alertas.showAlertSuccess('Usuário cadastrado com sucesso!')
        this.router.navigate(['/entrar'])
        
        })

    }
    
  }


  /* Validação de entrada  */

  validacao(condicao: boolean, event: any) {
    let valid = false;
    if (condicao) {
      event.target.classList.remove("is-valid");
      event.target.classList.add("is-invalid");
    } else {
      event.target.classList.remove("is-invalid");
      event.target.classList.add("is-valid");
      valid = true;
    }
    return valid;
  }

  validaNome(event: any) {
    this.nomeValido = this.validacao(event.target.value.length < 3, event);
  }

  validaEmail(event: any) {
    this.emailValido = this.validacao(event.target.value.indexOf('@') == -1 || event.target.value.indexOf('.') == -1, event)
  }

  validaSenha(event: any) {
    this.senhaValida = this.validacao(event.target.value.length < 6 || event.target.value.length > 20, event)
  }

  confirmaSenhas(event: any) {
    this.senhasIguais = this.validacao(this.user.senha != this.confirmarSenha, event)
  }
}
