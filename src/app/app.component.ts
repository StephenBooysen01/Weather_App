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

   title = 'Angular-Weather-app';
  

   ngOnInit() {
    

    console.log("test")

   let  thisData: any;

   }

   constructor(private weatherService: WeatherService) {
    this.weatherService.getWeather(-37.81, 144.96)
    .subscribe((data) => {
        console.log(data); // what data 

        // set temparture
        this.temperature = ((<Weather>data).current_weather.temperature);
        

        // your code to access the temperature data goes here
      });
   



   }

    
  
      

      
      
      
      
  

}
