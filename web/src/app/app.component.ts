import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    loading = true;

    constructor(private router: Router) {
        const subscription = router.events.subscribe((e) => {
            if (e instanceof NavigationEnd) {
                this.loading = false;
                subscription.unsubscribe();
            }
        });
    }
}
