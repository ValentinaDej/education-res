import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ColorService {
  colors = [
    '#FFC300',
    '#DEB887',
    '#00FFFF',
    '#DFFF00',
    '#FF5733',
    '#DE3163',
    '#DC143C',
    '#9FE2BF',
    '#FF7F50',
    '#FFD700',
    '#40E0D0',
    '#6495ED',
    '#9FE2BF',
    '#FFC0CB',
    '#DAF7A6',
  ];

  constructor() {}

  randomColor(): string {
    return this.colors[Math.floor(Math.random() * this.colors.length)];
  }
}
