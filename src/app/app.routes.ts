import { Routes } from '@angular/router';
import { ReviewCardComponent } from './components/review-card-component/review-card.component';
import { ThankYouCardComponent } from './components/thank-you-card-component/thank-you-card.component';

export const routes: Routes = [
  {
    path: '',
    component: ReviewCardComponent,
  },
  {
    path: 'thank-you/:rating',
    component: ThankYouCardComponent,
  },
];
