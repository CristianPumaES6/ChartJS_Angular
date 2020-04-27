import { Component, OnInit } from '@angular/core';

// 1 importar libreria CharJS
import * as Chart from 'chart.js'

@Component({
  selector: 'app-report2',
  templateUrl: './report2.component.html',
  styleUrls: ['./report2.component.scss']
})
export class Report2Component implements OnInit {

  // Data con la cual jugaremos.
  public dataChartPoint: Chart.ChartPoint[] = [
    { x: "Red", y: 20 },
    { x: "Blue", y: 25 },
    { x: "Yellow", y: 28 },
  ];

  // Configuracion del elemento CharJS
  public chartConfiguration: Chart.ChartConfiguration;

  // Elemento chart
  public chart: Chart;

  constructor() { }

  // Solo se ejecuta una vez al iniciar el componente
  ngOnInit() {

    // Iniciamos la linea.
    this.GenetareLine()
  }



  // Genera linea en el elemento canvas.
  public GenetareLine(): boolean {

    // Obtenemos el elemento del DOM para luego instanciar el elemento Chart
    let canva: any = document.getElementById('chartData');
    let ctx = canva.getContext('2d');

    // Configuracion 
    this.chartConfiguration = {
      type: 'line',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: 'Reporte 2',
          // Data point
          data: this.dataChartPoint,

          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          // Corlor del borde
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          // Tamaño del borde
          borderWidth: 6
        }]
      },
      options: {
        legend: {
          display: false
        },
        // Habilitamos la opcion para que sea responsive
        maintainAspectRatio: false,
        tooltips: {
          //Establece qué elementos aparecen en la información sobre herramientas. 
          mode: 'nearest',
          // si es verdadero, el modo de desplazamiento solo se aplica cuando la posición del mouse se cruza con un elemento del gráfico.
          intersect: false,


          callbacks: {
            title: function (tooltipItem, data) {
              console.log('---------------');
              console.log(tooltipItem)
              console.log(data)
              console.log('---------------');
              return 'Title';
            },
            label: function (tooltipItem, data) {
              return 'Label';
            },
            labelColor: function (tooltipItem, data) {
              return {
                borderColor: 'red',
                backgroundColor: 'green',
              }
            },
            afterLabel: function (tooltipItem, data) {
              return 'AfterLabel';
            },
            beforeFooter: function (tooltipItem, data) {
              return ['beforeFooter 1', 'beforeFooter 2'];
            },
            footer: function (tooltipItem, data) {
              return ['Footer 1', 'Footer 2'];
            },
          }

        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,    // Include a dollar sign in the ticks
              callback: function (value, index, values) {
                console.log("-------SCALES TICK-------");
                console.log(values);
                console.log("-------END SCALES TICK-------");

                return '$' + value;
              }
            }
          }]
        },

      }
    }

    // Creamos un elemento Chart.
    this.chart = new Chart(ctx, this.chartConfiguration);

    return false;
  }


}
