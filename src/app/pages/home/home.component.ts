import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  articles: any;

  constructor(private http: HttpClient) { this.getAllArticles(); }

  ngOnInit() { }

  getAllArticles() {

    this.http.get('http://localhost:8080/articles')
      .subscribe((response) => {
        console.log(response);
        this.articles = response;
      },
        (error) => {
          console.log(error);
        }

      )

  }

}
