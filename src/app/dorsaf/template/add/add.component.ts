import { Component, OnInit, ViewChild } from '@angular/core';
import { CdkDragEnd } from '@angular/cdk/drag-drop';
import { RestApiService } from 'app/dorsaf/charts/rest-api.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  all: any = [];
  tab: any = [];
 
  elem:any = []
  e:any = []
  htmlToAdd:any
  
  constructor(public restApi:RestApiService) {

    
   }

  ngOnInit() {
    var element = document.getElementById("one").innerHTML;
    console.log(element)
  // this.loadAll();
   

   
 
  }
  dragEnd(event: CdkDragEnd) {
   
  }
  getStyle(){
    const style = getComputedStyle(document.getElementById("a"))

    //const backgroundColor = style.transform;
    //console.log(backgroundColor)
    //document.getElementById("b").style.transform=backgroundColor;
  }
  @ViewChild('target') targetElement: any; 
  getElement(){
    var element = document.getElementById("myElement").innerHTML;
    //console.log(element)
    var element2 = document.getElementById("a").style;
    const style = getComputedStyle(document.getElementById("myElement"))
    const pos = style.transform;
    var content = document.createTextNode(document.getElementById("a").innerHTML);
   document.getElementById("one").appendChild(content);


    
    
   console.log(document.getElementById("one").innerHTML)
   
    
  }
  loadAll() {
    return this.restApi.getAll().subscribe((data: {}) => {
      this.all = data;
      
     
    })
    

}
}
