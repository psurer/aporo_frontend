import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public companyInfo = {
    name: 'Aporo',
    location: 'Miami, Florida',
    clients: ['US', 'Italy', 'Spain', 'Argentina']
  };

  constructor() { }

  ngOnInit(): void {
  }

}

