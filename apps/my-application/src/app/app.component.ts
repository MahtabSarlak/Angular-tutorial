import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [ RouterModule],
  selector: 'nxproject-root',
  templateUrl: './app.component.html',
  styleUrls: ['../styles.less'],
})
export class AppComponent {
  title = 'my-application';
}
