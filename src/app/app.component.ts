import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Laboratory_project';
  paymentHandler: any = null;

  constructor() {
    this.invokeStripe();
  }
  invokeStripe() {
    if (!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement('script');
      script.id = 'stripe-script';
      script.type = 'text/javascript';
      script.src = 'https://checkout.stripe.com/checkout.js';
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51OucOgBoaqreuNETZii1F9MkDkR5wckNFigkYdmIvVflw23JL3qgVvbLGzPXCHVmGqO26pKNzKwpIl2Y1uLGChyn00pUbVWe2g',
          locale: 'auto',
          token: function (stripeToken: any) {
            alert('Payment has been successfull!');
          },
        });
      };
      window.document.body.appendChild(script);
    }
  }
}

