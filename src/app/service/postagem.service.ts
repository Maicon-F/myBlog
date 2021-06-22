import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor( private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  postPostagem(postagem: Postagem): Observable<Postagem>{
    return this.http.post<Postagem>('https://git.heroku.com/meucantinho/postagens', postagem,  {headers: new HttpHeaders().set('Authorization', environment.token)})
  }

  getAllPostagem(): Observable<Postagem[]>{
    return this.http.get<Postagem[]>('https://git.heroku.com/meucantinho/postagens',  this.token)
  }

  getByIdPostagens(id: number): Observable<Postagem>{
    return this.http.get<Postagem>(`https://git.heroku.com/meucantinho/postagens/${id}`, this.token)
  }

  putPostagem(postagem: Postagem): Observable<Postagem>{
    return this.http.put<Postagem>('https://git.heroku.com/meucantinho/postagens', postagem, this.token)
  }

  deletePostagem(id: number){
    return this.http.delete(`https://git.heroku.com/meucantinho/postagens/${id}`, this.token)
  }


  getByTituloPostagem(titulo: String): Observable<Postagem[]>{
    return this.http.get<Postagem[]>(`https://git.heroku.com/meucantinho/postagens/titulo/${titulo}`, this.token)

  }

}
