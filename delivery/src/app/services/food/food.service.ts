import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/tag';
@Injectable({
  providedIn: 'root'
})
export class FoodService {
/* Newly Added */
  constructor() { }
    getFoodById(id:number): Foods{
      return this.getAll().find(food => food.id == id)!;
    }

  getAllFoodByTag(tag: string): Foods[]{
    if(tag=='all')
    return this.getAll()
    else
    return this.getAll().filter(food => food.tags?.includes(tag));
  }

  getAllTag():Tag[]{
    return [
      { name: 'all', count : 26},
      { name: 'FastFood', count :16},
      { name: 'Pizza', count : 3},
      { name: 'Lunch', count : 11},
      { name: 'Fry', count : 4 },
      { name: 'Soup', count : 3}
    ];
  }
  getAll():Foods[]
  {
    return[
      {
      id: 1,
      name: 'Aloo-Gobi-Paratha',
      cookTime: '30-40',
      price: 70,
      favorite: false,
      origins:['Indian'],
      imageUrl: '/assets/aloo-paratha-gobi-paratha.jpg',
      tags: ['FastFood','Lunch'],
      },

      {
        id: 2,
        name: 'Biriyani',
        cookTime: '30-40',
        price: 150,
        favorite: false,
        origins:['Indian'],
        imageUrl: '/assets/biryani.jpg',
        tags: ['Lunch'],
        },

        {
          id: 3,
          name: 'Cheese Pizza',
          cookTime: '10-20',
          price: 140,
          favorite: false,
          origins:['Italy'],
          imageUrl: '/assets/cheese-pizza.jpg',
          tags: ['FastFood','Pizza'],
          },
          {
            id: 4,
            name: 'Chicken Biriyani',
            cookTime: '45-50',
            price: 210,
            favorite: false,
            origins:['Indian'],
            imageUrl: '/assets/chicken-biryani.jpg',
            tags: ['Lunch'],
            },
            {
              id: 5,
              name: 'Chicken Kabab',
              cookTime: '30-40',
              price: 140,
              favorite: false,
              origins:['Indian'],
              imageUrl: '/assets/Chicken-kabab.jpg',
              tags: ['Lunch'],
              },
              
                {
                  id: 6,
                  name: 'Chicken Skewers',
                  cookTime: '30-40',
                  price: 110,
                  favorite: false,
                  origins:['Italy','China'],
                  imageUrl: '/assets/chicken-skewers.jpg',
                  tags: ['FastFood','Fry'],
                  },
                  {
                    id: 7,
                    name: 'Cottage Cheese Pancakes',
                    cookTime: '10-15',
                    price: 90,
                    favorite: false,
                    origins:[' Ancient Greeks'],
                    imageUrl: '/assets/cottage-cheese-pancakes.jpg',
                    tags: ['FastFood'],
                    },
                    {
                      id: 8,
                      name: 'Crispy French Fries',
                      cookTime: '5-10',
                      price: 50,
                      favorite: false,
                      origins:['French'],
                      imageUrl: '/assets/crispy-french-fries.jpg',
                      tags: ['FastFood','Fry'],
                      },
                      {
                        id: 9,
                        name: 'Dahi Puri Chat',
                        cookTime: '10-15',
                        price: 50,
                        favorite: false,
                        origins:['Indian'],
                        imageUrl: '/assets/dahi-puri-chat.jpg',
                        tags: ['FastFood'],
                        },
                        {
                          id: 10,
                          name: 'Taiwan Fish',
                          cookTime: '30-40',
                          price: 260,
                          favorite: false,
                          origins:['Indian'],
                          imageUrl: '/assets/fish.jpg',
                          tags: ['Lunch'],
                          },
                          {
                            id: 11,
                            name: 'Fried Potatoes',
                            cookTime: '10-20',
                            price: 60,
                            favorite: false,
                            origins:['Indian'],
                            imageUrl: '/assets/fried-potatoes.jpg',
                            tags: ['FastFood','Fry'],
                            },
                            {
                              id: 12,
                              name: 'Grilled Chicken Legs',
                              cookTime: '30-40',
                              price: 210,
                              favorite: false,
                              origins:['Indian','Italy'],
                              
                              imageUrl: '/assets/grilled-chicken-legs.jpg',
                              tags: ['FastFood','Lunch'],
                              },
                              {
                                id: 13,
                                name: 'Meat Italian Pizza',
                                cookTime: '20-30',
                                price: 140,
                                favorite: false,
                                origins:['Indian','Italy'],
                               
                                imageUrl: '/assets/meat-italian-pizza.jpg',
                                tags: ['FastFood','Pizza'],
                                },
                                {
                                  id: 14,
                                  name: 'Mix Thali',
                                  cookTime: '45-55',
                                  price: 100,
                                  favorite: false,
                                  origins:['Indian'],
                                  
                                  imageUrl: '/assets/Mix Thali.jpg',
                                  tags: ['Lunch'],
                                  },
                                  {
                                    id: 15,
                                    name: 'Mushroom Soup',
                                    cookTime: '20-30',
                                    price: 60,
                                    favorite: false,
                                    origins:['Indian','China','Italy'],
                              
                                    imageUrl: '/assets/mushroom-soup.jpg',
                                    tags: ['FastFood','Soup'],
                                    },
                                    {
                                      id: 16,
                                      name: 'Mutton Lamb Biriyani',
                                      cookTime: '40-50',
                                      price: 210,
                                      favorite: false,
                                      origins:['Indian'],
                                     
                                      imageUrl: '/assets/mutton-lamb-biriyani.jpg',
                                      tags: ['Lunch'],
                                      },
                                      {
                                        id: 17,
                                        name: 'Paneer Butter Masala',
                                        cookTime: '30-40',
                                        price: 120,
                                        favorite: false,
                                        origins:['Indian'],
                                       
                                        imageUrl: '/assets/paneer-butter-masala.jpg',
                                        tags: ['Lunch'],
                                        },
                                       
                                          {
                                            id: 18,
                                            name: 'Pumpkin Soup',
                                            cookTime: '10-15',
                                            price: 50,
                                            favorite: false,
                                            origins:['Indian'],
                                          
                                            imageUrl: '/assets/pumpkin-soup.jpg',
                                            tags: ['FastFood','Soup'],
                                            },
                                            {
                                              id: 19,
                                              name: 'Sambar Sadam',
                                              cookTime: '30-40',
                                              price: 100,
                                              favorite: false,
                                              origins:['Indian'],
                                             
                                              imageUrl: '/assets/sambar-rice-sambar-sadam.jpg',
                                              tags: ['Lunch'],
                                              },
                                              {
                                                id: 20,
                                                name: 'Stuffed Chili Pakora',
                                                cookTime: '20-30',
                                                price: 130,
                                                favorite: false,
                                                origins:['Indian'],
                                               
                                                imageUrl: '/assets/stuffed-chilli-pakora.jpg',
                                                tags: ['FastFood','Fry'],
                                                },
                                                {
                                                  id: 21,
                                                  name: 'Sushi',
                                                  cookTime: '10-20',
                                                  price: 100,
                                                  favorite: false,
                                                  origins:['China'],
                                                
                                                  imageUrl: '/assets/sushi.jpg',
                                                  tags: ['FastFood'],
                                                  },
                                                  {
                                                    id: 22,
                                                    name: 'Tandoori Chicken',
                                                    cookTime: '40-50',
                                                    price: 150,
                                                    favorite: false,
                                                    origins:['Indian'],
                                                   
                                                    imageUrl: '/assets/tandoori-chicken-grilled.jpg',
                                                    tags: ['Lunch'],
                                                    },
                                                    {
                                                      id: 23,
                                                      name: 'Pepperoni Pizza',
                                                      cookTime: '20-30',
                                                      price: 90,
                                                      favorite: false,
                                                      origins:['Indian','Italy'],
                                                   
                                                      imageUrl: '/assets/tasty-pepperoni-pizza.jpg',
                                                      tags: ['FastFood','Pizza'],
                                                      },
                                                      {
                                                        id: 24,
                                                        name: 'Tomato Soup',
                                                        cookTime: '10-15',
                                                        price: 55,
                                                        favorite: false,
                                                        origins:['Indian'],
                                                       
                                                        imageUrl: '/assets/tomato-soup.jpg',
                                                        tags: ['FastFood','Soup'],
                                                        },
                                                        {
                                                          id: 25,
                                                          name: 'Veg Pulav',
                                                          cookTime: '40-45',
                                                          price: 100,
                                                          favorite: false,
                                                          origins:['Indian'],
                                                        
                                                          imageUrl: '/assets/veg-pulav.jpg',
                                                          tags: ['Lunch'],
                                                          },
                                                          {
                                                            id: 26,
                                                            name: 'Vegan Salad',
                                                            cookTime: '10-15',
                                                            price: 30,
                                                            favorite: false,
                                                            origins:['Indian'],
                                                           
                                                            imageUrl: '/assets/vegan-salad.jpg',
                                                            tags: ['Lunch','FastFood'],
                                                            }
    ];
  }
}
