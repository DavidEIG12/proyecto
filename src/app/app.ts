import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Contacto } from './contacto/contacto';
import { Multimedia } from './multimedia/multimedia';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Contacto, Multimedia],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('proyecto');
}
