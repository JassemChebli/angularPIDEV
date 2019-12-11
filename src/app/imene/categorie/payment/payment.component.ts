import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { RestApiService } from '../rest-api.service';
import { StripeService, Elements, Element as StripeElement, ElementsOptions } from "ngx-stripe";

import { T } from 'app/imene/Models/T';
const globalid=2;
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  ngxQrcode2 = 'https://www.npmjs.com/package/ngx-qrcode2';
  t: T;
  paying:boolean=false;
  notpayed:boolean=false;
  constructor(public restApi: RestApiService) { }
  handler:any = null;
  ngOnInit() {
 
    this.loadStripe();
    this.gettt(globalid);
  }
 
  gettt(id:number){
    this.restApi.gett(id).subscribe(data => {
      
      this.t=data;
      console.log(this.t);
      if(this.t.firstName=="no"){
        this.notpayed=false;
      }else {
        this.notpayed=true;
      }
  })
  }
 

  pay(amount) {    
 
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_aeUUjYYcx4XNfKVW60pmHTtI',
      locale: 'auto',
      token: function (token: any) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        
        console.log(token)
        alert('Token Created!!');
     
          
      
      }
    });
 
    handler.open({
      name: 'Demo Site',
      description: '2 widgets',
      amount: amount * 100
    });

    this.paying=true;
    let te=new T();
          te.firstName="yes";
          this.restApi.updateteacher(2,te).subscribe(data => {
            this.gettt(2);
        },
        error => {
            console.error(error);
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
