import { Component, OnInit } from '@angular/core';
import { JsonService } from './json.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  jsonInit:any;
  jsonRute:string = 'https://api.github.com/users/ibuioli/repos';

  title:string = 'JsonService';

  constructor(private jsonService: JsonService) {
     jsonService.getJson(this.jsonRute).subscribe(val => {
       this.jsonInit = val;
       console.log("JSON:", this.jsonInit);
     });
  }

  ngOnInit(){}
}
