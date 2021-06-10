import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { AuhService } from 'src/app/service/auh.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user: User = new User()
  idUser: number

  confirmarSenha: string
  tipoUsuario: string
  

  constructor(
    private authService: AuhService,
    private router: Router,
    private route: ActivatedRoute

    
  ) { }

  ngOnInit() {
    window.scroll(0,0)

    this.idUser= this.route.snapshot.params['id']
    this.findByIdUser(this.idUser)
  }


  confirmSenha(event:any){
    this.confirmarSenha = event.target.value
  }

  tipoUser(event:any){
    this.tipoUsuario = event.target.value
  }


atualizar(){

  this.user.tipo=this.tipoUsuario
  if(this.user.senha != this.confirmarSenha){
    alert('As senhas estão incorretas!')

  }else{
    this.authService.cadastrar(this.user).subscribe((resp: User) =>{
      this.user = resp
      this.router.navigate(['/inicio'])
      alert('Usuário atualizado com sucesso!')
      })

  }
  
}






findByIdUser(id: number){
  this.authService.getByIdUser(id).subscribe((resp: User)=>{
    this.user = resp
  })

}

}
