import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Postagem } from 'src/app/model/Postagem';
import { AlertasService } from 'src/app/service/alertas.service';
import { PostagemService } from 'src/app/service/postagem.service';
import { environment } from 'src/environments/environment.prod';


@Component({
  selector: 'app-postagem-delete',
  templateUrl: './postagem-delete.component.html',
  styleUrls: ['./postagem-delete.component.css']
})
export class PostagemDeleteComponent implements OnInit {

  postagem: Postagem = new Postagem()
  idPost: number



  constructor(
    private postagemService: PostagemService,
    private router: Router,
    private route: ActivatedRoute,
    private alertas: AlertasService
  ) { }

  ngOnInit() {

    if (environment.token =='') {
      this.alertas.showAlertInfo('Sua sessão expirou! Faça login novamente')
      this.router.navigate(['/entrar'])
     }

    this.idPost = this.route.snapshot.params['id']
    this.findIdByPostagem(this.idPost)
  
  }

  findIdByPostagem(id: number){
  }
  
  
  apagarPostagem(){
    this.postagemService.deletePostagem(this.idPost).subscribe(()=>{
      this.alertas.showAlertSuccess('postagem apagada com sucesso!')
      this.router.navigate(['/inicio'])
    })
   
    
  }
 
}
