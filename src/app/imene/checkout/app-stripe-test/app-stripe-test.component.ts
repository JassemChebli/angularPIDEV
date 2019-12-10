import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
 
import { StripeService, Elements, Element as StripeElement, ElementsOptions } from "ngx-stripe";
 
@Component({
  selector: 'app-app-stripe-test',
  templateUrl: './app-stripe-test.component.html',
  styleUrls: ['./app-stripe-test.component.scss']
})
export class AppStripeTestComponent implements OnInit {
 
  ngxQrcode2 = 'https://www.npmjs.com/package/ngx-qrcode2';

payed:boolean=false;
  constructor() { }
  handler:any = null;
  ngOnInit() {
 
    this.loadStripe();
  }
 
  pay(amount) {    
 
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_aeUUjYYcx4XNfKVW60pmHTtI',
      locale: 'auto',
      token: function (token: any) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        this.payed=true;
        console.log(token)
        alert('Token Created!!');
      
      }
    });
 
    handler.open({
      name: 'Demo Site',
      description: '2 widgets',
      amount: amount * 100
    });
 
  }
 
  loadStripe() {
  
    if(!window.document.getElementById('stripe-script')) {
      var s = window.document.createElement("script");
      s.id = "stripe-script";
      s.type = "text/javascript";
      s.src = "https://checkout.stripe.com/checkout.js";
      s.onload = () => {
        this.handler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_aeUUjYYcx4XNfKVW60pmHTtI',
          locale: 'auto',
          token: function (token: any) {
            // You can access the token ID with `token.id`.
            // Get the token ID to your server-side code for use.
            console.log(token)
            alert('Payment Success!!');
            
        
          }
        });
      }
       
      window.document.body.appendChild(s);
    }
  }

}
