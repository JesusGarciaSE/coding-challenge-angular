import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { take, tap, map } from 'rxjs/operators'
import { Food } from '../models/food.model';

@Injectable({
  providedIn: 'root'
})
export class FoodServiceService {

  private _foods = new BehaviorSubject<Food[]>([])

  constructor(private http: HttpClient) { }

  get foods() {
    return this._foods.asObservable()
  }

  //test api call to pull information and see what it looks like
  testAPI() {
    this.http.get('https://api.nal.usda.gov/fdc/v1/foods/search?query=apple&pageSize=2&api_key=ZWQtNhsIJMEKJnsoGivLfhFMRf8DY2oMs3TvmrZ3').pipe(take(1), tap(resData => console.log(resData))).subscribe();
  }

  //api call to pull a specific type of food
  getFood(food: string) {
    this.http.get('https://api.nal.usda.gov/fdc/v1/foods/search?api_key=ZWQtNhsIJMEKJnsoGivLfhFMRf8DY2oMs3TvmrZ3&query='+food)
    .pipe(take(1), map(resData => {

      console.log(resData)

      // return this._foods.next(desiredFoodData)
    })).subscribe();
  }

  //adds a favorite food to a set up firebase database
  addFood(favoriteFood: Food) {
    this.http.post('https://usaa-programming-test-default-rtdb.firebaseio.com/favorites.json', favoriteFood)
    .pipe(take(1), map(resData => {

      console.log(resData)

      // return this._foods.next(desiredFoodData)
    })).subscribe();
  }

  //pulls the list of favorite food from the firebase database
  getFavorites() {
    return this.http.get<{[key: string]: Food}>('https://usaa-programming-test-default-rtdb.firebaseio.com/favorites.json')
    .pipe(take(1), map(resData => {

      console.log(resData)

      const desiredFoodData = []
      for( const key in resData) {
        if(resData.hasOwnProperty(key)){
          desiredFoodData.push(new Food(
            resData[key].description,
            resData[key].foodCategory,
            resData[key].ingredients,
            resData[key].lowerCaseDescription,
            resData[key].foodNutrients,
            resData[key].marketCountry,
            resData[key].servingSize,
            resData[key].servingSizeUnit
          ));
        }
      }
      return desiredFoodData;
    }),
    tap(favorites => {
      return this._foods.next(favorites)
    }));
  }
}
