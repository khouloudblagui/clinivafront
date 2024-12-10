/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit, ViewChild } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTooltip,
  ApexYAxis,
  ApexPlotOptions,
  ApexStroke,
  ApexLegend,
  ApexNonAxisChartSeries,
  ApexFill,
  ApexGrid,
  ApexTitleSubtitle,
} from 'ng-apexcharts';
import { AppointmentService } from '@core/service/appointment.service';
export type areaChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  grid: ApexGrid;
  dataLabels: ApexDataLabels;
  legend: ApexLegend;
  colors: string[];
};

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  title: ApexTitleSubtitle;
};



export type linechartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  grid: ApexGrid;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
  colors: string[];
};

export type radialChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  colors: string[];
  plotOptions: ApexPlotOptions;
};
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  @ViewChild('chart')
  chart!: ChartComponent;
  public areaChartOptions!: Partial<areaChartOptions>;
  public radialChartOptions!: Partial<radialChartOptions>;
  public linechartOptions!: Partial<linechartOptions>;
  constructor(
    private appointmentService : AppointmentService
  ) {}

  public chartOptions: ChartOptions = {
    series: [
      {
        name: 'Sales',
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }
    ],
    chart: {
      type: 'bar',
      height: 350
    },
    title: {
      text: 'Monthly Sales' // Explicitly provide a value for the title
    },
    xaxis: {
      tickAmount: 59, // Définit le nombre de ticks visibles
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug']
    },
    dataLabels: {
      enabled: false
    }
  };

  // TODO start
  tasks = [
    {
      id: '1',
      title: 'Check patient report',
      done: true,
      priority: 'High',
    },
    {
      id: '2',
      title: 'Request for festivle holiday',
      done: false,
      priority: 'High',
    },
    {
      id: '3',
      title: 'Order new medicine stock',
      done: false,
      priority: 'Low',
    },
    {
      id: '4',
      title: 'Remind for lunch in hotel',
      done: true,
      priority: 'Normal',
    },
    {
      id: '5',
      title: 'Conference in london',
      done: false,
      priority: 'High',
    },
    {
      id: '6',
      title: 'Announcement for',
      done: false,
      priority: 'Normal',
    },
    {
      id: '7',
      title: 'call bus driver',
      done: true,
      priority: 'High',
    },
    {
      id: '8',
      title: 'Web service data load issue',
      done: false,
      priority: 'High',
    },
    {
      id: '9',
      title: 'Java compile error',
      done: false,
      priority: 'Low',
    },
    {
      id: '10',
      title: 'Integrate project with spring boot',
      done: true,
      priority: 'High',
    },
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.tasks, event.previousIndex, event.currentIndex);
  }

  toggle(task: { done: boolean }) {
    task.done = !task.done;
  }
  // TODO end

  ngOnInit() {

    this.appointmentService.getHistoryDashboard().subscribe(res=>{
      console.log(res);

      const months = Object.keys(res);
      const counts = Object.values(res);
      console.log(counts);
      console.log(months);

      this.chartOptions = {
        series: [
          {
            name: 'Sales',
            data: counts
          }
        ],
        chart: {
          type: 'bar',
          height: 350
        },
        title: {
          text: 'History Patient' // Explicitly provide a value for the title
        },
        xaxis: {
          categories: ["Asthma" , "Cancer" , "Heart diseases"]
        },

        dataLabels: {
          enabled: false
        }
      };

    })
  }


  getHistoryDashboard(){
    this.appointmentService.getHistoryDashboard().subscribe(res=>{
      console.log(res);

    })
  }
}
