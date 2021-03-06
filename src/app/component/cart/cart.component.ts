import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { PaymentComponent } from 'src/app/payment/payment.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public products : any = [];
  public grandTotal !: number;
  constructor(private cartService : CartService,public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(PaymentComponent);
  }

  ngOnInit(): void {
    this.cartService.getProducts().subscribe(res=>{
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })
  }
  removeItem(item: any){
    this.cartService.removeCartItem(item);
  }
  emptycart(){
    this.cartService.removeAllCart();
  }

}
