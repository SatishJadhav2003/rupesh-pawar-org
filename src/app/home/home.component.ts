import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/backend.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit{

  constructor(private api: ApiService) {}
  ngOnInit(): void {
    // this.api.getData().subscribe((data: any) => {
    //   console.log(data);
    // });
  }
}
