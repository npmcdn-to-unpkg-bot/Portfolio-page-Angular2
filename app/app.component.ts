import { Component } from '@angular/core';
import { HTTP_BINDINGS } from '@angular/http';

@Component({
      selector: 'my-app',
      templateUrl: 'app/templates/home.html',
      providers: [HTTP_BINDINGS]
})

export class AppComponent {
    matchPattern: RegExp;
    emailPattern: RegExp;
    backendURL: string;
    email: string;
    fullname: string;
    phone: string;
    message: string;

    constructor() {
      this.matchPattern = new RegExp('^[^\\d &\/\\#,+()$~%.:;_*?<>{} ]+[^\\d &\/\\#,+()$~%.:;_*?<>{} ]$');
      this.emailPattern = new RegExp('[^\d &\/\\#,+()$~%:;_*?<>{} .0-9]$');
    }

    submit() {
        if (this.email != null && this.message != null && this.fullname != null)
        {

        }

    }

}