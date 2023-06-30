import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  articles: any;
  mostViewed: any;
  env = environment;

  constructor(private http: HttpClient) {
    this.getAllArticles();
    this.getMostViewed(5);
  }

  ngOnInit() { }

  getAllArticles() {
    this.http.get(`${this.env.apiBaseURL}/articles`)
      .subscribe((response) => {
        this.articles = response;
      },
        (error) => {
          console.log(error);
        }
      )
  }

  getMostViewed(limit: number) {
    this.http.get(`${this.env.apiBaseURL}/articles/views/${limit}`)
      .subscribe((response) => {
        this.mostViewed = response;
      },
        (error) => {
          console.log(error);
        }
      )
  }

}
