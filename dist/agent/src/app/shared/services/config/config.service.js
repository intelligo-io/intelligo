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
let ConfigService = class ConfigService {
    constructor() {
        this.app = {
            name: "ANA Chat Panel",
            webSocketEndPoint: "http://anachatagents-dev.2bm4ipugmm.ap-south-1.elasticbeanstalk.com/chatagents",
            apiGatewayEndPoint: "http://chat-dev.nowfloatsdev.com",
        };
        this.appLayout = {
            isApp_Boxed: false,
            isApp_SidebarLeftCollapsed: false,
            isApp_MobileSidebarLeftOpen: false,
            isApp_SidebarRightOpen: false,
            isApp_BackdropVisible: false
        };
        this.breakpoint = {
            desktopLG: 1280,
            desktop: 992,
            tablet: 768,
            mobile: 576
        };
    }
    getUserProfileFromLoginDetails(loginDetails) {
        return {
            user: loginDetails.name,
            userEmail: loginDetails.name,
            userId: loginDetails.userId,
            businessId: loginDetails.businessId,
            accessToken: loginDetails.accessToken,
            loginData: loginDetails
        };
    }
};
ConfigService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], ConfigService);
exports.ConfigService = ConfigService;
//# sourceMappingURL=config.service.js.map