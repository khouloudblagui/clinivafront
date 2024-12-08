import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '@core/service/appointment.service';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTooltip,
  ApexYAxis,
  ApexPlotOptions,
  ApexStroke,
  ApexLegend,
  ApexFill,
  ApexResponsive,
  ApexGrid,
  ApexTitleSubtitle,
  ApexNonAxisChartSeries,
} from 'ng-apexcharts';
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
  legend: ApexLegend;
  responsive: ApexResponsive[];
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
  grid: ApexGrid;
  colors: string[];
};

export type ChartOptions2 = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  title: ApexTitleSubtitle;
};

export type ChartOptions3 = {
  series: ApexNonAxisChartSeries; // For non-axis charts like pie/donut
  chart: ApexChart;
  labels: string[];
  responsive: ApexResponsive[];
  title: ApexTitleSubtitle;
};
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {

  public smallChart1Options!: Partial<ChartOptions>;
  public smallChart2Options!: Partial<ChartOptions>;
  public smallChart3Options!: Partial<ChartOptions>;
  public smallChart4Options!: Partial<ChartOptions>;
  public barChartOptions!: Partial<ChartOptions>;
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(
    private appointmentService : AppointmentService
  ) {}


  public pieChartOptions!: ChartOptions3;

  public areaChartOptions: ChartOptions2 = {
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
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug']
    },
    dataLabels: {
      enabled: false
    }
  };
  ngOnInit() {
    this.smallChart1();
    this.smallChart2();
    this.smallChart3();
    this.smallChart4();

    this.chart2();
    this.getAppointments()
    this.getStatus()
  }

  getStatus(){
    this.appointmentService.getStatusCountDashboard().subscribe(res=>{
      const months = Object.keys(res);
      const counts = Object.values(res);
      console.log(counts);
      console.log(months);
      this.pieChartOptions = {
        series: counts, // Values for the slices
        chart: {
          type: 'pie', // Specify pie chart
          height: 350
        },
        labels:months, // Labels for the slices
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 300
              },
              legend: {
                position: 'bottom'
              }
            }
          }
        ],
        title: {
          text: 'Status Appointment'
        }
      };
    })
  }

  getAppointments(){
    this.appointmentService.getAllAppointmentsDashboard().subscribe(res=>{
      console.log(res)
      const months = Object.keys(res);
      const counts = Object.values(res);
      console.log(counts);
      console.log(months);

      this.areaChartOptions = {
        series: [
          {
            name: 'Sales',
            data:counts
          }
        ],
        chart: {
          type: 'bar',
          height: 350
        },
        title: {
          text: 'Monthly '
        },
        xaxis: {
          categories: months
        },
        dataLabels: {
          enabled: false
        }
      };



    });

  }

  private smallChart1() {
    this.smallChart1Options = {
      series: [
        {
          name: 'Appointments',
          data: [
            50, 61, 80, 50, 72, 52, 60, 41, 30, 45, 70, 40, 93, 63, 50, 62,
          ],
        },
      ],
      chart: {
        height: 70,
        type: 'area',
        toolbar: {
          show: false,
        },
        sparkline: {
          enabled: true,
        },
        foreColor: '#9aa0ac',
      },
      colors: ['#6F42C1'],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
      },
      xaxis: {
        categories: [
          '16-07-2018',
          '17-07-2018',
          '18-07-2018',
          '19-07-2018',
          '20-07-2018',
          '21-07-2018',
          '22-07-2018',
          '23-07-2018',
          '24-07-2018',
          '25-07-2018',
          '26-07-2018',
          '27-07-2018',
          '28-07-2018',
          '29-07-2018',
          '30-07-2018',
          '31-07-2018',
        ],
      },
      legend: {
        show: false,
      },

      tooltip: {
        theme: 'dark',
        marker: {
          show: true,
        },
        x: {
          show: true,
        },
      },
    };
  }

  private smallChart2() {
    this.smallChart2Options = {
      series: [
        {
          name: 'Operations',
          data: [5, 6, 8, 5, 7, 5, 6, 4, 3, 4, 7, 4, 9, 6, 5, 6],
        },
      ],
      chart: {
        height: 70,
        type: 'area',
        toolbar: {
          show: false,
        },
        sparkline: {
          enabled: true,
        },
        foreColor: '#9aa0ac',
      },
      colors: ['#FD7E14'],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
      },
      xaxis: {
        categories: [
          '16-07-2018',
          '17-07-2018',
          '18-07-2018',
          '19-07-2018',
          '20-07-2018',
          '21-07-2018',
          '22-07-2018',
          '23-07-2018',
          '24-07-2018',
          '25-07-2018',
          '26-07-2018',
          '27-07-2018',
          '28-07-2018',
          '29-07-2018',
          '30-07-2018',
          '31-07-2018',
        ],
      },
      legend: {
        show: false,
      },

      tooltip: {
        theme: 'dark',
        marker: {
          show: true,
        },
        x: {
          show: true,
        },
      },
    };
  }

  private smallChart3() {
    this.smallChart3Options = {
      series: [
        {
          name: 'New Patients',
          data: [
            50, 61, 80, 50, 72, 52, 60, 41, 30, 45, 70, 40, 93, 63, 50, 62,
          ],
        },
      ],
      chart: {
        height: 70,
        type: 'area',
        toolbar: {
          show: false,
        },
        sparkline: {
          enabled: true,
        },
        foreColor: '#9aa0ac',
      },
      colors: ['#4CAF50'],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
      },
      xaxis: {
        categories: [
          '16-07-2018',
          '17-07-2018',
          '18-07-2018',
          '19-07-2018',
          '20-07-2018',
          '21-07-2018',
          '22-07-2018',
          '23-07-2018',
          '24-07-2018',
          '25-07-2018',
          '26-07-2018',
          '27-07-2018',
          '28-07-2018',
          '29-07-2018',
          '30-07-2018',
          '31-07-2018',
        ],
      },
      legend: {
        show: false,
      },

      tooltip: {
        theme: 'dark',
        marker: {
          show: true,
        },
        x: {
          show: true,
        },
      },
    };
  }

  private smallChart4() {
    this.smallChart4Options = {
      series: [
        {
          name: 'Earning',
          data: [
            150, 161, 180, 150, 172, 152, 160, 141, 130, 145, 170, 140, 193,
            163, 150, 162,
          ],
        },
      ],
      chart: {
        height: 70,
        type: 'area',
        toolbar: {
          show: false,
        },
        sparkline: {
          enabled: true,
        },
        foreColor: '#9aa0ac',
      },
      colors: ['#2196F3'],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
      },
      xaxis: {
        categories: [
          '16-07-2018',
          '17-07-2018',
          '18-07-2018',
          '19-07-2018',
          '20-07-2018',
          '21-07-2018',
          '22-07-2018',
          '23-07-2018',
          '24-07-2018',
          '25-07-2018',
          '26-07-2018',
          '27-07-2018',
          '28-07-2018',
          '29-07-2018',
          '30-07-2018',
          '31-07-2018',
        ],
      },
      legend: {
        show: false,
      },

      tooltip: {
        theme: 'dark',
        marker: {
          show: true,
        },
        x: {
          show: true,
        },
      },
    };
  }

  private chart2() {
    this.barChartOptions = {
      series: [
        {
          name: 'Colds and Flu',
          data: [44, 55, 41, 67, 22, 43],
        },
        {
          name: 'Headaches',
          data: [13, 23, 20, 8, 13, 27],
        },
        {
          name: 'Malaria',
          data: [11, 17, 15, 15, 21, 14],
        },
        {
          name: 'Typhoid',
          data: [21, 7, 25, 13, 22, 8],
        },
      ],
      chart: {
        type: 'bar',
        height: 350,
        foreColor: '#9aa0ac',
        stacked: true,
        toolbar: {
          show: false,
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: 'bottom',
              offsetX: -10,
              offsetY: 0,
            },
          },
        },
      ],
      grid: {
        show: true,
        borderColor: '#9aa0ac',
        strokeDashArray: 1,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '30%',
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        type: 'category',
        categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      },
      legend: {
        show: false,
      },
      fill: {
        opacity: 0.8,
        colors: ['#01B8AA', '#374649', '#FD625E', '#F2C80F'],
      },
      tooltip: {
        theme: 'dark',
        marker: {
          show: true,
        },
        x: {
          show: true,
        },
      },
    };
  }
}
