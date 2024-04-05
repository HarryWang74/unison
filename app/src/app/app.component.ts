import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FrequencyComponent } from './frequency/frequency.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FrequencyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'app';
}
