import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoronaDataServiceService {

  public masterData: any;
  constructor(private _http : HttpClient) { }

getCoronaStats () : Observable<any>{
  return this._http.get("http://localhost:8080/coronaStats");
} 

}
