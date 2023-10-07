import { ApiService } from './../services/api.service';
import { Component } from '@angular/core';

@Component({
  selector: 'ng-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng15';

  public students: any[] = [];

  constructor(public _apiServices : ApiService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this._apiServices.getStudentsData().subscribe(data => this.students = data);
  }
}
