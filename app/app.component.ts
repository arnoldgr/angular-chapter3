import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `          
    <rating></rating>
    `
})
export class AppComponent {
    title = "hello";
}


/*

      <input type="text" [(ngModel)]="title" />      
      You have typed: {{title}}

    onClick($event){
      console.log("Clicked",$event)
    }

<input type="text" bindon-ngModel="title" />

<button (click)="onClick($event)">Submit</button>
      <button on-click="onClick($event)">Submit</button>

isActive = false;

<button 
      class="btn btn-primary" 
      [style.backgroundColor]="isActive ? 'blue' : 'gray'">Submit</button>

<button class="btn btn-primary" [class.active]="isActive">Submit</button>
<button class="btn btn-primary" class.active="{{isActive}}">Submit</button>

import { ProductService } from './product.service';
<products></products>
<h1>{{title}}</h1>
providers: [ProductService]
 <img src="{{imageUrl}}" />
   <img [src]="imageUrl" />
   <img bind-src="imageUrl" />
 
 title = 'My Second Angular App';
  imageUrl = "http://lorempixel.com/400/200/";
 */
