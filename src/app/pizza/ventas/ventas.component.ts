import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PizzaserviceService } from '../pizzaservice.service';

@Component({
  selector: 'app-ventas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ventas.component.html',
  styles: []
})
export class VentasComponent implements OnInit {
  ventas: any[] = [];

  constructor(private pizzaService: PizzaserviceService) {}

  ngOnInit() {
    this.pizzaService.ventas$.subscribe(ventas => {
      this.ventas = ventas;
    });
  }
}
