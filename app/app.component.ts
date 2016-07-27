import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';

import { Home } from './home';

// RxJs Observable operators
import './rxjs-operators';

@Component({
      selector: 'my-app',
      template: '<contactForm></contactForm>',
      directives: [Home],

})

export class AppComponent { }