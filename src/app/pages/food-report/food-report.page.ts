import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Food } from 'src/app/models/food.model';
import { FoodServiceService } from 'src/app/services/food-service.service';

// sample food item for testing based on food model
const apple = new Food(
  "Apple",
  "Pre-Packaged Fruit & Vegetables",
  "CRISP APPLE",
  'apple',
  [
    {
      derivationCode: 'LCCS',
      name: 'Protein',
      value: 0,
      unit: 'G'
    },
    {
      derivationCode: 'D',
      name: 'Total lipid (fat)',
      value: 0,
      unit: 'G'
    },
    {
      derivationCode: 'LCCS',
      name: 'Carbohydrate, by difference',
      value: 11.7,
      unit: 'G'
    },
    {
      derivationCode: 'LCCS',
      name: '"Energy"',
      value: 46,
      unit: 'KCAL'
    },
    {
      derivationCode: 'LCCS',
      name: 'Sugars, total including NLEA',
      value: 11.7,
      unit: 'G'
    },
    {
      derivationCode: 'LCCS',
      name: 'Vitamin C, total ascorbic acid',
      value: 32.5,
      unit: 'MG'
    },

  ],
  'United States',
  250,
  'ml'
)

@Component({
  selector: 'app-food-report',
  templateUrl: './food-report.page.html',
  styleUrls: ['./food-report.page.scss'],
})
export class FoodReportPage implements OnInit {
  @Input() foodItem = apple

  constructor(
    private foodService: FoodServiceService,
    private route: ActivatedRoute,
    private navCtrl: NavController
    ) { }

  ngOnInit() {
    // this.route.paramMap.subscribe(paramMap => {
    //   if (!paramMap.has('food')) {
    //     this.navCtrl.navigateBack('/home');
    //     return;
    //   }
    // });
    this.foodItem = apple //replace with properly passed down food itme
  }

  onAddFavorite() {
    this.foodService.addFood(apple); //make api call through food service to store the favorited food to the firebase
  }
}
