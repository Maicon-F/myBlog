import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor( private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  postTema(tema: Tema): Observable<Tema>{
    return this.http.post<Tema>('https://meucantinho.herokuapp.com/tema', tema,  {headers: new HttpHeaders().set('Authorization', environment.token)})
  }

  getAllTemas(): Observable<Tema[]>{
    return this.http.get<Tema[]>('https://meucantinho.herokuapp.com/tema',  {headers: new HttpHeaders().set('Authorization', environment.token)})
  }

}
