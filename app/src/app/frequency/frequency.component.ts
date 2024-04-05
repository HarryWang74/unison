import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-frequency',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './frequency.component.html',
  styleUrl: './frequency.component.scss'
})
export class FrequencyComponent {
  items = [ 
    {name: "0", url: "/assets/0.mp3", id: 0 },
    {name: "0.5", url: "/assets/0.5.mp3", id: 1 },
    {name: "1", url: "/assets/1.mp3", id: 2 },
    {name: "1.5", url: "/assets/1.5.mp3", id: 3 },
  ];
  public itemShowing?: number
  
  constructor() {
  };

  ngOnInit() {
    this.selectItem()
  }
  selectItem(){
    this.itemShowing = Math.floor(Math.random() * 4)
  }
}
