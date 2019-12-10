import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../rest-api.service';
import { DatePipe } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})


export class SearchComponent implements OnInit {
  all: any = [];
 
  searched: any = [];

  searching = false;
  currentPage: string = "About"
  keyword: string;
  constructor(public restApi: RestApiService) { }

  ngOnInit() {
    this.loadAll()
    
  }

  loadAll() {
    return this.restApi.getAllStudents().subscribe((data: {}) => {
      this.all = data;
    })
  }

  searchStudents() {
    if (this.keyword != null && this.keyword != '') {
      this.searching = true;
      console.log(this.all)
     if(this.all.filter(x => x.firstName.toUpperCase().includes(this.keyword.toUpperCase()))) {
      this.searched = this.all.filter(x => x.firstName.toUpperCase().includes(this.keyword.toUpperCase()))
     }
    if(this.searched= this.all.filter(x => x.classe.option.label.toUpperCase().includes(this.keyword.toUpperCase()))){ 
    this.searched= this.all.filter(x => x.classe.option.label.toUpperCase().includes(this.keyword.toUpperCase()))}
    
    console.log(this.searched)
      console.log(this.searched);
    } else {
     this.searching = false;
      this.loadAll();
    }
  }
 

}
