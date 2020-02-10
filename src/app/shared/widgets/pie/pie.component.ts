import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent implements OnInit {

  Highcharts = Highcharts;
  chartOptions: {};

  @Input() data: [];
  constructor() { }

  ngOnInit() {
    this.chartOptions = {
      chart: {
          plotBackgroundColor: null,
          plotBorderWIdth: null,
          plotSHadow: false,
          type: 'pie'
      },
      title: {
          text: 'Countries compared by population and total area.'
      },
      tooltip: {
          pointFormat: '{series.name}: <b> {point.percentage:.1f}% </b>'
      },
      exporting: {
        enabled: true,
      },
      credits: {
        enabled: false,
      },
      series: [{
        name: 'Brands',
        colorByPoint: true,
        data: this.data,
    }]
  };

    HC_exporting(Highcharts);

    setTimeout( () => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

}
