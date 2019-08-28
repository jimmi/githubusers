import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import {Location} from '@angular/common';


@Component({
  selector: 'app-person',
  templateUrl: './person.page.html',
  styleUrls: ['./person.page.scss'],
})
export class PersonPage implements OnInit {
  person;
  uri = 'https://api.github.com/users/';
  constructor(private http: HttpClient, private _route: ActivatedRoute,private _location: Location, public router: Router) { }

  ngOnInit() {
    this._route.params.subscribe(params => {
      this.http.get(`${this.uri}` + params['name'])
        .subscribe((data) => {
          console.dir(data);
          this.person = data;
        });
    });
  }

  goBack(){
    this._location.back();
  }

}
