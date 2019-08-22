import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {
  public compteur: number = 5; 
  public result: number;

  constructor() { }

  ngOnInit() {
  }

  addCompteur(): void {
    this.compteur++;
    this.result = this.compteur;
  }

  delCompteur(): void {
    this.compteur--;
    this.result = this.compteur;
  }

}
