import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ShoppingCartService } from 'app/restaurant-detail/shopping-cart/shopping-cart.service';
import { CartItem } from 'app/restaurant-detail/shopping-cart/cart-item.model';
import { Order } from 'app/order/order.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { MEAT_API } from 'app/app.api';
import { LoginService } from 'app/security/login/login.service';


@Injectable()
export class OrderService {
    constructor(private cartService: ShoppingCartService,
                private http: HttpClient) {}

    cartItems(): CartItem[] {
        return this.cartService.items;
    }

    increaseQty(item: CartItem) {
        this.cartService.increaseQty(item);
    }

    decreaseQty(item: CartItem) {
        this.cartService.decreaseQty(item);
    }

    remove(item: CartItem) {
        this.cartService.removeItem(item);
    }

    itemsValue(): number {
        return this.cartService.total();
    }

    clear() {
        this.cartService.clear();
      }

    checkOrder(order: Order): Observable<string> {
        return this.http.post<Order>(`${MEAT_API}/orders`, order)
            .pipe(map(orderResponse => orderResponse.id));
    }
}
