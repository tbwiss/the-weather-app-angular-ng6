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

  constructor(private weatherApi: WeatherAPIService) { }

  ngOnInit() {
    this.weatherApi.getLocationsWeather('906057').subscribe((data: any) => {
      const weatherCollection = data.consolidated_weather;
      const today = weatherCollection.find(element => element.applicable_date === '2018-10-08');

      this.weatherData = {
        id: today.id,
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
}
