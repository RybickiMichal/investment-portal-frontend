import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as CanvasJS from './canvasjs.min';
import { CompanyDataService } from '../service/data/company-data.service';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  constructor(private router: Router,
    private route: ActivatedRoute,
    private companyDataService: CompanyDataService) { }
  symbol: string
  list: string
  chart: any
  dataPoints: Array<{ x: Date, y: number }> = []
  fullDataPoints: Array<{ x: Date, y: number[] }> = []
  activeChart: string = "Line Chart"
  activeTime: string = "Month"
  fullCompanyData: Array<{ description: string, value: string }> = []

  ngOnInit() {
    this.symbol = this.route.snapshot.params['symbol']
    this.list = this.route.snapshot.params['list']
    this.getChart()
    this.getFullCompanyData()
  }

  backToThePreviousList() {
    this.router.navigate([this.list])
  }

  getChart() {
    if (this.activeChart == "Line Chart") {
      if (this.activeTime == "Seven Days") {
        this.getHQLastSevenDays()
      } else if (this.activeTime == "Two Weeks") {
        this.getHQLastTwoWeeks()
      } else if (this.activeTime == "Month") {
        this.getHQLastMonth()
      } else if (this.activeTime == "Two Months") {
        this.getHQLastTwoMonths()
      } else if (this.activeTime == "Half Year") {
        this.getHQLastHalfYear()
      } else if (this.activeTime == "Year") {
        this.getHQLastYear()
      } else if (this.activeTime == "Two Years") {
        this.getHQLastTwoYears()
      } else if (this.activeTime == "Five Years") {
        this.getHQLastFiveYears()
      } else if (this.activeTime == "Ten Years") {
        this.getHQLastTenYears()
      } else if (this.activeTime == "Twenty Years") {
        this.getHQLastTwentyYears()
      }
    }
    else if (this.activeChart == "Candle Chart" || this.activeChart == "Bar Chart") {
      if (this.activeTime == "Seven Days") {
        this.getFullHQLastSevenDays()
      } else if (this.activeTime == "Two Weeks") {
        this.getFullHQLastTwoWeeks()
      } else if (this.activeTime == "Month") {
        this.getFullHQLastMonth()
      } else if (this.activeTime == "Two Months") {
        this.getFullHQLastTwoMonths()
      } else if (this.activeTime == "Half Year") {
        this.getFullHQLastHalfYear()
      } else if (this.activeTime == "Year") {
        this.getFullHQLastYear()
      } else if (this.activeTime == "Two Years") {
        this.getFullHQLastTwoYears()
      } else if (this.activeTime == "Five Years") {
        this.getFullHQLastFiveYears()
      } else if (this.activeTime == "Ten Years") {
        this.getFullHQLastTenYears()
      } else if (this.activeTime == "Twenty Years") {
        this.getFullHQLastTwentyYears()
      }
    }
  }

  setActiveChart(chart: string) {
    this.activeChart = chart
    this.getChart()
  }

  setActiveTime(time: string) {
    this.activeTime = time
    this.getChart()
  }

  getFullCompanyData() {
    this.fullCompanyData.length = 0
    this.companyDataService.retrieveFullCompanyData(this.symbol).subscribe(
      response => {
        for (let key in response) {
          let value = response[key];
          this.fullCompanyData.push({ description: key, value: value })
        }
      }
    );
  }

  getHQLastSevenDays() {
    this.dataPoints.length = 0
    this.companyDataService.retrieveHQLastSevenDays(this.symbol).subscribe(
      response => {
        this.handleHQData(response)
      }
    );
  }

  getHQLastTwoWeeks() {
    this.dataPoints.length = 0
    this.companyDataService.retrieveHQLastTwoWeeks(this.symbol).subscribe(
      response => {
        this.handleHQData(response)
      }
    );
  }

  getHQLastMonth() {
    this.dataPoints.length = 0
    this.companyDataService.retrieveHQLastMonth(this.symbol).subscribe(
      response => {
        this.handleHQData(response)
      }
    );
  }

  getHQLastTwoMonths() {
    this.dataPoints.length = 0
    this.companyDataService.retrieveHQLastTwoMonths(this.symbol).subscribe(
      response => {
        this.handleHQData(response)
      }
    );
  }

  getHQLastHalfYear() {
    this.dataPoints.length = 0
    this.companyDataService.retrieveHQLastHalfYear(this.symbol).subscribe(
      response => {
        this.handleHQData(response)
      }
    );
  }

  getHQLastYear() {
    this.dataPoints.length = 0
    this.companyDataService.retrieveHQLastYear(this.symbol).subscribe(
      response => {
        this.handleHQData(response)
      }
    );
  }

  getHQLastTwoYears() {
    this.dataPoints.length = 0
    this.companyDataService.retrieveHQLastTwoYears(this.symbol).subscribe(
      response => {
        this.handleHQData(response)
      }
    );
  }

  getHQLastFiveYears() {
    this.dataPoints.length = 0
    this.companyDataService.retrieveHQLastFiveYears(this.symbol).subscribe(
      response => {
        this.handleHQData(response)
      }
    );
  }

  getHQLastTenYears() {
    this.dataPoints.length = 0
    this.companyDataService.retrieveHQLastTenYears(this.symbol).subscribe(
      response => {
        this.handleHQData(response)
      }
    );
  }

  getHQLastTwentyYears() {
    this.dataPoints.length = 0
    this.companyDataService.retrieveHQLastTwentyYears(this.symbol).subscribe(
      response => {
        this.handleHQData(response)
      }
    );
  }

  handleHQData(response: Object) {
    for (let key in response) {
      let value = response[key];
      this.dataPoints.push({ x: new Date(key), y: value })
    }
    this.dataPoints.sort((a, b) => a.x.getTime() - b.x.getTime())
    this.showLineChart()
  }

  //Candle and Bar Charts

  getFullHQLastSevenDays() {
    this.fullDataPoints.length = 0
    this.companyDataService.retrieveFullHQLastSevenDays(this.symbol).subscribe(
      response => {
        this.handleFullHQData(response)
      }
    );
  }

  getFullHQLastTwoWeeks() {
    this.fullDataPoints.length = 0
    this.companyDataService.retrieveFullHQLastTwoWeeks(this.symbol).subscribe(
      response => {
        this.handleFullHQData(response)
      }
    );
  }

  getFullHQLastMonth() {
    this.fullDataPoints.length = 0
    this.companyDataService.retrieveFullHQLastMonth(this.symbol).subscribe(
      response => {
        this.handleFullHQData(response)
      }
    );
  }

  getFullHQLastTwoMonths() {
    this.fullDataPoints.length = 0
    this.companyDataService.retrieveFullHQLastTwoMonths(this.symbol).subscribe(
      response => {
        this.handleFullHQData(response)
      }
    );
  }

  getFullHQLastHalfYear() {
    this.fullDataPoints.length = 0
    this.companyDataService.retrieveFullHQLastHalfYear(this.symbol).subscribe(
      response => {
        this.handleFullHQData(response)
      }
    );
  }

  getFullHQLastYear() {
    this.fullDataPoints.length = 0
    this.companyDataService.retrieveFullHQLastYear(this.symbol).subscribe(
      response => {
        this.handleFullHQData(response)
      }
    );
  }

  getFullHQLastTwoYears() {
    this.fullDataPoints.length = 0
    this.companyDataService.retrieveFullHQLastTwoYears(this.symbol).subscribe(
      response => {
        this.handleFullHQData(response)
      }
    );
  }

  getFullHQLastFiveYears() {
    this.fullDataPoints.length = 0
    this.companyDataService.retrieveFullHQLastFiveYears(this.symbol).subscribe(
      response => {
        this.handleFullHQData(response)
      }
    );
  }

  getFullHQLastTenYears() {
    this.fullDataPoints.length = 0
    this.companyDataService.retrieveFullHQLastTenYears(this.symbol).subscribe(
      response => {
        this.handleFullHQData(response)
      }
    );
  }

  getFullHQLastTwentyYears() {
    this.fullDataPoints.length = 0
    this.companyDataService.retrieveFullHQLastTwoYears(this.symbol).subscribe(
      response => {
        this.handleFullHQData(response)
      }
    );
  }

  handleFullHQData(response: Object) {
    for (let key in response) {
      let value = response[key];
      let historicalQuotes: number[] = []
      for (let y = 0; y < 4; y++) {
        if (y == 0) {
          historicalQuotes.push(value[y])
        } else if (y == 1) {
          historicalQuotes.push(value[y])
        } else if (y == 2) {
          historicalQuotes.push(value[y])
        } else if (y == 3) {
          historicalQuotes.push(value[y])
        }
      }
      this.fullDataPoints.push({ x: new Date(key), y: [historicalQuotes[0], historicalQuotes[1], historicalQuotes[2], historicalQuotes[3]] })
    }
    this.fullDataPoints.sort((a, b) => a.x.getTime() - b.x.getTime())
    if (this.activeChart == "Candle Chart") {
      this.showCandleChart()
    }
    else if (this.activeChart == "Bar Chart") {
      this.showBarChart()
    }
  }

  showLineChart() {
    this.chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: this.symbol + " Line Chart"
      },
      axisX: {
        valueFormatString: "DD MM YYYY",
        crosshair: {
          enabled: true,
          snapToDataPoint: true
        }
      },
      axisY: {
        title: "Closing Price",
        includeZero: false,
        valueFormatString: "$##0.00",
        crosshair: {
          enabled: true,
          snapToDataPoint: true,
          labelFormatter: function (e) {
            return "$" + CanvasJS.formatNumber(e.value, "##0.00");
          }
        }
      },
      data: [{
        type: "area",
        xValueFormatString: "DD MM YYYY",
        yValueFormatString: "$##0.00",
        dataPoints: this.dataPoints
      }]
    });
    this.chart.render();
  }

  showCandleChart() {
    this.chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: this.symbol + " Candle Chart"
      },
      axisX: {
        interval: 1,
        valueFormatString: "DD MM YYYY"
      },
      axisY: {
        includeZero: false,
        prefix: "$",
        title: "Price"
      },
      toolTip: {
        content: "Date: {x}<br /><strong>Price:</strong><br />Open: {y[0]}, Close: {y[3]}<br />High: {y[1]}, Low: {y[2]}"
      },
      data: [{
        type: "candlestick",
        yValueFormatString: "$##0.00",
        dataPoints: this.fullDataPoints
      }]
    });
    this.chart.render();
  }

  showBarChart() {
    this.chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      exportEnabled: true,
      exportFileName: "Tesla-StockChart",
      title: {
        text: this.symbol + " Bar Chart"
      },
      axisX: {
        interval: 1,
        valueFormatString: "DD MM YYYY"
      },
      axisY: {
        includeZero: false,
        prefix: "$",
        title: "Price"
      },
      data: [{
        type: "ohlc",
        yValueFormatString: "$###0.00",
        xValueFormatString: "DD MM YYYY",
        dataPoints: this.fullDataPoints
      }]
    });
    this.chart.render();
  }
}
