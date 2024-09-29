import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

const URL = 'http://api.openweathermap.org/data/2.5/weather?q=';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private readonly httpClientSerivce: HttpClient) { }

  fetchData(cityName: string){
    return this.httpClientSerivce.get(
      `${URL}${cityName}&APPID=${environment.API_KEY}&units=metric`
    );
  }
}
