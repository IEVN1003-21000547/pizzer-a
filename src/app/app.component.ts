import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FormularioComponent } from './pizza/formulario/formulario.component';
import { TablaComponent } from './pizza/tabla/tabla.component';
import { VentasComponent } from './pizza/ventas/ventas.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FormularioComponent, TablaComponent, VentasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pizzeria';
}
