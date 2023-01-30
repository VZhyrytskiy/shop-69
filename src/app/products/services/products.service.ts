import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductModel } from '../models/product-model';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  Products : ProductModel[] = [
    {id: 1,
    name: "MacBook 1",
    description: "256Gb MGN63 Space Grey 2020",
    price: 2000,
    category: "laptop",
    isAvailable: true,
    additionalInfo: "Apple M2 chip",
    stock: 3
   },
    {id: 2,
    name: "Lenovo IdeaPad 2",
    description: "256Gb MGN63 Space Grey 2020",
    price: 1200,
    category: "laptop",
    isAvailable: false,
    additionalInfo: "Apple M2 chip",
    stock: 0
   },
    {id: 3,
    name: "Lenovo Gaming 0",
    description: "256Gb MGN63 Space Grey 2020",
    price: 3000,
    category: "laptop",
    isAvailable: true,
    additionalInfo: "Apple M2 chip",
    stock: 1
    },
    {id: 4,
    name: "MacBook",
    description: "256Gb MGN63 Space Grey 2020",
    price: 2500,
    category: "laptop",
    isAvailable: true,
    additionalInfo: "Apple M2 chip",
    stock: 30
   },
    {id: 5,
    name: "Lenovo IdeaPad 6",
    description: "256Gb MGN63 Space Grey 2020",
    price: 1300,
    category: "laptop",
    isAvailable: false,
    additionalInfo: "Apple M2 chip",
    stock: 0
   },
    {id: 6,
    name: "Lenovo Gaming 4",
    description: "256Gb MGN63 Space Grey 2020",
    price: 2300,
    category: "laptop",
    isAvailable: true,
    additionalInfo: "Apple M2 chip",
    stock: 13
    },
    {id: 7,
    name: "Lenovo IdeaPad1",
    description: "256Gb MGN63 Space Grey 2020",
    price: 6000,
    category: "laptop",
    isAvailable: true,
    additionalInfo: "Apple M2 chip",
    stock: 2
   },
    {id: 8,
    name: "Lenovo Gaming 3",
    description: "256Gb MGN63 Space Grey 2020",
    price: 1000,
    category: "laptop",
    isAvailable: true,
    additionalInfo: "Apple M2 chip",
    stock: 14
    }
  ]
  // почему с верхнего регистра?
  Products$: BehaviorSubject<ProductModel[]>

  constructor() {
    this.Products$ = new BehaviorSubject<ProductModel[]>(this.Products)
   }
}
