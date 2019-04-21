import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'market-watch';
  tempValue: any = [];
  pairRemove: any = [];

  chartList = [
    'AUDUSD',
    'EURUSD',
    'GBPUSD',
    'USDCAD',
    'USDJPY',
    'USDCHF',
    'AUDCAD',
    'AUDCHF',
    'AUDJPY',
    'AUDNZD',
    'CADCHF',
    'CHFJPY',
    'EURAUD',
    'EURCAD',
    'EURGBP',
    'EURJPY',
    'EURNZD',
    'EURCHF',
    'GBPAUD',
    'GBPCAD',
    'GBPCHF',
    'GBPJPY',
    'GBPNZD',
    'NZDCAD',
    'NZDCHF',
    'NZDJPY',
    'NZDUSD',
    'XAUUSD'
  ];

  selectChart = [
    'AUD', 'CAD', 'CHF', 'EUR', 'GBP', 'JPY', 'NZD', 'USD', 'XAU'
  ];

  onChange(value) {

    if (value == "selectAll"){
      console.log('DO nothing');
    } else {
      this.pairRemove.push(value);
    }

    
    // console.log(value);
    // console.log(this.pairRemove);

    for (var i in this.chartList) {
      //check string dalam selectchart exist dalam chartlist
      if (this.chartList[i].indexOf(value) >= 0) {
        //tempvalue pegang value yang ada persamaan string dalam selectchart == chartlist
        this.tempValue.push(this.chartList[i], 'line 54');
      }
    }
    this.chartList = this.chartList.filter(item =>
      !this.tempValue.includes(item)
    )
    // console.log(this.tempValue, 'line 60');
    // console.log(this.chartList, 'line 61');
  }

  resetpair(){
    this.chartList = [
      'AUDUSD',
      'EURUSD',
      'GBPUSD',
      'USDCAD',
      'USDJPY',
      'USDCHF',
      'AUDCAD',
      'AUDCHF',
      'AUDJPY',
      'AUDNZD',
      'CADCHF',
      'CHFJPY',
      'EURAUD',
      'EURCAD',
      'EURGBP',
      'EURJPY',
      'EURNZD',
      'EURCHF',
      'GBPAUD',
      'GBPCAD',
      'GBPCHF',
      'GBPJPY',
      'GBPNZD',
      'NZDCAD',
      'NZDCHF',
      'NZDJPY',
      'NZDUSD',
      'XAUUSD'
    ];
  
    this.selectChart = [
      'AUD', 'CAD', 'CHF', 'EUR', 'GBP', 'JPY', 'NZD', 'USD', 'XAU'
    ];

    this.tempValue = [];


    this.pairRemove= [];
  }

}
