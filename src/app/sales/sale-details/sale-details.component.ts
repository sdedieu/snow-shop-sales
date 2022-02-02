import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SnowShopLibService } from 'snow-shop-lib';

@Component({
  selector: 'app-sale-details',
  templateUrl: './sale-details.component.html',
  styleUrls: ['./sale-details.component.css', '../sales.component.css']
})
export class SaleDetailsComponent implements OnInit {

  item: any;

  sizes = [{ id: 1, label: 'XS' },
  { id: 2, label: 'S' },
  { id: 3, label: 'M' },
  { id: 4, label: 'L' },
  { id: 5, label: 'XL' }]

  sizeSelected = 0;

  constructor(private http: HttpClient, 
    private route: ActivatedRoute, 
    private snowShopLibService: SnowShopLibService) { }

  ngOnInit(): void {
    this.http.get('http://localhost:3000/sales/' + this.route.snapshot.params.saleId).subscribe(
      item => this.item = item
    )
  }

  shop(){
    this.snowShopLibService.increment();
  }

}
