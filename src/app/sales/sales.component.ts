import { Component, OnInit } from '@angular/core';
import Nick from '../../assets/img/nick-TJJ7L2anZLs-unsplash.jpg';
import Kartsen from '../../assets/img/karsten-winegeart-nFs98G05ZHM-unsplash.jpg';
import Joris from '../../assets/img/joris-meier-wmQ4hbRFg_s-unsplash.jpg';
import Sam from '../../assets/img/sam-clarke-0SXvOLcOG-w-unsplash.jpg';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

items = [
  {id: 1, img: Nick, label: 'Aero flex suit', price: 240, promotion: 50, newPrice: 120},
  {id: 2, img: Kartsen, label: 'Speedo masks', price: 100, promotion: 20, newPrice: 80},
  {id: 3, img: Joris, label: 'Xtreams backback', price: 150, promotion: 33, newPrice: 100},
  {id: 4, img: Sam, label: 'Sheilder hemlet', price: 180, promotion: 50, newPrice: 60},
]

  constructor() { }

  ngOnInit(): void {
  }

}
