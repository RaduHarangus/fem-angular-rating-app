import {Component, input} from '@angular/core';

@Component({
  selector: 'app-thank-you-card',
  imports: [],
  templateUrl: './thank-you-card.component.html',
  styleUrl: './thank-you-card.component.scss',
})
export class ThankYouCardComponent {
  rating = input<string>();

}
