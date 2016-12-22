import {HttpClient} from 'aurelia-fetch-client';

export class App {
  constructor() {
    this.http = new HttpClient();

    this.message = 'Hello World! (From Aurelia Frontend)';
  }

  activate() {
    this.http.fetch('http://localhost:8080').then(data => data.json())
    .then(json => {
      this.message2 = json.message;
    })
    .catch(err => {
      this.message2 = err.toString();
    })
  }
}
