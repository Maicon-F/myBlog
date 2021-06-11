import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { CadastrarComponent } from '../cadastrar/cadastrar.component';
import { Tema } from '../model/Tema';
import { TemaService } from '../service/tema.service';
import { AuhService } from '../service/auh.service';
import { AlertasService } from '../service/alertas.service';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})
export class TemaComponent implements OnInit {

  tema: Tema = new Tema()
  listaTemas: Tema[]

  constructor(
    private router: Router,
    private temaService: TemaService,
    private alertas: AlertasService
  ) { }

  ngOnInit() {

    if (environment.token =='') {
      this.alertas.showAlertInfo('Sua sessão expirou! Faça login novamente')
      this.router.navigate(['/entrar'])
     }
     this.findAllTemas()

     if (environment.tipo !== 'adm'){
       this.alertas.showAlertInfo('Você precisa ser admnistrador para acessar essa rota!')
       this.router.navigate(['/inicio'])
     }
 }

 findAllTemas(){
  this.temaService.getAllTemas().subscribe((resp: Tema[])=>{
    this.listaTemas = resp
  })
 }

 cadastrar(){
  this.temaService.postTema(this.tema).subscribe((resp: Tema)=>{
    this.tema = resp
    alert('Tema cadastrado com sucesso!')
    this.findAllTemas()
    this.tema = new Tema() 
  })

 }

  }


