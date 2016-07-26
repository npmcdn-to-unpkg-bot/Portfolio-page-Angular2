import { Component } from '@angular/core';

import { NgForm } from '@angular/forms';
import { Http, Response, Headers, RequestOptions, HTTP_PROVIDERS  } from '@angular/http';

@Component({
    selector: 'contactForm',
    templateUrl: 'home.html',
    providers: [HTTP_PROVIDERS]
})

export class Home {
    body: any;
    headers: any;
    options: any;
    errorMessage: string;
    email: string;
    fullname: string;
    phone: string;
    message: string;
    matchPattern = new RegExp('^[^\\d &\/\\#,+()$~%.:;_*?<>{} ]+[^\\d &\/\\#,+()$~%.:;_*?<>{} ]$');
    emailPattern = new RegExp('[^\d &\/\\#,+()$~%:;_*?<>{} .0-9]$');

    constructor (public http: Http) {}

    private postUrl = 'http://localhost:51216/api/SaveMessages';

    submitted = false;

    onSubmit() { this.submitted = true; }
    
    newMsg() {
        this.body = JSON.stringify({ "Email": this.email, "Fullname": this.fullname, "Phone": this.phone, "Message": this.message });
        this.headers = new Headers ({ 'Content-Type': 'application/json' });

        this.http.post(this.postUrl, this.body)
                .subscribe(response  => response.json(),
                            error =>  this.errorMessage = <any>error);
    }
}