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
const material_1 = require("@angular/material");
const info_dialog_component_1 = require("../components/info-dialog/info-dialog.component");
let InfoDialogService = class InfoDialogService {
    constructor(dialog) {
        this.dialog = dialog;
    }
    alert(title, message, callback, primaryButton, secondaryButton) {
        let data = {
            dialogType: info_dialog_component_1.InfoDialogType.Alert,
            message: message,
            title: title,
            primaryButton: primaryButton,
            secondaryButton: secondaryButton
        };
        let d = this.dialog.open(info_dialog_component_1.InfoDialogComponent, {
            width: 'auto',
            data: data
        });
        if (callback)
            d.afterClosed().subscribe(x => {
                if (callback)
                    callback();
            });
    }
    prompt(title, message, callback, defaultText, primaryButton, secondaryButton) {
        let data = {
            dialogType: info_dialog_component_1.InfoDialogType.Prompt,
            message: message,
            title: title,
            defaultInputText: defaultText,
            primaryButton: primaryButton,
            secondaryButton: secondaryButton
        };
        let d = this.dialog.open(info_dialog_component_1.InfoDialogComponent, {
            width: 'auto',
            data: data
        });
        d.afterClosed().subscribe(x => {
            callback(x);
        });
    }
    confirm(title, message, callback, primaryButton, secondaryButton) {
        let data = {
            dialogType: info_dialog_component_1.InfoDialogType.Confirm,
            message: message,
            title: title,
            primaryButton: primaryButton,
            secondaryButton: secondaryButton
        };
        let d = this.dialog.open(info_dialog_component_1.InfoDialogComponent, {
            width: 'auto',
            data: data
        });
        d.afterClosed().subscribe(x => {
            callback(x);
        });
    }
};
InfoDialogService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [material_1.MatDialog])
], InfoDialogService);
exports.InfoDialogService = InfoDialogService;
//# sourceMappingURL=info-dialog.service.js.map