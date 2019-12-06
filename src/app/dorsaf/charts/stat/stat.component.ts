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
  constructor(public restApi: RestApiService) { }

  

  public pieChartLabels =  this.categoryValye
  public pieChartData =  this.categoryName;
  public pieChartType = chartsData.pieChartType;
  public pieChartColors = chartsData.pieChartColors;
  public pieChartOptions = chartsData.pieChartOptions;


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
