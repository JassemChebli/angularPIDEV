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





export var lineChartOptions: any = {
  animation: {
    duration: 1000, // general animation time
    easing: 'easeOutBack'
  },
  hover: {
    animationDuration: 1000, // duration of animations when hovering an item
    mode: 'label'
  },
  responsiveAnimationDuration: 1000, // animation duration after a resize
  responsive: true,
  maintainAspectRatio: false,
  legend: {
    position: 'bottom',
  },
  scales: {
    xAxes: [{
      display: true,
      gridLines: {
        color: "#f3f3f3",
        drawTicks: false,
      },
      scaleLabel: {
        display: true,
        labelString: 'year'
      }
    }],
    yAxes: [{
      display: false,
      gridLines: {
        color: "#f3f3f3",
        drawTicks: false,
      },
      scaleLabel: {
        display: true,
        labelString: '%'
      }
    }]
  },
  title: {
    display: true,
    text: ''
  }
};
export var lineChartColors: Array<any> = [

  {

    fill: false,
    borderDash: [5, 5],
    borderColor: "#9C27B0",
    pointBorderColor: "#9C27B0",
    pointBackgroundColor: "#FFF",
    pointBorderWidth: 2,
    pointHoverBorderWidth: 2,
    pointRadius: 4,
  },
  {

    fill: false,
    borderDash: [5, 5],
    borderColor: "#00A5A8",
    pointBorderColor: "#00A5A8",
    pointBackgroundColor: "#FFF",
    pointBorderWidth: 2,
    pointHoverBorderWidth: 2,
    pointRadius: 4,
  },
  {
    lineTension: 0,
    fill: false,
    borderColor: "#FF7D4D",
    pointBorderColor: "#FF7D4D",
    pointBackgroundColor: "#FFF",
    pointBorderWidth: 2,
    pointHoverBorderWidth: 2,
    pointRadius: 4,
  },

];
export var lineChartLegend = true;
export var lineChartType = 'line';

