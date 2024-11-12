import { Routes } from '@angular/router';
import { FormularioComponent } from './pizza/formulario/formulario.component';
import { TablaComponent } from './pizza/tabla/tabla.component';
import { VentasComponent } from './pizza/ventas/ventas.component';

export const routes: Routes = [
  { path: '', component: FormularioComponent },
  { path: 'tabla', component: TablaComponent },
  { path: 'ventas', component: VentasComponent }
];