import { Component } from '@angular/core';
import { mockCollegue } from './mock/collegues.mock'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  mockCollege = mockCollegue; // Il faut export dans la class concernée si on veut avoir accès à l'objet dans la partie HTML

  title = 'tp-collegue';
}
