import { Component } from '@angular/core';
import { Product } from '../models/Product.class';
import { KoszykComponent } from './koszyk/koszyk.component';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';

@Component({
  selector: 'app-root',
  imports: [ProductComponent, KoszykComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true
})
export class AppComponent {
  title = 'taiib_zadanie';

  produkty:Product[]=[
    new Product("aaa",20,new Date(),false),
    new Product("bbb",30,new Date(),true),
    new Product("ccc",40,new Date(),false),
    new Product("ddd",50,new Date(),true),
    new Product("eee",100,new Date(),false),
  ];

  koszyk=0;
  pokarzProdukty=true;

  onDodanie(event:Product):void{
    this.koszyk+=event.cena;
  }
}
