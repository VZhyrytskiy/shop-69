import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, ParamMap, Router } from '@angular/router'
import { map, switchMap } from 'rxjs'
import { ProductModel } from '../../models/product-model'
import { faCartShopping, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { CartService } from 'src/app/cart/services/cart.service'
import { ProductObservableService } from '../../services'

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.sass']
})
export class ProductViewComponent implements OnInit {

  product!: ProductModel
  faCart = faCartShopping
  faLeft = faChevronLeft

  constructor(
    private productObsevableService: ProductObservableService,
    private cartService: CartService,
    private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    const observer = {
      next: (product: ProductModel) => (this.product = { ...product }),
      error: (err: any) => console.log(err)
    }

    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) =>
          this.productObsevableService.getProduct(params.get('productID')!)
        ),
        // transform undefined => {}
        map(el => el ? el : {} as ProductModel)
      )
      .subscribe(observer)
  }

  onAddToCart(product: ProductModel) {
    this.cartService.addToCart(product)
    this.router.navigate(['/cart'])
  }
  onGoBack() {
    this.router.navigate([''])
  }
}