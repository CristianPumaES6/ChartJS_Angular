import { Component, OnInit, Input } from '@angular/core';

// 1 importar libreria CharJS
import * as Chart from 'chart.js'

@Component({
  selector: 'app-reporte1',
  templateUrl: './reporte1.component.html',
  styleUrls: ['./reporte1.component.scss']
})
export class Reporte1Component implements OnInit {

  // Data con la cual jugaremos.
  public dataChartPoint: Chart.ChartPoint[] = [
    { x: "January", y: 20 },
    { x: "February", y: 25 },
    { x: "March", y: 28 },
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
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 6
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    }

    // Creamos un elemento Chart.
    this.chart = new Chart(ctx, this.chartConfiguration);

    return false;
  }



}
