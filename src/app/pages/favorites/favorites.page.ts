import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Food } from 'src/app/models/food.model';
import { FoodServiceService } from 'src/app/services/food-service.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit, OnDestroy {
  favoriteFoods: Food[] = []
  favFoodSub: Subscription = new Subscription()
  constructor(private foodService: FoodServiceService) { }

  ngOnInit() {
    this.foodService.getFavorites().subscribe(favFoods => {
      this.favoriteFoods = favFoods
    });
  }

  ngOnDestroy() {
    this.favFoodSub.unsubscribe()
  }

}
