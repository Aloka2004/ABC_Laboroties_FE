import {
  Component,
  Inject,
  OnInit,
  ViewChild,
  inject,
  signal,
} from '@angular/core';
import { StripeCardNumberComponent, StripeService } from 'ngx-stripe';
import {
  PaymentIntent,
  StripeCardElementOptions,
  StripeElementsOptions,
} from '@stripe/stripe-js';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent {

  makePayment(amount: any) {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51OucOgBoaqreuNETZii1F9MkDkR5wckNFigkYdmIvVflw23JL3qgVvbLGzPXCHVmGqO26pKNzKwpIl2Y1uLGChyn00pUbVWe2g',
      locale: 'auto',
      token: (stripeToken: any) => {
        //here
      },
    });
    paymentHandler.open({
      name: 'ABC Laboroties',
      description: 'Make your payments here ',
      amount: amount * 100,
    });
  }
  
}
