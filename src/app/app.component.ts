import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'primefaces-template';
  pass = '';

  constructor(private config: PrimeNGConfig) {}

  ngOnInit(): void {
    this.config.setTranslation({
      accept: 'Accept',
      reject: 'Cancel',
      passwordPrompt: 'Ingrese la contraseña'
  });
  }
}
