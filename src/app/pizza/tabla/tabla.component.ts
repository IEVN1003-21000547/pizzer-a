import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PizzaserviceService } from '../pizzaservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabla.component.html',
  styles: []
})
export class TablaComponent implements OnInit {
  pedidos: any[] = [];

  constructor(
    private pizzaService: PizzaserviceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.pizzaService.pedidos$.subscribe(pedidos => {
      this.pedidos = pedidos;
    });
  }

  calcularSubtotal(pedido: any): number {
    const precios = {
      'Chica': 40,
      'Mediana': 80,
      'Grande': 120
    };
    const precioBase = precios[pedido.pizza.tamano as keyof typeof precios];
    const precioIngredientes = pedido.pizza.ingredientes.length * 10;
    return (precioBase + precioIngredientes) * pedido.pizza.cantidad;
  }

  eliminarPizza(index: number): void {
    this.pizzaService.eliminarPedido(index);
  }

  terminarPedido(): void {
    if (this.pedidos.length > 0) {
      const total = this.pedidos.reduce((sum, pedido) => 
        sum + this.calcularSubtotal(pedido), 0);

      const resumenVenta = {
        nombreCliente: this.pedidos[0].datosCliente.nombre,
        total: total
      };
      this.pizzaService.guardarVentaFinal(resumenVenta);
      this.pizzaService.limpiarPedidos();
      this.router.navigate(['/ventas']);
    }
  }
}