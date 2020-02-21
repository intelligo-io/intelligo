"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let ng2BarLineChartDemoComponentAnalytics = class ng2BarLineChartDemoComponentAnalytics {
    constructor() {
        this.lastDataIndex = 0;
        this.changedSecond = true;
        this.totalCount = 1;
        this.pageCount = 1;
        this.changed = true;
        this.chartData = [];
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true,
            legendOptions: {
                align: "center",
            },
            legend: {
                position: "top",
                labels: {
                    align: "center",
                    fontSize: 16
                }
            },
            scales: {
                xAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'NODE NAME',
                            fontSize: 15
                        },
                        ticks: {
                            minRotation: 0,
                            maxRoataion: 0,
                            autoSkip: false,
                        },
                        gridLines: {
                            display: false,
                            color: "rgba(0, 0, 0, 1)",
                        },
                    }],
                showAllToolTips: true,
                yAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'COUNT',
                            fontSize: 15
                        },
                        gridLines: {
                            display: false,
                            color: "rgba(0, 0, 0, 1)",
                        },
                        ticks: {
                            beginAtZero: true,
                            Callback: function (label, index, labels) {
                                if (Math.floor(label) === label) {
                                    return label;
                                }
                            },
                        }
                    }]
            }
        };
        this.barChartLabels = [];
        this.chartLabel = [];
        this.barChartType = "bar";
        this.barChartLegend = true;
        this.barChartData = [];
        this.barChartColors = [
            {
                backgroundColor: "#000000",
                borderColor: "#000000",
                pointBackgroundColor: "#000000",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "#000000"
            }
        ];
    }
    ngOnInit() {
    }
    ngOnChanges() {
        if (this.changed) {
            this.changed = false;
        }
        else {
            this.changed = true;
        }
        this.chartLabel = [];
        this.pageCount = 1;
        this.ngOnDestroy();
        this.lastDataIndex = 0;
        this.chartData = this.barChartData;
        this.chartLabel = this.barChartLabels.slice();
        this.totalCount = this.chartData[0].data.length;
        this.barChartLabels.length = 0;
        if (this.chartData[0].data.length <= 8) {
            this.totalPageCount = 1;
        }
        else {
            let len = this.chartData[0].data.length - 8;
            if (len % 4 == 0) {
                this.totalPageCount = len / 4 + 1;
            }
            else {
                this.totalPageCount = Math.floor(len / 4) + 2;
            }
        }
        this.barChartData = this.dataReturn(this.lastDataIndex);
        this.barChartLabels.length = 0;
        this.labelReturn(this.lastDataIndex);
        this.lastDataIndex = Math.min(this.totalCount, 7);
    }
    ngOnDestroy() {
    }
    dataReturn(lastDataIndex) {
        let inc = 0;
        if (lastDataIndex == 0) {
            inc = 7;
        }
        else {
            inc = Math.min(this.totalCount - lastDataIndex - 1, 4);
        }
        let barData = [];
        barData = [
            {
                data: (this.chartData[0].data).slice(lastDataIndex + inc - 7, lastDataIndex + inc + 1),
                label: this.chartData[0].label,
                type: "line",
                fill: false,
                pointRadius: 5,
                pointHoverRadius: 8,
                borderWidth: 1.5
            },
            {
                data: (this.chartData[1].data).slice(lastDataIndex + inc - 7, lastDataIndex + inc + 1),
                label: this.chartData[1].label,
                backgroundColor: "#ffb900",
            }
        ];
        return barData;
    }
    labelReturn(lastLabelIndex) {
        let inc = 0;
        if (lastLabelIndex == 0) {
            inc = 7;
        }
        else {
            inc = Math.min(this.totalCount - lastLabelIndex - 1, 4);
        }
        let barData = [];
        this.barChartLabels.length = 0;
        barData = this.chartLabel.slice(lastLabelIndex + inc - 7, lastLabelIndex + inc + 1);
        for (let i = 0; i < barData.length; i++) {
            this.barChartLabels.push(barData[i]);
        }
        return barData;
    }
    incGraph() {
        if (this.pageCount < this.totalPageCount) {
            this.pageCount += 1;
            this.barChartData = this.dataReturn(this.lastDataIndex);
            this.labelReturn(this.lastDataIndex);
            this.lastDataIndex = this.lastDataIndex + 4;
            console.log(this.lastDataIndex);
        }
    }
    decGraph() {
        if (this.pageCount > 1) {
            this.barChartData = this.dataReturn(this.lastDataIndex - 8);
            this.labelReturn(this.lastDataIndex - 8);
            this.pageCount -= 1;
            this.lastDataIndex -= 4;
            console.log(this.lastDataIndex);
        }
    }
};
ng2BarLineChartDemoComponentAnalytics = __decorate([
    core_1.Component({
        selector: "ng2-charts-barline-analytics",
        template: `
	<ul class="actions icons top-right">
	<li>
		<a href="javascript:void(0)" (click)="decGraph()">
			<i class="zmdi zmdi-long-arrow-left"></i>
			
		</a>
	</li>
	<li>
		<a href="javascript:void(0)" (click)="incGraph()">
			<i class="zmdi zmdi-long-arrow-right"></i>
		</a>
	</li>
	</ul>
		<p style="float:right;padding-right:12px">{{pageCount}} / {{totalPageCount}}</p>
		<div *ngIf="changed" style="display: block;">
			<canvas baseChart #chart width="800" height="340" class="chart"
			[datasets]="barChartData"
			[labels]="barChartLabels"
			[options]="barChartOptions"
			[colors]="barChartColors"
			[legend]="barChartLegend"
			[chartType]="barChartType"
			(chartHover)="chartHovered($event)"
			(chartClick)="chartClicked($event)"
			></canvas>
	</div>
		<div *ngIf="!changed" style="display: block;">
		<canvas baseChart #chart width="900" height="340" class="chart"
		[datasets]="barChartData"
		[labels]="barChartLabels"
		[options]="barChartOptions"
		[colors]="barChartColors"
		[legend]="barChartLegend"
		[chartType]="barChartType"
		></canvas>
	</div>
	`,
        inputs: ['barChartData', 'barChartLabels']
    }),
    __metadata("design:paramtypes", [])
], ng2BarLineChartDemoComponentAnalytics);
exports.ng2BarLineChartDemoComponentAnalytics = ng2BarLineChartDemoComponentAnalytics;
//# sourceMappingURL=ng2-charts-barlineanalytics.component.js.map