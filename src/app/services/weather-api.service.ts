import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Location {
  woeid: number;
  title: string;
  locationType: string;
  lattLong: string;
}

export interface Weather {
  id: number;
  title: string;
  weatherStateName: string;
  weatherStateAbbr: string;
  date: string;
  temp: number;
  humidity: number;
  predictability: number;
}

@Injectable({
  providedIn: 'root'
})
export class WeatherAPIService {

  private baseUrl = 'https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/';

  constructor(private http: HttpClient) { }

  searchLocation(query: string) {
    return this.http.get(`${this.baseUrl}search/?query=${query}`);
  }

  getLocationsWeather(locationWoeid: string) {
    return this.http.get(this.baseUrl + locationWoeid);
  }

  getLocationsWeatherDay(locationWoeid: string, date: string) {
    return this.http.get(`${this.baseUrl}${locationWoeid}/${date}`);
  }
}
