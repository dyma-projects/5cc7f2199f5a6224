import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {
  @Input() public compteur: number;
  @Output() public addCpt: EventEmitter<number> = new EventEmitter;
  @Output() public delCpt: EventEmitter<number> = new EventEmitter;

  addCounter():void {
    this.addCpt.emit();
  }

  subtractCounter():void {
    this.delCpt.emit();
  }

  constructor() { }

  ngOnInit() {
  }

}
