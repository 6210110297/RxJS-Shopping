import { Component } from '@angular/core';

import { AuctionService } from '../auction.service';

import { Product } from '../products';

@Component({
  selector: 'app-auction',
  templateUrl: './auction.component.html',
  styleUrls: ['./auction.component.css'],
})
export class AuctionComponent {
  auctionList: Product[] = [];

  constructor(private auctionService: AuctionService) {}

  bid() {
    
  }
}
