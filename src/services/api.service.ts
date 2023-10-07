import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public url: string = 'assets/data/studentsdata.json';
  constructor(public http : HttpClient) { }

  getStudentsData() : Observable<any> {
    return this.http.get(this.url);
  }
}
