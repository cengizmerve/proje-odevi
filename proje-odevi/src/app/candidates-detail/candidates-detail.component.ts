import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-candidates-detail',
  templateUrl: './candidates-detail.component.html',
  styleUrls: ['./candidates-detail.component.css']
})
export class CandidatesDetailComponent implements OnInit {
  candidataid;
  candidate;

  constructor(private route: ActivatedRoute,
              private httpClient: HttpClient) {
    route.params.subscribe(response => {
      this.candidataid = response.id;
    });
  }

  ngOnInit() {
    if (this.candidataid){
      this.httpClient.get('https://jsonplaceholder.typicode.com/users').subscribe(response => {
        this.candidate = response[this.candidataid];
      });
    }
  }

}
