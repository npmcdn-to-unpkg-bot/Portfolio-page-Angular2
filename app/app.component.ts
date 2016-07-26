import { Component } from '@angular/core';

import { Home } from './templates/home';

// RxJs Observable operators
import './rxjs-operators';

@Component({
      selector: 'my-app',
      template: '<contactForm></contactForm>',
      directives: [Home]
})

export class AppComponent { }