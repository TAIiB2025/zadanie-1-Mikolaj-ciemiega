import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/Product.class';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() product!: Product;
  @Output() dodano = new EventEmitter<Product>();

  click=0;
  onDodajDoKoszyka():void{
    this.dodano.emit(this.product);
    this.click++;
  }
}
