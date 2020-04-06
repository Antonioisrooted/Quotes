import { MessagesService } from './messages.service';
import { Quote } from './quote';
import { QUOTES } from './new-quotes';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  // getQuotes (): Observable<Quote[]>{
  //   return of (QUOTES);
  // }

  constructor(private messageService: MessagesService) { }

  getQuotes(): Observable<Quote[]> {
    this.messageService.add('QuoteService: fetched quotes')
    return of (QUOTES);
  }

}
