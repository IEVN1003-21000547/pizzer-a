import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { PizzaserviceService } from '../pizzaservice.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './formulario.component.html',
  styles: []
})
export class FormularioComponent implements OnInit {
  formGroup: FormGroup;

  constructor(
    private fb: FormBuilder,
    private pizzaService: PizzaserviceService
  ) {
    this.formGroup = this.fb.group({
      nombre: [''],
      direccion: [''],
      telefono: [''],
      tamano: [''],
      cantidad: [1],
      ingredientes: this.fb.group({
        jamon: [false],
        pina: [false],
        champinones: [false]
      })
    });
  }

  ngOnInit(): void {}

  agregarPizza(): void {
    if (this.formGroup.valid) {
      const ingredientesSeleccionados = this.obtenerIngredientesSeleccionados();
      const pedido = {
        datosCliente: {
          nombre: this.formGroup.value.nombre,
          direccion: this.formGroup.value.direccion,
          telefono: this.formGroup.value.telefono
        },
        pizza: {
          tamano: this.formGroup.value.tamano,
          ingredientes: ingredientesSeleccionados,
          cantidad: this.formGroup.value.cantidad,
        }
      };

      this.pizzaService.agregarPedido(pedido);
      this.formGroup.patchValue({
        nombre: '',
        direccion: '',
        telefono: '',
        tamano: '',
        cantidad: 1,
        ingredientes: {
          jamon: false,
          pina: false,
          champinones: false
        }
      });
    }
  }

  obtenerIngredientesSeleccionados(): string[] {
    const ingredientes = this.formGroup.get('ingredientes')?.value;
    const ingredientesSeleccionados: string[] = [];
    if (ingredientes.jamon) ingredientesSeleccionados.push('Jamón');
    if (ingredientes.pina) ingredientesSeleccionados.push('Piña');
    if (ingredientes.champinones) ingredientesSeleccionados.push('Champiñones');
    return ingredientesSeleccionados;
  }
}
