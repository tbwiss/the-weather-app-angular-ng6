import { Component, OnInit } from '@angular/core';

import { WeatherAPIService, Weather } from '../services/weather-api.service';
import * as moment from 'moment';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  private weatherData: Weather;
  private searchTerm: string;

  constructor(private weatherApi: WeatherAPIService) { }

  ngOnInit() {
    this.weatherApi.getLocationsWeather('906057').subscribe((data: any) => {
      const weatherCollection = data.consolidated_weather;
      const today = weatherCollection.find(element => element.applicable_date === '2018-10-08');

      this.weatherData = {
        id: today.id,
        title: data.title,
        weatherStateName: today.weather_state_name,
        weatherStateAbbr: today.weather_state_abbr,
        date: today.applicable_date,
        temp: today.the_temp,
        humidity: today.humidity,
        predictability: today.predictability
      };
      console.log(this.weatherData);
    });
  }

  searchForLocation() {
    if (this.searchTerm.length > 1) {
      this.weatherApi.searchLocation(this.searchTerm).subscribe((data: any) => {
        console.log(data);
      });
    }
  }
}
