import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-frequency',
  standalone: true,
  imports: [CommonModule, FormsModule],
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

  items2 = [ 
    {name: "good1", url: "/assets/good1.mp3", id: 0 },
    {name: "good2", url: "/assets/good2.mp3", id: 1 },
    {name: "slow1", url: "/assets/slow1.mp3", id: 2 },
    {name: "slow2", url: "/assets/slow2.mp3", id: 3 },
    {name: "fast1", url: "/assets/fast1.mp3", id: 4 },
    {name: "fast2", url: "/assets/fast2.mp3", id: 5 },
  ];
  itemShowing?: number
  itemShowing1?: number
  showAll?: boolean = false

  constructor() {
  };

  ngOnInit() {
    this.selectItem()
    this.selectItem1()
  }
  selectItem(){
    this.itemShowing = Math.floor(Math.random() * 4)
  }
  selectItem1(){
    this.itemShowing1 = Math.floor(Math.random() * 6)
  }
}
