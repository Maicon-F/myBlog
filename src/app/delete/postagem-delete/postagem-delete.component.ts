import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Postagem } from 'src/app/model/Postagem';
import { PostagemService } from 'src/app/service/postagem.service';


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
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.idPost = this.route.snapshot.params['id']
    this.findIdByPostagem(this.idPost)
  
  }

  findIdByPostagem(id: number){
  }
  
  
  apagarPostagem(){
    this.postagemService.deletePostagem(this.idPost).subscribe(()=>{
      alert('postagem apagada com sucesso!')
      this.router.navigate(['/inicio'])
    })
   
    
  }
 
}
