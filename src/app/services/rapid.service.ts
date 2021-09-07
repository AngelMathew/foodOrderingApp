import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { environment } from 'src/environments/environment';

const apiKey = environment.burgerAPIKey;
@Injectable({
  providedIn: 'root',
})
export class RapidService {
  constructor(private http: HttpClient) {}
  getFoodList(): Observable<any[]> {
    // let headers = new HttpHeaders();
    // headers = headers.set("x-rapidapi-host", "application/x-www-form-urlencoded");
    return this.http.get<any[]>('https://burgers1.p.rapidapi.com/burgers', {
      headers: {
        'x-rapidapi-host': 'burgers1.p.rapidapi.com',
        'x-rapidapi-key': 'd84ba759a5mshd270096b4092fe9p12f89ajsn2e281c870dfa',
      },
    });
  }
  getFoodListItem(foodId: number) {
    return this.http.get<any[]>(
      'https://burgers1.p.rapidapi.com/burgers/' + foodId,
      {
        headers: {
          'x-rapidapi-host': 'burgers1.p.rapidapi.com',
          'x-rapidapi-key':
            'd84ba759a5mshd270096b4092fe9p12f89ajsn2e281c870dfa',
        },
      }
    );
  }
}
