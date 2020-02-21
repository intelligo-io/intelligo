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
const data_1 = require("./data");
let NgxChartsBarVerticalDemoComponent = class NgxChartsBarVerticalDemoComponent {
    constructor() {
        this.view = [700, 400];
        this.showXAxis = true;
        this.showYAxis = true;
        this.showLegend = true;
        this.showXAxisLabel = true;
        this.xAxisLabel = "Country";
        this.showYAxisLabel = true;
        this.yAxisLabel = "Population";
        this.colorScheme = {
            domain: ["#28BEBD", "#5867C3", "#42A5F5", "#516073"]
        };
        Object.assign(this, { single: data_1.single });
    }
    onSelect(event) {
        console.log(event);
    }
};
NgxChartsBarVerticalDemoComponent = __decorate([
    core_1.Component({
        selector: "ngx-bar-vertical",
        template: `
    <ngx-charts-bar-vertical
      [view]="view"
      [scheme]="colorScheme"
      [results]="single"
      [xAxis]="showXAxis"
      [yAxis]="showYAxis"
      [legend]="showLegend"
      [showXAxisLabel]="showXAxisLabel"
      [showYAxisLabel]="showYAxisLabel"
      [xAxisLabel]="xAxisLabel"
      [yAxisLabel]="yAxisLabel"
      (select)="onSelect($event)">
    </ngx-charts-bar-vertical>
  `
    }),
    __metadata("design:paramtypes", [])
], NgxChartsBarVerticalDemoComponent);
exports.NgxChartsBarVerticalDemoComponent = NgxChartsBarVerticalDemoComponent;
//# sourceMappingURL=ngx-vertical-bar-chart.component.js.map