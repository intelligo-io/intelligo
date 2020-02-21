"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GaugeSegment {
    constructor(options = {}) {
        this.radius = options.radius || 100;
        this.goal = options.goal || 100;
        this.value = options.value;
        this.color = options.color;
        this.bgColor = options.bgColor || "transparent";
        this.borderWidth = options.borderWidth || 100;
    }
    get computedRadius() {
        return this.radius - this.borderWidth / 2;
    }
    get strokeProgress() {
        return `${2 * Math.PI * this.computedRadius * this.value / this.goal} ${2 *
            Math.PI *
            this.computedRadius}`;
    }
    get strokeEmptyProgress() {
        return `0 ${2 * Math.PI * this.computedRadius}`;
    }
}
exports.GaugeSegment = GaugeSegment;
//# sourceMappingURL=gauge-segment.js.map