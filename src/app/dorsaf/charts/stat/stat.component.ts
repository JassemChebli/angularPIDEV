import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../rest-api.service';
import { stat } from 'app/dorsaf/model/stat';
import * as chartsData from '../../../shared/data/chartjs';
@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.scss']
})
export class StatComponent implements OnInit {
  cat:string
  accepted: any = [];
  chartReady = true;
  categoryName :number[]=[];
  categoryValye :string[] =[];
  all: any = [];
  statCategory :any=[];
  year:string[]=[]
  percent:number[]=[]
  stat:stat[]=[];
  elem:any
  e:any
  htmlToAdd:any
  customerBarChartData=true;
  dataCountry:any=[]
  all2: any=[];
  all4:any=[]
  all3:any=[]
  countryName:string
  name:string
  constructor(public restApi: RestApiService) { }
  years:any=['2009', '2010', '2011', '2012', '2013', '2014', '2015','2016','2017','2018']
  tabVal:any[]

  public pieChartLabels =  this.categoryValye
  public pieChartData =  this.categoryName;
  public pieChartType = chartsData.pieChartType;
  public pieChartColors = chartsData.pieChartColors;
  public pieChartOptions = chartsData.pieChartOptions;



  public lineChartData =  [{}];
  public lineChartLabels = this.years;
  public lineChartOptions = chartsData.lineChartOptions;
  public lineChartColors = chartsData.lineChartColors;
  public lineChartLegend = chartsData.lineChartLegend;
  public lineChartType = chartsData.lineChartType;




  
  public barChartOptions = [
    { data: [] }
  ];
  public barChartLabels = this.year;
  public barChartType = chartsData.barChartType;
  public barChartLegend = chartsData.barChartLegend;
  public barChartData = [
    { data: this.percent, label: 'Categorie percent by year' }
  ];
  public barChartColors = chartsData.barChartColors;
 

  public chartHovered(e: any): void {
    //your code here
  }

  ngOnInit() {
   
    this.loadAll();
  //  this.getValue()
    
  }

create(country){

  this.countryName=country;
  this.lineChartData =  [{}];
  this.all3=[]


for(var i in this.years){

  
    this.dataCountry=this.restApi.Countrypercent(country,this.years[i]).subscribe((data: {}) => {
     
      this.all2=data;
      for (var key in this.all2) {
        if(this.all2[key]=="NaN"){
          this.all3.push(0)
        }else{
        this.all3.push(this.all2[key])
      }}
      
      
  })

  
 
}

this.lineChartData= [{ data: this.all3, label: this.countryName }];


}

  loadAll() {
    return this.restApi.getAll().subscribe((data: {}) => {
      this.all = data;
      console.log(this.all)
     for (var key in this.all) {
      var  st=new stat(key,this.all[key])
      this.stat.push(st)
      console.log(st.year.toString)
      this.categoryValye.push(st.year);
      this.categoryName.push(Number(st.percent))
    }
     
    })
    
  }
  loadAll2(val:string) {
    this.statCategory=[]
    return this.restApi.getCategoryByYear(val).subscribe((data: {}) => {
      this.cat=val;
      this.statCategory= data;
      console.log(this.statCategory)
     for (var key in this.statCategory) {
      var  st=new stat(key,this.statCategory[key])
      this.stat.push(st)
      console.log(st.year.toString)
      this.year.push(st.year);
      this.percent.push(Number(st.percent))
    }
     
    })
    
  }

 
}
