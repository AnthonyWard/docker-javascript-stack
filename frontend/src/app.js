import {HttpClient} from 'aurelia-fetch-client';

export class App {
  constructor() {
    this.http = new HttpClient();

    this.message = 'Hello World! (From Aurelia Frontend)';
    this.message2 = 'Hello World! (Loading from Backend)';
    this.message3 = 'Hello World! (Loading from Database)';
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
