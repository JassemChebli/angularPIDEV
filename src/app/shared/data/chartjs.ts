import { RestApiService } from 'app/iheb/pfeFile/rest-api.service';
import { getValueInRange } from '@ng-bootstrap/ng-bootstrap/util/util';





export var barChartOptions: any = {
  scaleShowVerticalLines: false,
  responsive: true,
  maintainAspectRatio: false

};

export var barChartType = 'bar';
export var barChartLegend = true;



export var barChartColors: Array<any> = [


  {

    backgroundColor: 'rgba(255, 141, 96, 0.8)',
    borderColor: 'rgba(148,159,177,1)',
    pointBackgroundColor: 'rgba(148,159,177,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(148,159,177,0.8)'
  },
  {

    backgroundColor: 'rgba(0, 157, 160, 0.8)',
    borderColor: 'rgba(148,159,177,1)',
    pointBackgroundColor: 'rgba(148,159,177,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(148,159,177,0.8)'
  },

];



export var pieChartType = 'pie';
export var pieChartColors: any[] = [{ backgroundColor: ["rgba(0, 157, 160, 0.8)", "rgba(28, 188, 216, 0.8)", "rgba(255, 141, 96, 0.8)"] }];
export var pieChartOptions: any = {
  animation: false,
  
  responsive: true,
  maintainAspectRatio: false
};

