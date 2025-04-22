import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FinanceService {
  private apiUrl = 'https://yahoo-finance15.p.rapidapi.com/api/yahoo/finance/';
  private headers = new HttpHeaders({
    'x-rapidapi-host': 'yahoo-finance15.p.rapidapi.com',
    'x-rapidapi-key': 'your-rapidapi-key' // Replace with your RapidAPI key
  });

  constructor(private http: HttpClient) {}

  // Fetch current stock price
  getStockPrice(symbol: string): Observable<any> {
    const url = `${this.apiUrl}get-price?symbol=${symbol}`;
    return this.http.get<any>(url, { headers: this.headers });
  }

  // Fetch historical stock data
  getHistoricalData(symbol: string, start: number, end: number): Observable<any> {
    const url = `${this.apiUrl}get-historical-data?symbol=${symbol}&start=${start}&end=${end}`;
    return this.http.get<any>(url, { headers: this.headers });
  }

  // Fetch top gainers
  getTopGainers(): Observable<any> {
    const url = `${this.apiUrl}get-top-gainers`; // Replace with actual endpoint
    return this.http.get<any>(url, { headers: this.headers });
  }

  // Fetch top losers
  getTopLosers(): Observable<any> {
    const url = `${this.apiUrl}get-top-losers`; // Replace with actual endpoint
    return this.http.get<any>(url, { headers: this.headers });
  }

  // Fetch market data or news (Example)
  getMarketData(): Observable<any> {
    const url = `${this.apiUrl}get-market-data`;
    return this.http.get<any>(url, { headers: this.headers });
  }
}
