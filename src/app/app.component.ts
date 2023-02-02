import { Component, OnInit} from '@angular/core';
import { provideRouter } from '@angular/router';
import { WeatherService } from './services/weather.service';
import { Weather } from './weather';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

  template: `
    <div>
      <h1>Temperature: {{ temperature }}</h1>
    </div>
  `,
})

export class AppComponent  implements OnInit {
   // variables 
   temperature: any;
   thisWindSpeed : any;
   currentTime : any;
   isDay : boolean;

   title = 'Angular-Weather-app';
  

   ngOnInit() {
    

    console.log("test")

   

   }

   constructor(private weatherService: WeatherService) {
    this.weatherService.getWeather(-37.81, 144.96)
    .subscribe((data) => {
        console.log(data); // what data 

        // set temparture
        this.temperature = ((<Weather>data).current_weather.temperature);
        // set windspeed
        this.thisWindSpeed =((<Weather>data).current_weather.windspeed);

        // your code to access the temperature data goes here
      });

      // date 
      this.currentTime = new Date().toLocaleTimeString();

      console.log('this is ' + this.currentTime);

      // is day
        this.isDay = weatherService.getIsDay();

     

      
   



   }

    
  
      

      
      
      
      
  

}
