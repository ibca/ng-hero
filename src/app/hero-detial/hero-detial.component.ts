import {Component, Input, OnInit} from '@angular/core';
import {Hero} from '../hero';

@Component({
  selector: 'app-hero-detial',
  templateUrl: './hero-detial.component.html',
  styleUrls: ['./hero-detial.component.scss']
})
export class HeroDetialComponent implements OnInit {

  @Input() hero: Hero;
  constructor() { }
  ngOnInit() {
  }

}
