import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PizzaserviceService {
  private pedidosSubject = new BehaviorSubject<any[]>([]);
  pedidos$ = this.pedidosSubject.asObservable();

  private ventasSubject = new BehaviorSubject<any[]>([]);
  ventas$ = this.ventasSubject.asObservable();

  constructor() {}

  agregarPedido(pedido: any): void {
    const pedidosActuales = this.pedidosSubject.value;
    const nuevosPedidos = [...pedidosActuales, pedido];
    this.pedidosSubject.next(nuevosPedidos);
  }

  eliminarPedido(index: number): void {
    const pedidosActuales = this.pedidosSubject.value;
    pedidosActuales.splice(index, 1);
    this.pedidosSubject.next([...pedidosActuales]);
  }

  guardarVentaFinal(ventaFinal: any): void {
    const ventasActuales = this.ventasSubject.value;
    const nuevasVentas = [...ventasActuales, ventaFinal];
    this.ventasSubject.next(nuevasVentas);
  }

  limpiarPedidos(): void {
    this.pedidosSubject.next([]);
  }
}
