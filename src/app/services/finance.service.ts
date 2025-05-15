import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FinanceService {
  private apiUrl = 'https://yahoo-finance15.p.rapidapi.com/api/';
  private headers = new HttpHeaders({
    'x-rapidapi-host': 'yahoo-finance15.p.rapidapi.com',
    'x-rapidapi-key': '5f4e88803emshe65d9a8331843f9p17303ajsn73ce885366b5' // Replace with your RapidAPI key
  });

  constructor(private http: HttpClient) {   
    this.headers.append('Cache-Control', 'no-cache');
    this.headers.append('Pragma', 'no-cache');

    console.log('HttpClient is', http); 
  }

  // Fetch current stock price
  getStockPrice(symbol: string): Observable<any> {
    const url = `${this.apiUrl}v1/markets/quote?ticker=${symbol}&type=STOCKS`;
    return this.http.get<any>(url, { headers: this.headers });
  }

  // Fetch historical stock data
  getHistoricalData(symbol: string, start: number, end: number): Observable<any> {
    const url = `${this.apiUrl}yhfhistorical?ticker=${symbol}&sdate=${start}&edate=${end}`;
    return this.http.get<any>(url, { headers: this.headers });
  }

  // Fetch top gainers
  getTopGainers(): Observable<any> {
    const url = `${this.apiUrl}yahoo/co/collections/day_gainers?start=0`; // Replace with actual endpoint
    return this.http.get<any>(url, { headers: this.headers });
  }

  // Fetch top losers
  getTopLosers(): Observable<any> {
    const url = `${this.apiUrl}yahoo/co/collections/day_losers?start=0`; // Replace with actual endpoint
    return this.http.get<any>(url, { headers: this.headers });
  }

  // Fetch market data or news (Example)
  getMarketData(): Observable<any> {
    const url = `${this.apiUrl}get-market-data`;
    return this.http.get<any>(url, { headers: this.headers });
  }
  getNewsData(): Observable<any> {
    const url = `${this.apiUrl}v1/markets/news`;
    return this.http.get<any>(url, { headers: this.headers });
  }
}

