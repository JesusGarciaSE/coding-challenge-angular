import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Food } from 'src/app/models/food.model';
import { FoodServiceService } from 'src/app/services/food-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {
  searchFoodForm = this.fb.group({
      food: ['', Validators.required]
  })

  foodList: Food[] = []
  foodSub: Subscription = new Subscription();

  constructor(private fb: FormBuilder,private foodService: FoodServiceService) { }

  ngOnInit() {
    this.foodService.testAPI();
  }

  ionViewWillEnter(){
    this.foodService.foods.subscribe(foods => this.foodList = foods)
  }

  onSubmit(){
    console.log(this.searchFoodForm.value)
    // this.foodService.searchFood(this.searchFoodForm.controls.food.value as string)
    console.log(this.foodList)
  }

  ngOnDestroy(): void {
    this.foodSub.unsubscribe()
  }

}
