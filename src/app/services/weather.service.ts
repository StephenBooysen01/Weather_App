import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Weather, Current_Weather } from '../weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }
  private apiUrl ='https://api.open-meteo.com/v1/forecast';

  //first function to call from the api
  getTemperature(latitude: number, longitude: number){

   return this.http.get(`${this.apiUrl}?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,rain,windspeed_10m&current_weather=true`);
                
  }

  // get the city 

  getCity(latitude: number, longitude:number){
    return this.http.get('https://api.example.com/city?latitude=${latitude}&longitude=${longitude}')
  }

  getWeather(latitude: number, longitude: number) {
    return this.http.get(`${this.apiUrl}?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,rain,windspeed_10m&current_weather=true`)
      // .subscribe((data) => {
      // console.log(data);
      //   console.log((<Weather>data).current_weather.temperature);
      //   return <Weather>data;
      //   // your code to access the temperature data goes here
      // });
  }


}
