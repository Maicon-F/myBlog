import { Component } from '@angular/core';
import { AuhService } from './service/auh.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
constructor (
  public auth:AuhService // injseção de dependencia para poder usar os dados de logado dentro do html
){}
}
