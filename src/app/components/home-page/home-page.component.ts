import { Component, OnInit } from '@angular/core';
import { Featured } from 'src/app/models/Featured';
import { HomePageOutfits } from 'src/app/models/HomePageOutfits';
import { QuoteService } from 'src/app/Services/quote.service';
import homeOutfits from 'src/app/Data/homeOutfits.json';
import Featuredlist from 'src/app/Data/Featured.json';
import { Quotes } from 'src/app/models/Quotes';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
OutFitList:HomePageOutfits[]=homeOutfits;
Quotes : Quotes= new Quotes;
Featured : Featured[]=Featuredlist;
random : number = 1;
  constructor(private qouteservice :QuoteService) { }

  ngOnInit(): void {
    this.random = Math.floor(Math.random() * 1000);
    console.log(this.random);
    this.getDailyQoute();
  }

getDailyQoute(){
this.qouteservice.getDailyQuotes().subscribe((data :any )=>{
  this.Quotes = data[this.random];
  console.log(this.Quotes);
})
}
}
