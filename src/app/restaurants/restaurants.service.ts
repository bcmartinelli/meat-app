import { MenuItem } from './../restaurant-detail/menu-item/menu-item.model';
import { MEAT_API } from 'app/app.api';
import { Restaurant } from 'app/restaurants/restaurant/restaurant.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class RestaurantsService {
    rests: Array<Restaurant> = [
        {
        id: 'bread-bakery',
        name: 'Bread & Bakery',
        category: 'Bakery',
        deliveryEstimate: '25m',
        rating: 4.9,
        imagePath: 'assets/img/restaurants/breadbakery.png'
        },
        {
        id: 'burger-house',
        name: 'Burger House',
        category: 'Hamburgers',
        deliveryEstimate: '100m',
        rating: 3.5,
        imagePath: 'assets/img/restaurants/burgerhouse.png'
        }
    ];

    constructor(private http: HttpClient) {}

    restaurants(search?: string): Observable<Array<Restaurant>> {
        let params: HttpParams = undefined;
        if (search) {
            params = new HttpParams().set('q', search);
        };

        return this.http.get<Restaurant[]>(`${MEAT_API}/restaurants`, { params: params });
    }

    restaurantById(id: string): Observable<Restaurant> {
        return this.http.get<Restaurant>(`${MEAT_API}/restaurants/${id}`);
    }

    reviewsOfRestaurant(id: string): Observable<any> {
        return this.http.get<any>(`${MEAT_API}/restaurants/${id}/reviews`);
    }

    menuOfRestaurant(id: string): Observable<MenuItem[]> {
        return this.http.get<MenuItem[]>(`${MEAT_API}/restaurants/${id}/menu`);
    }
}
