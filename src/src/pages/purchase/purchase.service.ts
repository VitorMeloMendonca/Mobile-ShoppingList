import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Purchase } from './purchase.model';

@Injectable()
export class PurchaseService {

    constructor(private http: Http) { }

    private baseUrl = 'http://localhost:49943/';

    get(): Observable<Purchase[]> {
        return this.http.get(this.baseUrl + 'api/Purchase/Get')
            .map(this.extractData)
            .catch(this.handleError);
    }
  
    post(body: Purchase): Observable<Purchase> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

       return this.http.post(this.baseUrl + 'api/Purchase/Post', body, options)
            .map((this.extractData))
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }

    private handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.log(errMsg);
        return Observable.throw(errMsg);
    }
  
}
