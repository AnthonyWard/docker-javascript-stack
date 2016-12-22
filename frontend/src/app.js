import {HttpClient} from 'aurelia-fetch-client';

export class App {
  constructor() {
    this.http = new HttpClient();

    this.message = 'Hello World! (From Aurelia Frontend)';
    this.message2 = 'Hello World! (Loading from Backend)';
    this.message3 = 'Hello World! (Loading from Database)';
  }

  activate() {
    this.http.fetch('http://localhost:8080', {'mode': 'no-cors'}).then(data => {
      this.message2 = JSON.stringify(data);
    }).catch(err => {
      this.message2 = err.toString();
    })
  }
}
