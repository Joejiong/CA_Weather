import { Component, OnInit, ViewChild } from '@angular/core';
import { Http} from "@angular/http";
import { NgForm }   from '@angular/forms';

export interface weatherData{

  id:number;
  main:string;
  description:string;
  icon:string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  cityName:string = "beijing";
  private static APPID = "403594e4ae656ad423f9a240f472892a";

  @ViewChild ("weatherForm") weatherForm: NgForm;

  weatherOfCities = [];

  constructor(private http:Http) { }

  ngOnInit() {
    this.cityName= "beijing";
    console.log("nana",this.cityName)
  }

  addCity() { 
   this.cityName = ''+this.weatherForm.value.cityName;
   console.log("cityName",this.weatherForm.value);
    console.log("cityName",this.cityName);

    
    this.http.get("http://api.openweathermap.org/data/2.5/weather?", { params: { q:this.cityName, appid:HeaderComponent.APPID }})
	.subscribe(
		(result) => {
      console.log("the result is ::::",result.json())
			this.weatherOfCities= result.json().weather;
		},
		(error) => {
		}
	);

    
   /*   const cityname = this.
    this.submitted = true; */ } 

}
