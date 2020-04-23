import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  // Data
  public data = [
    { x: "January", y: 20 },
    { x: "February", y: 25 },
    { x: "March", y: 28 },
  ];

  // Configuracion del elemento CharJS
  public config: any;
  // Elemento chart
  public chartLine: any;

  // Solo se ejecuta una vez al iniciar el componente
  ngOnInit() {

    this.GenetareLineIFO();
  }



  // Generar linea en los canvas.
  public GenetareLineIFO(): boolean {

    this.config = {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          label: 'ROB IFO',
          backgroundColor: "blue",
          borderColor: "blue",
          data: this.data,
          fill: false,
        }]
      },
      options: {
        responsive: true,
        title: {
          display: false,
          text: 'Consumo'
        },
        tooltips: {
          mode: 'index',
          intersect: false,
        },
        hover: {
          mode: 'nearest',
          intersect: true
        },
        scales: {
          x: {
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Month'
            }
          },
          y: {
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Value'
            },
            min: 0,
            max: 100,
            ticks: {
              // forces step size to be 5 units
              stepSize: 5
            }
          }
        }
      }
    };



    let canva: any = document.getElementById('chartData');
    let ctx = canva.getContext('2d');

    this.chartLine = new Chart(ctx, this.config);


    return false;
  }


}
