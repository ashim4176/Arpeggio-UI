import { Component } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  data = this.getVersion();
  
    constructor(private _http: Http) {
      this.getVersion();
    }
  
    private getVersion() {
      return this._http.get('http://localhost:3000/api/version')
                  .map((res: Response) => res.json())
                   .subscribe(data => {
                          this.data = data;
                          console.log(this.data);
                  });
    }


}
