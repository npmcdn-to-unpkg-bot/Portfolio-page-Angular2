import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import './rxjs-operators';

@Injectable()
export class HomeService {
    
    constructor (private http: Http) {}

    private postUrl = 'http://localhost:51216/api/GetMessages';
    
    newMsg(Email: string, Fullname: string, Phone: string, Message: string) {
        let body = JSON.stringify({ "Email": Email, "Fullname": Fullname, "Phone": Phone, "Message": Message });
        let headers = new Headers ({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.postUrl, body, options)
                        .toPromise()
                        .then((res) => alert('Reservation added'))
                        .catch((error) => alert('Something went wrong'));
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data;
    }

    private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Promise.reject(errMsg);
    }
}