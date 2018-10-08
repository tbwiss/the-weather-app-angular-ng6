import { Component, OnInit } from '@angular/core';

import { WeatherAPIService, Weather, Location } from '../services/weather-api.service';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  private weatherData: Weather;
  private searchTerm: string;
  private locations: Location[];
  private searchResults: any[];

  constructor(private weatherApi: WeatherAPIService) {
    const StkhlmLocation = {
      woeid: 906057,
      title: 'Stockholm',
      locationType: 'City',
      lattLong: '59.332169,18.062429'
    };
    this.locations = [StkhlmLocation];
  }

  ngOnInit() {
    // this.weatherApi.getLocationWeather('906057').subscribe((data: any) => {
    //   const weatherCollection = data.consolidated_weather;
    //   const today = weatherCollection.find(element => element.applicable_date === '2018-10-08');

    //   this.weatherData = {
    //     id: today.id,
    //     title: data.title,
    //     weatherStateName: today.weather_state_name,
    //     weatherStateAbbr: today.weather_state_abbr,
    //     iconSrc: `/assets/icons/${today.weather_state_abbr}.svg`,
    //     date: today.applicable_date,
    //     temp: today.the_temp,
    //     humidity: today.humidity,
    //     predictability: today.predictability
    //   };
    //   console.log(this.weatherData);
    // });
  }

  searchForLocation() {
    if (this.searchTerm.length > 1) {
      this.weatherApi.searchLocation(this.searchTerm).subscribe((data: any) => {
        this.searchResults = data;
        console.log(data);
      });
    }
  }
}
