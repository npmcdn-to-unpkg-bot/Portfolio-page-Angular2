import { Component } from '@angular/core';

import { HomeService } from './HomeService';

import { NgForm, } from '@angular/forms';

import { Http, Response, Headers, RequestOptions, HTTP_PROVIDERS  } from '@angular/http';

@Component({
    selector: 'contactForm',
    templateUrl: 'app/home.html',
    providers: [ HomeService ]
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

    constructor (private homeService: HomeService) {}

    private postUrl = 'http://localhost:51216/api/GetMessages';
    
    newMsg(): any {
        this.homeService.newMsg(this.email, this.fullname, this.phone, this.message)
    }
}