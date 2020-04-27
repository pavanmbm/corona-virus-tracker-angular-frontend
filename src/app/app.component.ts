import { Component, OnInit } from '@angular/core';
import { CoronaDataServiceService } from './corona-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'corono-virus-angular';
  public masterdata : any;
  constructor(private _coronaStatService : CoronaDataServiceService) {

  }
  ngOnInit() {
    this._coronaStatService.getCoronaStats().subscribe(data => this.masterdata = data);
  }
  

}
