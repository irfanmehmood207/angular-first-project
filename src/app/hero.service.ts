import { Injectable } from '@angular/core';
import { haveHeroList } from './hero/Hero-list';
@Injectable()
export class HeroService {

  constructor() { }

  getHeroes() {
    return haveHeroList;
  }
}
