import { Component, OnInit } from '@angular/core';
import { Hero } from './Hero';
import { haveHeroList } from './Hero-list';
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  constructor() { 
  }
  ngOnInit() { 
    
  }
  allDataOfHeros = haveHeroList; 
  
  
  haveSelectedValue;
  onSelect( hero )
  {
    return this.haveSelectedValue = hero;
  }
  
}
