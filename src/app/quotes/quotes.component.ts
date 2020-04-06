import { QuoteService } from './../quote.service';
import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
import { QUOTES } from './../new-quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  selectedQuote: Quote;

  quotes: Quote[]; 

  constructor(private QuoteService: QuoteService) { }

  ngOnInit() {
    this.getQuotes();
  }

  onSelect(quote: Quote) :void{
    this.selectedQuote = quote;
  }

  getQuotes() :void{
    this.QuoteService.getQuotes().subscribe(quotes=>this.quotes=quotes);
  }

}
