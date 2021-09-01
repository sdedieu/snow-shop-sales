import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

items$: Observable<any[]> | undefined;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.items$ = this.http.get<any[]>('http://localhost:3000/sales');
  }

}
