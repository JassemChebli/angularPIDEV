import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as jsPDF from 'jsPDF';
import *as html2pdf from 'html2pdf.js';
import html2canvas from 'html2canvas';
import { element } from 'protractor';
import { RestApiService } from '../rest-api.service';
import { containsElement } from '@angular/animations/browser/src/render/shared';
import { template } from 'app/dorsaf/model/template';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-convention-template',
  templateUrl: './convention-template.component.html',
  styleUrls: ['./convention-template.component.scss']
})
export class ConventionTemplateComponent implements OnInit {

  constructor(private router: Router,private route: ActivatedRoute,public restApi: RestApiService) {


  }
 name:any
 prenom:any
all :any=[]
  ngOnInit() {
 
    this.load()
  }
  @ViewChild('pdf') pdfContent: ElementRef

  getElement() {
    console.log(document.getElementById("container"))
    document.getElementById('create').innerHTML = document.getElementById("container").innerHTML

    
    const opt = {
      
      filename:     'myReport.pdf',
      margin:       0,
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { dpi: 192, letterRendering: true },
      jsPDF:        { format: 'a4', orientation: 'p' }
    };
    const content:Element=document.getElementById('container');

    html2pdf().from(content).set(opt).save();
    
    console.log(document.getElementById('container'))

    
     
   
    
    
  }

  load(){
    this.route.params.subscribe(params => {
      const id = +params['id'];
      console.log(id)
      return this.restApi.getStudents(id).subscribe((data: {}) => {
        this.all = data;
      })


      

    });
  }
}
