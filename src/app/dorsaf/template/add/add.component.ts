import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CdkDragEnd } from '@angular/cdk/drag-drop';

import * as jsPDF from 'jsPDF';
import *as html2pdf from 'html2pdf.js';
import html2canvas from 'html2canvas';
import { element } from 'protractor';
import { RestApiService } from '../rest-api.service';
import { containsElement } from '@angular/animations/browser/src/render/shared';
import { template } from 'app/dorsaf/model/template';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {


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
 
      filename:     'myfile.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { },
      jsPDF:        { orientation: 'landscape' }
    };
    const content:Element=document.getElementById('container')

    html2pdf().from(content).set(opt).save();
    
    console.log(document.getElementById('create'))

    
     
   
    
    
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










