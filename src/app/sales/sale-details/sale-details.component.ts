import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sale-details',
  templateUrl: './sale-details.component.html',
  styleUrls: ['./sale-details.component.css', '../sales.component.css']
})
export class SaleDetailsComponent implements OnInit {

  item = { id: 1, img: 'assets/img/nick-TJJ7L2anZLs-unsplash.jpg', label: 'Aero flex suit', price: 240, promotion: 50, newPrice: 120 };

  sizes = [{ id: 1, label: 'XS' },
  { id: 2, label: 'S' },
  { id: 3, label: 'M' },
  { id: 4, label: 'L' },
  { id: 5, label: 'XL' }]

  sizeSelected = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
