import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.scss']
})
export class StatComponent implements OnInit {

    public pieChartLabels =  ['aa','bbb','cc']
    public pieChartData = [15,4,6]; 
    public pieChartType =  'pie';
    public pieChartColors =  [{ backgroundColor: ["rgba(0, 157, 160, 0.8)", "rgba(28, 188, 216, 0.8)", "rgba(255, 141, 96, 0.8)"] }];
    public pieChartOptions =  {
    animation: false,
    
    responsive: true,
    maintainAspectRatio: false
    };


  constructor() { }

  ngOnInit() {
  }

}
