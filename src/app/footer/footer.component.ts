import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FooterComponent implements OnInit {

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

  ngOnInit() {
  }

}
