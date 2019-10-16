(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/chat-thread/chat-thread.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/chat-thread/chat-thread.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"root\" [ngClass]=\"{'ana-min': isMin}\">\n    <div class=\"content\">\n        <div class=\"ana-title\">\n            <div class=\"ana-logo\">\n                <img [src]=\"settings.brandingConfig.logoUrl\" class=\"ana-full\" (click)=\"settings.brandingConfig.logoClickUrl?openWindow(settings.brandingConfig.logoClickUrl):null\" [class.clickable]=\"settings.brandingConfig.logoClickUrl\" />\n            </div>\n            <div class=\"ana-content\">\n                <div class=\"title\">{{settings.brandingConfig.agentName}}</div>\n                <div class=\"subtitle\">\n                    <span *ngIf=\"settings.brandingConfig.agentDesc\">\n                        <span *ngIf=\"connectionStatusMessage()!='Available'\">\n                            {{settings.brandingConfig.agentDesc}} - <i *ngIf=\"connectionStatusMessage()=='Available'\" [title]=\"connectionStatusMessage()\" class=\"ana-online-dot\"></i> {{ connectionStatusMessage()}}\n                        </span>\n                        <span *ngIf=\"connectionStatusMessage()=='Available'\">\n                            {{settings.brandingConfig.agentDesc}} <i [title]=\"connectionStatusMessage()\" class=\"ana-online-dot\"></i>\n                        </span>\n                    </span>\n                    <span *ngIf=\"!settings.brandingConfig.agentDesc\">\n                        <i *ngIf=\"connectionStatusMessage()=='Available'\" [title]=\"connectionStatusMessage()\" class=\"ana-online-dot\"></i>{{connectionStatusMessage()}}\n                    </span>\n                </div>\n            </div>\n            <div class=\"ana-actions\">\n                <div class=\"ana-action\" title=\"Mute\" (click)=\"isMute=!isMute\" *ngIf=\"settings.appConfig.msgSounds\">\n                    <svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\" *ngIf=\"isMute\">\n                        <path d=\"M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z\" />\n                    </svg>\n                    <svg viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\" *ngIf=\"!isMute\">\n                        <path d=\"M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z\" />\n                    </svg>\n                </div>\n                <div class=\"ana-action refresh\" title=\"Start a fresh chat\" (click)=\"getStarted(true, true)\" [hidden]=\"!settings.appConfig.allowFlowReset\">\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 15.279 15.279\">\n                        <path d=\"M7.599 1.918v-1.8c0-.1.125-.154.209-.091l3.7 2.719a.114.114 0 0 1 0 .184l-3.7 2.719c-.084.062-.21.006-.21-.09V3.76A4.843 4.843 0 0 0 2.847 8.93c.159 2.4 2.115 4.347 4.515 4.5a4.849 4.849 0 0 0 5.094-4.06.92.92 0 0 1 .912-.771c.56 0 .994.497.907 1.047-.544 3.428-3.703 6-7.366 5.59-3.062-.343-5.522-2.793-5.869-5.856C.58 5.374 3.692 1.961 7.6 1.918z\" />\n                    </svg>\n                </div>\n            </div>\n            <div class=\"chat-history-loading\" [hidden]=\"!fetchingHistory\">\n                <mat-progress-bar mode=\"indeterminate\" color=\"primary\"></mat-progress-bar>\n            </div>\n        </div>\n        <div class=\"chat-thread scrollbar\" #chatThreadView (scroll)=\"chatThreadOnScroll($event)\">\n            <div class=\"chat-message\" *ngFor=\"let msg of chatThread.messages\">\n                <div [ngSwitch]=\"msg.messageData.type\">\n                    <ng-container *ngSwitchCase=\"MH.MessageType.SIMPLE\">\n                        <div class=\"chat-message-item-container\">\n                            <div class=\"chat-message-item\" [ngClass]=\"{'media': msg.getMessageContentType()==MH.MessageContentType.Media, 'text':msg.getMessageContentType()==MH.MessageContentType.Text, 'typing':msg.getMessageContentType()==MH.MessageContentType.Typing, 'incoming':msg.direction==MH.Direction.Incoming, 'outgoing':msg.direction==MH.Direction.Outgoing, 'chat-message-last': isLastInMessageGroup(msg)}\">\n                                <div [ngSwitch]=\"msg.getMessageContentType()\">\n                                    <ng-container *ngSwitchCase=\"MH.MessageContentType.Text\">\n                                        <span class=\"chat-text\" *ngIf=\"!settings.appConfig.htmlMessages\">{{msg.messageData.content.text}}</span>\n                                        <span class=\"chat-text\" *ngIf=\"settings.appConfig.htmlMessages\" [innerHTML]=\"msg.messageData.content.text\"></span>\n                                    </ng-container>\n                                    <ng-container *ngSwitchCase=\"MH.MessageContentType.Typing\">\n                                        <div class=\"typing-indicator-container\">\n                                            <div class=\"typing-indicator\">\n                                                <span></span>\n                                                <span></span>\n                                                <span></span>\n                                            </div>\n                                        </div>\n                                    </ng-container>\n                                    <ng-container *ngSwitchCase=\"MH.MessageContentType.Media\">\n                                        <div [ngSwitch]=\"msg.messageData.content.media.type\">\n                                            <ng-container *ngSwitchCase=\"MH.MediaType.IMAGE\">\n                                                <img [src]=\"msg.messageData.content.media.url\" class=\"chat-media\" (click)=\"viewImage(msg.messageData.content.media.url)\" [class.clickable]=\"msg.messageData.content.media.url\" />\n                                                <span class=\"chat-bottom-overlay\">\n                                                    <img src=\"assets/svg/picture.svg\" />&nbsp; {{msg.messageData.content.text||'Photo'}}\n                                                </span>\n                                            </ng-container>\n                                            <ng-container *ngSwitchCase=\"MH.MediaType.VIDEO\">\n                                                <video controls=\"controls\" class=\"chat-media\" (click)=\"viewVideo(msg.messageData.content.media.url)\" [class.clickable]=\"msg.messageData.content.media.url\">\n                                                    <source [src]=\"msg.messageData.content.media.url\" />\n                                                </video>\n                                                <span class=\"chat-bottom-overlay\">\n                                                    <img src=\"assets/svg/video-from-gallery.svg\" />&nbsp; {{msg.messageData.content.text||'Video'}}\n                                                </span>\n                                            </ng-container>\n                                            <ng-container *ngSwitchCase=\"MH.MediaType.AUDIO\">\n                                                <div class=\"chat-media\">\n                                                    <audio controls=\"controls\">\n                                                        <source [src]=\"msg.messageData.content.media.url\" />\n                                                    </audio>\n                                                </div>\n                                                <span class=\"chat-bottom-overlay\">\n                                                    <img src=\"assets/svg/record-voice.svg\" />&nbsp; {{msg.messageData.content.text||'Audio'}}\n                                                </span>\n                                            </ng-container>\n                                            <ng-container *ngSwitchCase=\"MH.MediaType.FILE\">\n                                                <img src=\"assets/svg/attachment.svg\" class=\"chat-media chat-file-attachment\" />\n                                                <span class=\"chat-bottom-overlay\">\n                                                    <img src=\"assets/svg/attachment-white.svg\" />&nbsp; {{msg.messageData.content.text||'File'}}\n                                                </span>\n                                            </ng-container>\n                                        </div>\n                                    </ng-container>\n                                </div>\n                                <span class=\"chat-time\" [hidden]=\"msg.getMessageContentType()==MH.MessageContentType.Typing\">\n                                    <span *ngIf=\"msg.direction==MH.Direction.Outgoing && msg.status==MH.MessageStatus.SentTimeout\"><a href=\"javascript:;\" (click)=\"msg.executeRetry()\" class=\"ana-link ana-btn-retry\">Retry</a></span>\n                                    <span *ngIf=\"!msg.isToday()\">\n                                        {{msg.time | date:'MMM d, h:mm a'}}\n                                    </span>\n                                    <span *ngIf=\"msg.isToday()\">\n                                        {{msg.time | date:'shortTime'}}\n                                    </span>\n                                    <svg class=\"ana-sent-tick\" *ngIf=\"msg.direction==MH.Direction.Outgoing && msg.status==MH.MessageStatus.ReceivedAtServer\" xmlns=\"http://www.w3.org/2000/svg\" width=\"10\" height=\"10\">\n                                        <path d=\"M9.887 1.475a.385.385 0 0 0-.544 0L3.11 7.709.657 5.257a.385.385 0 1 0-.544.544l2.724 2.724c.15.15.394.15.544 0L9.887 2.02a.385.385 0 0 0 0-.544z\" />\n                                    </svg>\n                                    <svg class=\"ana-delivered-tick\" *ngIf=\"msg.direction==MH.Direction.Outgoing && msg.status==MH.MessageStatus.DelieveredToTarget\" xmlns=\"http://www.w3.org/2000/svg\" width=\"10\" height=\"10\">\n                                        <path d=\"M7.554 2.725l-.601-.6-2.704 2.703.6.601 2.705-2.704zm1.802-.6L4.85 6.673 3.047 4.87l-.6.601L4.85 7.876 10 2.726l-.644-.602zM0 5.471l2.403 2.404.601-.601L.601 4.87 0 5.472z\" />\n                                    </svg>\n                                </span>\n                                <span class=\"chat-stub\"></span>\n                            </div>\n                        </div>\n                    </ng-container>\n                    <ng-container *ngSwitchCase=\"MH.MessageType.CAROUSEL\">\n                        <div class=\"carousel-wrapper\">\n                            <div #carouselContainer class=\"carousel-container scrollbar\" [ngClass]=\"msg.meta.id\">\n                                <div *ngFor=\"let carItem of msg.messageData.content.items\" class=\"carousel-item-container\">\n                                    <div class=\"carousel-item\">\n                                        <div class=\"carousel-item-content\" [class.no-media]=\"!carouselItemHasMedia(carItem)\">\n                                            <div *ngIf=\"carouselItemHasMedia(carItem)\">\n                                                <div [ngSwitch]=\"carItem.media.type\" class=\"carousel-item-media\">\n                                                    <ng-container *ngSwitchCase=\"MH.MediaType.IMAGE\">\n                                                        <img [src]=\"carItem.media.url\" (click)=\"viewImage(carItem.media.url)\" [class.clickable]=\"carItem.media.url\" />\n                                                    </ng-container>\n                                                    <ng-container *ngSwitchCase=\"MH.MediaType.VIDEO\" (click)=\"viewVideo(carItem.media.url)\" [class.clickable]=\"carItem.media.url\">\n                                                        <video controls [src]=\"carItem.media.url\"></video>\n                                                    </ng-container>\n                                                    <ng-container *ngSwitchCase=\"MH.MediaType.AUDIO\">\n                                                        <audio controls [src]=\"carItem.media.url\"></audio>\n                                                    </ng-container>\n                                                </div>\n                                            </div>\n                                            <div class=\"carousel-item-title text-wrap\">\n                                                {{carItem.title}}\n                                            </div>\n                                            <div class=\"carousel-item-desc text-wrap\" [innerHTML]=\"carItem.desc\"></div>\n                                        </div>\n                                        <div class=\"carousel-item-button-container\">\n                                            <div class=\"carousel-item-button\" *ngFor=\"let carBtn of carItem.options\">\n                                                <button mat-button (click)=\"handleCarouselClick(msg, carBtn)\" [disabled]=\"!isLastMessage(msg)\">{{carBtn.title}}</button>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"carousel-arrow right\" (click)=\"scrollCarousel(msg.meta.id, 'right')\" [hidden]=\"!canScrollCarousel(msg.meta.id,'right')\">\n                                <svg>\n                                    <path d=\"M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z\"></path>\n                                </svg>\n                            </div>\n                            <div class=\"carousel-arrow left\" (click)=\"scrollCarousel(msg.meta.id, 'left')\" [hidden]=\"!canScrollCarousel(msg.meta.id,'left')\">\n                                <svg>\n                                    <path d=\"M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z\"></path>\n                                </svg>\n                            </div>\n                        </div>\n                    </ng-container>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"chat-input-container\" #inputContainer>\n            <div *ngIf=\"chatInput.clickInput\">\n                <div [ngSwitch]=\"chatInput.clickInput.content.inputType\">\n                    <ng-container *ngSwitchCase=\"MH.InputType.OPTIONS\">\n                        <div class=\"chat-input-click-container\">\n                            <div *ngFor=\"let option of chatInput.clickInput.content.options\" class=\"chat-input click\">\n                                <button type=\"button\" class=\"btn-click\" (click)=\"chatInput.handleBtnOptionClick(chatInput.clickInput, option.value)\">{{option.title}}</button>\n                            </div>\n                        </div>\n                    </ng-container>\n                    <ng-container *ngSwitchDefault>\n                        <div class=\"chat-input-click-container\">\n                            <div class=\"chat-input click\">\n                                <button type=\"button\" class=\"btn-click\" (click)=\"chatInput.handleClick(chatInput.clickInput)\">{{chatInput.clickInputTitle()}}</button>\n                            </div>\n                        </div>\n                    </ng-container>\n                </div>\n            </div>\n\n            <div class=\"chat-input text\" *ngIf=\"chatInput.textInput\">\n                <input [type]=\"chatInput.htmlInputType(chatInput.textInput)\" [readonly]=\"chatInput.textInput.disabled\" (keypress)=\"chatInput.handleKeyPress(chatInput.textInput, $event)\" name=\"chat-text\" id=\"chat-text\" class=\"chat-text-input\" [(ngModel)]=\"chatInput.textInput.content.input.val\" [placeholder]=\"((chatInput.textInput.disabled? 'Waiting for response':(chatInput.textInput.content.textInputAttr?(chatInput.textInput.content.textInputAttr.placeHolder?chatInput.textInput.content.textInputAttr.placeHolder:''):'')))\" [maxlength]=\"(chatInput.textInput.content.textInputAttr?chatInput.textInput.content.textInputAttr.maxLength:'')\" (focus)=\"chatTextInputOnFocus()\" />\n                <button type=\"button\" class=\"btn-icon\" [disabled]=\"!chatInput.textInput.content.input.val\" (click)=\"chatInput.handleClick(chatInput.textInput)\">\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\"><path class=\"send-button\" d=\"M23.878.983a.359.359 0 0 0-.388-.056L.208 11.745a.359.359 0 0 0-.007.647l6.589 3.234c.12.06.265.046.372-.035l6.407-4.788-5.03 5.173a.359.359 0 0 0-.1.278l.5 6.52a.359.359 0 0 0 .63.208l3.497-4.053 4.323 2.066a.358.358 0 0 0 .497-.217L23.983 1.36a.359.359 0 0 0-.105-.377z\" /></svg>\n                </button>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"image-viewer-container\" [hidden]=\"!fullScreenImage\">\n    <ngx-image-viewer #imageViewer [src]=\"[fullScreenImage]\"></ngx-image-viewer>\n    <button mat-icon-button (click)=\"closeImageViewer()\" class=\"btn-close\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 3.748 3.748\">\n            <path d=\"M2.205 1.874L3.68.4A.234.234 0 1 0 3.348.07L1.874 1.543.4.069A.234.234 0 1 0 .07.4l1.473 1.474L.07 3.348a.234.234 0 1 0 .331.331l1.474-1.474L3.348 3.68a.234.234 0 0 0 .331 0 .234.234 0 0 0 0-.331L2.205 1.874z\" />\n        </svg>\n    </button>\n</div>\n<div class=\"video-viewer-container\" *ngIf=\"fullScreenVideo\">\n    <div class=\"video-container\">\n        <video controls=\"controls\">\n            <source [src]=\"fullScreenVideo\" />\n        </video>\n    </div>\n    <button mat-icon-button (click)=\"closeVideoViewer()\" class=\"btn-close\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 3.748 3.748\">\n            <path d=\"M2.205 1.874L3.68.4A.234.234 0 1 0 3.348.07L1.874 1.543.4.069A.234.234 0 1 0 .07.4l1.473 1.474L.07 3.348a.234.234 0 1 0 .331.331l1.474-1.474L3.348 3.68a.234.234 0 0 0 .331 0 .234.234 0 0 0 0-.331L2.205 1.874z\" />\n        </svg>\n    </button>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/complex-input/complex-input.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/complex-input/complex-input.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-dialog-content>\n    <div [ngSwitch]=\"params.Type\">\n        <ng-container *ngSwitchCase=\"ComplexType.Date\">\n            <mat-form-field>\n                <input matInput [matDatepicker]=\"datePicker\" placeholder=\"Choose a date\" [(ngModel)]=\"choosenDate\">\n                <mat-datepicker-toggle matSuffix [for]=\"datePicker\" class=\"ana-color-accent\"></mat-datepicker-toggle>\n                <mat-datepicker touchUi=\"true\" #datePicker></mat-datepicker>\n            </mat-form-field>\n        </ng-container>\n\n        <ng-container *ngSwitchCase=\"ComplexType.Time\">\n            <mat-form-field>\n                <input matInput type=\"time\" placeholder=\"Choose a time\" [(ngModel)]=\"choosenTime\">\n            </mat-form-field>\n        </ng-container>\n        <ng-container *ngSwitchCase=\"ComplexType.Address\">\n\n            <mat-form-field>\n                <input matInput type=\"text\" placeholder=\"Street Address\" [(ngModel)]=\"givenAddress.line1\" name=\"addressLine1\">\n            </mat-form-field>\n\n            <mat-form-field>\n                <input matInput type=\"text\" placeholder=\"Area\" [(ngModel)]=\"givenAddress.area\" name=\"addressArea\">\n            </mat-form-field>\n\n            <mat-form-field>\n                <input matInput type=\"text\" placeholder=\"City\" [(ngModel)]=\"givenAddress.city\" name=\"addressCity\">\n            </mat-form-field>\n\n            <mat-form-field>\n                <input matInput type=\"text\" placeholder=\"State\" [(ngModel)]=\"givenAddress.state\" name=\"addressState\">\n            </mat-form-field>\n\n            <mat-form-field>\n                <input matInput type=\"text\" placeholder=\"Country\" [(ngModel)]=\"givenAddress.country\" name=\"addressCountry\">\n            </mat-form-field>\n\n            <mat-form-field>\n                <input matInput type=\"text\" placeholder=\"Pin\" [(ngModel)]=\"givenAddress.pin\" name=\"addressPin\">\n            </mat-form-field>\n        </ng-container>\n        <ng-container *ngSwitchCase=\"ComplexType.Location\">\n            <agm-map [latitude]=\"geoLoc.lat\" [longitude]=\"geoLoc.lng\">\n                <agm-marker [latitude]=\"geoLoc.lat\" [longitude]=\"geoLoc.lng\" [markerDraggable]=\"true\" (dragEnd)=\"mapLocationUpdated($event)\"></agm-marker>\n            </agm-map>\n        </ng-container>\n        <ng-container *ngSwitchCase=\"ComplexType.List\">\n            <mat-form-field>\n                <input matInput type=\"text\" placeholder=\"Search\" [(ngModel)]=\"listItemsSearch\" name=\"listItemsSearch\">\n            </mat-form-field>\n            <mat-card *ngIf=\"searchedListValues().length <= 0\">\n                No items to display\n            </mat-card>\n            <mat-list *ngIf=\"listMultiple\">\n                <mat-list-item *ngFor=\"let listItem of searchedListValues(); let i = index\">\n                    <mat-checkbox [(ngModel)]=\"listItem.isSelected\" name=\"listItemIsSelected-{{i}}\" align=\"start\">{{listItem.text}}</mat-checkbox>\n                </mat-list-item>\n            </mat-list>\n            <mat-list *ngIf=\"!listMultiple\">\n                <mat-radio-group [(ngModel)]=\"selectedListItem\">\n                    <mat-list-item *ngFor=\"let listItem of searchedListValues(); let i = index\">\n                        <mat-radio-button name=\"listItemIsSelected-{{i}}\" [value]=\"listItem\" align=\"start\">{{listItem.text}}</mat-radio-button>\n                    </mat-list-item>\n                </mat-radio-group>\n            </mat-list>\n        </ng-container>\n    </div>\n</mat-dialog-content>\n<mat-dialog-actions align=\"center\">\n    <button mat-raised-button color=\"primary\" [disabled]=\"!isValid()\" mat-button class=\"complex-input-btn-done\" (click)=\"dialogClose()\">Submit</button>\n</mat-dialog-actions>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/info-dialog/info-dialog.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/info-dialog/info-dialog.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2 matDialogTitle>{{options.title}}</h2>\n<mat-dialog-content>\n    <p>{{options.message}}</p>\n    <mat-form-field [hidden]=\"options.dialogType!=InfoDialogType.Prompt\">\n        <input type=\"text\" name=\"text\" matInput [(ngModel)]=\"inputText\" (keypress)=\"inputKeypress($event)\" />\n    </mat-form-field>\n</mat-dialog-content>\n<mat-dialog-actions>\n    <button mat-raised-button color=\"primary\" (click)=\"primaryClick()\" *ngIf=\"primaryButtonText\">{{primaryButtonText}}</button>\n    <button mat-raised-button [color]=\"options.dialogType==InfoDialogType.Alert?'primary':''\" [matDialogClose]=\"false\">{{secondaryButtonText}}</button>\n</mat-dialog-actions>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_mat_css_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/mat-css.service */ "./src/app/services/mat-css.service.ts");
/* harmony import */ var _services_simulator_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/simulator.service */ "./src/app/services/simulator.service.ts");
/* harmony import */ var _services_stomp_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/stomp.service */ "./src/app/services/stomp.service.ts");
/* harmony import */ var _services_utilities_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/utilities.service */ "./src/app/services/utilities.service.ts");








let AppComponent = class AppComponent {
    constructor(route, apiService, stomp, simulator, utils, matCSS) {
        this.route = route;
        this.apiService = apiService;
        this.stomp = stomp;
        this.simulator = simulator;
        this.utils = utils;
        this.matCSS = matCSS;
        this.route.queryParams.subscribe(params => {
            if (params['s']) {
                let settings = JSON.parse(atob(params['s']));
                if (settings.stompConfig && settings.stompConfig.debug)
                    console.log(settings);
                this.setAppSettings(settings);
            }
        });
    }
    setAppSettings(settings) {
        _services_utilities_service__WEBPACK_IMPORTED_MODULE_7__["UtilitiesService"].settings = settings;
        if (settings.brandingConfig) {
            this.getCustomStyle(settings.brandingConfig.primaryBackgroundColor, settings.brandingConfig.secondaryBackgroundColor, settings.brandingConfig.primaryForegroundColor, settings.brandingConfig.frameContentWidth);
        }
        if (settings.thirdPartyConfig && _services_utilities_service__WEBPACK_IMPORTED_MODULE_7__["UtilitiesService"].googleMapsConfigRef)
            _services_utilities_service__WEBPACK_IMPORTED_MODULE_7__["UtilitiesService"].googleMapsConfigRef.apiKey = settings.thirdPartyConfig.googleMapsKey;
        if (settings.appConfig) {
            this.apiService.fileUploadEndpoint = settings.appConfig.fileUploadEndpoint;
            this.apiService.setAPIEndpoint(settings.appConfig.apiEndpoint);
        }
        if (settings.stompConfig)
            this.stomp.configure(settings.stompConfig);
    }
    getCustomStyle(accent = undefined, secondary = undefined, accentFG = undefined, contentWidth = undefined) {
        const ANA_CUSTOM_STYLE = 'ana-custom-style';
        let customStyle = document.getElementById(ANA_CUSTOM_STYLE);
        if (!customStyle) {
            customStyle = document.createElement('style');
            customStyle.id = ANA_CUSTOM_STYLE;
            document.head.appendChild(customStyle);
        }
        let appCSS = `/*Dynamic styles*/
.chat-message-item.incoming {
  border-left-color: ${accent || '#8cc83c'};
}

.incoming > .chat-stub {
  border-top-color: ${accent || '#8cc83c'};
}

.carousel-item-button:first-child,
.chat-input button.btn-icon {
  color: ${accent || '#8cc83c'};
}

.chat-input button.btn-click {
  background-color: ${accent || '#8cc83c'};
  color: ${accentFG || 'white'};
}

.ana-sent-tick path{
	fill: ${accent || '#8cc83c'};
}
.ana-sent-tick{
  color: ${accent || '#8cc83c'};
}

.ana-delivered-tick path{
	fill: ${accent || '#8cc83c'};
}
.ana-delivered-tick{
  color: ${accent || '#8cc83c'};
}

.chat-message-item.outgoing {
  border-right-color: ${secondary || 'black'};
}

.outgoing > .chat-stub {
  border-top-color: ${secondary || 'black'};
}

.complex-input-btn-done {
  color: ${accentFG || 'white'} !important;
}

.content {
  width: 100vw;
}

.ana-title {
  background-color: ${accent || '#8cc83c'};
  color: ${accentFG || 'white'};
}
.chat-text-input{
	caret-color: ${accent || '#8cc83c'};
}
path.send-button{
  fill: ${accent || '#8cc83c'};
}
.ana-logo > img {
  background-color: ${accentFG || 'white'};
  border: 2px solid ${accentFG || 'white'};
}

.ana-min .ana-minmax-btn {
  border: 2px solid ${accentFG || 'white'};
}

.ana-minmax-btn {
  background-color: ${accentFG || 'white'};
}

.typing-indicator span{
  background-color: ${accent || '#8cc83c'};
}

.ana-actions {
  margin-right: ${_services_utilities_service__WEBPACK_IMPORTED_MODULE_7__["UtilitiesService"].settings.appConfig.fullpage ? "-5px" : "15px"};
}
`;
        this.matCSS.loadCustomMatTheme(accent, customStyle, appCSS);
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["APIService"] },
    { type: _services_stomp_service__WEBPACK_IMPORTED_MODULE_6__["StompService"] },
    { type: _services_simulator_service__WEBPACK_IMPORTED_MODULE_5__["SimulatorService"] },
    { type: _services_utilities_service__WEBPACK_IMPORTED_MODULE_7__["UtilitiesService"] },
    { type: _services_mat_css_service__WEBPACK_IMPORTED_MODULE_4__["MatCSSService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _services_api_service__WEBPACK_IMPORTED_MODULE_3__["APIService"],
        _services_stomp_service__WEBPACK_IMPORTED_MODULE_6__["StompService"],
        _services_simulator_service__WEBPACK_IMPORTED_MODULE_5__["SimulatorService"],
        _services_utilities_service__WEBPACK_IMPORTED_MODULE_7__["UtilitiesService"],
        _services_mat_css_service__WEBPACK_IMPORTED_MODULE_4__["MatCSSService"]])
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var ngx_image_viewer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-image-viewer */ "./node_modules/ngx-image-viewer/ngx-image-viewer.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_chat_thread_chat_thread_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/chat-thread/chat-thread.component */ "./src/app/components/chat-thread/chat-thread.component.ts");
/* harmony import */ var _services_stomp_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/stomp.service */ "./src/app/services/stomp.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_utilities_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/utilities.service */ "./src/app/services/utilities.service.ts");
/* harmony import */ var _services_simulator_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/simulator.service */ "./src/app/services/simulator.service.ts");
/* harmony import */ var _components_complex_input_complex_input_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/complex-input/complex-input.component */ "./src/app/components/complex-input/complex-input.component.ts");
/* harmony import */ var _models_google_maps_config_model__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./models/google-maps-config.model */ "./src/app/models/google-maps-config.model.ts");
/* harmony import */ var _services_mat_css_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/mat-css.service */ "./src/app/services/mat-css.service.ts");
/* harmony import */ var _services_chain_delay_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/chain-delay.service */ "./src/app/services/chain-delay.service.ts");
/* harmony import */ var _components_info_dialog_info_dialog_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/info-dialog/info-dialog.component */ "./src/app/components/info-dialog/info-dialog.component.ts");
/* harmony import */ var _services_info_dialog_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/info-dialog.service */ "./src/app/services/info-dialog.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");






















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
            _components_chat_thread_chat_thread_component__WEBPACK_IMPORTED_MODULE_10__["ChatThreadComponent"],
            _components_complex_input_complex_input_component__WEBPACK_IMPORTED_MODULE_15__["ComplexInputComponent"],
            _components_info_dialog_info_dialog_component__WEBPACK_IMPORTED_MODULE_19__["InfoDialogComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatNativeDateModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatProgressBarModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([
                { path: '', component: _components_chat_thread_chat_thread_component__WEBPACK_IMPORTED_MODULE_10__["ChatThreadComponent"] },
                { path: '**', redirectTo: '' }
            ]),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HttpClientModule"],
            _agm_core__WEBPACK_IMPORTED_MODULE_7__["AgmCoreModule"].forRoot(),
            ngx_image_viewer__WEBPACK_IMPORTED_MODULE_8__["ImageViewerModule"].forRoot({
                btnClass: 'hidden',
                zoomFactor: 0.1,
                containerBackgroundColor: 'rgba(0,0,0,0)',
                wheelZoom: true,
                allowFullscreen: true,
                btnIcons: {
                    zoomIn: 'hidden',
                    zoomOut: 'hidden',
                    rotateClockwise: 'hidden',
                    rotateCounterClockwise: 'hidden',
                    next: 'hidden',
                    prev: 'hidden',
                    fullscreen: 'hidden',
                }
            }),
        ],
        providers: [
            _services_stomp_service__WEBPACK_IMPORTED_MODULE_11__["StompService"],
            _services_utilities_service__WEBPACK_IMPORTED_MODULE_13__["UtilitiesService"],
            _services_api_service__WEBPACK_IMPORTED_MODULE_12__["APIService"],
            _services_mat_css_service__WEBPACK_IMPORTED_MODULE_17__["MatCSSService"],
            _services_chain_delay_service__WEBPACK_IMPORTED_MODULE_18__["ChainDelayService"],
            _services_simulator_service__WEBPACK_IMPORTED_MODULE_14__["SimulatorService"],
            _services_info_dialog_service__WEBPACK_IMPORTED_MODULE_20__["InfoDialogService"],
            { provide: _agm_core__WEBPACK_IMPORTED_MODULE_7__["LAZY_MAPS_API_CONFIG"], useClass: _models_google_maps_config_model__WEBPACK_IMPORTED_MODULE_16__["GoogleMapsConfig"] }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]],
        entryComponents: [
            _components_complex_input_complex_input_component__WEBPACK_IMPORTED_MODULE_15__["ComplexInputComponent"],
            _components_info_dialog_info_dialog_component__WEBPACK_IMPORTED_MODULE_19__["InfoDialogComponent"]
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["NO_ERRORS_SCHEMA"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/chat-thread/chat-thread.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/chat-thread/chat-thread.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n.root {\n  display: table;\n  margin: 0 auto;\n  height: 100vh;\n  border-radius: 10px;\n  overflow: hidden;\n}\n.media {\n  overflow: visible;\n}\n.clickable {\n  cursor: pointer;\n}\n.content {\n  margin: 0 auto;\n  display: inline-block;\n  display: flex;\n  flex-direction: column;\n  height: inherit;\n}\n.ana-min.root {\n  height: 57px !important;\n}\n.ana-min .chat-thread,\n.ana-min .chat-input-container {\n  height: 0 !important;\n  display: none;\n}\n.ana-min .root {\n  height: 57px !important;\n}\n.chat-thread {\n  padding: 20px;\n  height: 100%;\n  flex-grow: 1;\n  overflow-y: scroll;\n  background-color: #F5F5F5;\n}\n.chat-message-group {\n  margin: 10px 0;\n}\n.chat-message-item {\n  max-width: 80%;\n  position: relative;\n  min-width: 40%;\n  box-shadow: 0px 2px 3px -1px rgba(110, 110, 110, 0.15);\n}\n.chat-message-item.media * .chat-media {\n  width: 100%;\n  height: 100%;\n  background-color: white;\n}\n.chat-message-item.media.incoming * .chat-media {\n  border-radius: 0 10px 10px 0;\n}\n.chat-message-item.media.incoming * video.chat-media,\n.chat-message-item.media.incoming * .chat-media > audio {\n  border-radius: 0 10px 0 0 !important;\n}\n.chat-message-item.media.outgoing * .chat-media {\n  border-radius: 10px 0 0 10px;\n}\n.chat-message-item.media.outgoing * video.chat-media,\n.chat-message-item.media.outgoing * .chat-media > audio {\n  border-radius: 10px 0 0 0 !important;\n}\n.chat-message-item.text {\n  background-color: white;\n  padding: 15px;\n}\n.chat-message-item.typing {\n  background-color: white;\n  padding: 10px 15px;\n  min-width: auto;\n}\n.chat-message-item.incoming {\n  float: left;\n  border-radius: 0 10px 10px 0;\n  border-left-width: 3px;\n  border-left-style: solid;\n}\n.chat-message-item.outgoing {\n  float: right;\n  border-radius: 10px 0 0 10px;\n  border-right-width: 3px;\n  border-right-style: solid;\n}\n.chat-message-item-container {\n  width: 100%;\n  display: inline-block;\n}\napp-chat-thread {\n  max-width: 500px;\n}\n.dots {\n  width: 100%;\n  height: 100%;\n  background-image: linear-gradient(transparent 0px, transparent 2px, white 2px, white 20px), linear-gradient(to right, #c8c3c7 0px, #c8c3c7 2px, white 2px, white 20px);\n  background-position: 437px -2px;\n  background-size: 20px 20px;\n}\n.chat-text {\n  word-wrap: break-word;\n}\n.chat-time {\n  font-size: 8px;\n  position: absolute;\n  bottom: 2px;\n  right: 8px;\n}\n.chat-time > span {\n  opacity: 0.4;\n}\n.chat-stub {\n  width: 0;\n  height: 0;\n  bottom: -13px;\n  display: none;\n}\n.incoming > .chat-stub {\n  border-top-width: 13px;\n  border-top-style: solid;\n  border-left: 15px solid transparent;\n  position: absolute;\n  left: -3px;\n}\n.outgoing > .chat-stub {\n  border-top-width: 13px;\n  border-top-style: solid;\n  border-right: 15px solid transparent;\n  position: absolute;\n  right: -3px;\n}\n.chat-message-last {\n  margin-bottom: 15px;\n}\n.chat-message-last > .chat-stub {\n  display: block;\n}\n.chat-bottom-overlay {\n  background-color: rgba(0, 0, 0, 0.5);\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  color: white;\n  font-size: 9.6px;\n  font-style: italic;\n  padding: 5px 10px;\n}\n.outgoing * .chat-bottom-overlay {\n  border-radius: 0 0 0 10px;\n}\n.incoming * .chat-bottom-overlay {\n  border-radius: 0 0 10px 0;\n}\n.media > .chat-time {\n  color: white;\n  opacity: 1;\n  bottom: 5px;\n}\n.chat-media > audio {\n  width: 230px;\n  margin-bottom: 19px;\n}\nvideo.chat-media {\n  margin-bottom: 19px;\n}\n/*\nGreen dot up\nCarousel left right button background\nCarousel left right vertical center\nbg white\n*/\n.chat-input-container {\n  background-color: #F5F5F5;\n  border-radius: 0 0 10px 10px;\n}\n.chat-input {\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\n.chat-input.click {\n  display: inline;\n  float: left;\n  width: auto;\n}\n.chat-input.text {\n  background-color: white;\n  border-radius: 0 0 10px 10px;\n  box-shadow: 0px -3px 11px 0px rgba(0, 0, 0, 0.05);\n}\n.chat-input button.btn-click {\n  border-radius: 4px;\n  padding: 7px 23px;\n  border: transparent;\n  margin: 0 10px 10px 10px;\n  white-space: nowrap;\n}\n.chat-input button.btn-icon {\n  font-size: 20px;\n  border: none;\n  background: none;\n  padding: 0 14px;\n  opacity: 0.8;\n}\n.chat-input button.btn-icon:disabled {\n  opacity: 0.1;\n}\n.chat-input i {\n  font-size: 20px;\n}\n.chat-text-input {\n  border: none;\n  vertical-align: middle;\n  padding: 12px 16px;\n  width: 100%;\n  outline: none;\n  color: black;\n}\n.chat-input-click-container {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  overflow-x: auto;\n  background-color: transparent;\n  /*Remove below for click buttons to scroll horizontally*/\n  justify-content: center;\n  flex-wrap: wrap;\n  border-radius: 10px;\n}\n.chat-file-attachment {\n  height: 60px !important;\n  background-color: white !important;\n}\n.ana-sent-tick {\n  transform: translateY(1px);\n}\n.ana-delivered-tick {\n  transform: translateY(1px);\n}\n.carousel-wrapper {\n  position: relative;\n  margin: 0 -20px;\n}\n.carousel-wrapper > .carousel-arrow {\n  position: absolute;\n  top: 50%;\n  padding: 5px 0 0;\n  cursor: pointer;\n  transform: translateY(-50%);\n  background-color: white;\n  opacity: 0.85;\n}\n.carousel-wrapper > .carousel-arrow:hover {\n  opacity: 1;\n}\n.carousel-wrapper > .carousel-arrow.right {\n  right: 0;\n  box-shadow: -1px 0px 1px 1px rgba(0, 0, 0, 0.1);\n  border-radius: 5px 0 0 5px;\n}\n.carousel-wrapper > .carousel-arrow.left {\n  left: 0;\n  box-shadow: 1px 0px 1px 1px rgba(0, 0, 0, 0.1);\n  border-radius: 0 5px 5px 0;\n}\n.carousel-arrow.right svg {\n  width: 24px;\n  height: 24px;\n  transform: rotate(-90deg);\n  fill: #333;\n}\n.carousel-arrow.left svg {\n  width: 24px;\n  height: 24px;\n  fill: #333;\n  transform: rotate(90deg);\n}\n.carousel-container {\n  width: 100%;\n  overflow-x: auto;\n  white-space: nowrap;\n  margin-bottom: 5px;\n  margin-top: 5px;\n  display: flex;\n  flex-direction: row;\n}\n.carousel-item-media > img,\n.carousel-item-media > video,\n.carousel-item-media > audio {\n  width: 100%;\n  border-radius: inherit;\n}\n.carousel-item-media {\n  padding: 20px 0;\n  overflow: hidden;\n  border-radius: 5px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  min-height: 170px;\n}\n.carousel-item {\n  width: 240px;\n  margin: 0 10px;\n  border-radius: 10px;\n  background-color: white;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0px 1px 6px 1px rgba(110, 110, 110, 0.15);\n}\n.carousel-item-content {\n  padding: 0 20px;\n  flex-grow: 1;\n}\n.carousel-item-content.no-media {\n  padding: 10px 20px;\n}\n.carousel-item-container {\n  margin-bottom: 5px;\n  padding: 3px;\n  /*For carousel item shadow to be visible*/\n}\n.carousel-item-title {\n  font-weight: bold;\n  margin: �0 0 2px 0;\n  overflow: hidden;\n}\n.carousel-item-desc {\n  color: gray;\n  font-size: 11px;\n  margin: 2px 0 10px 0;\n}\n.carousel-item-button > button {\n  width: 100%;\n  border-top: 1px solid #ccc;\n  border-radius: 0;\n  text-align: left;\n  font-weight: bold;\n  text-transform: uppercase;\n  font-size: x-small;\n  text-align: center;\n  font-family: \"Open Sans\";\n}\n.text-wrap {\n  white-space: normal;\n}\n.carousel-container > table {\n  margin-bottom: 10px;\n}\n.ana-title {\n  padding: 10px 15px;\n  z-index: 100;\n  position: relative;\n  border-radius: 10px 10px 0 0;\n}\n.ana-min .ana-title {\n  margin-top: 20px;\n  box-shadow: 0px 1px 6px 1px rgba(0, 0, 0, 0.36);\n  margin-left: 6px;\n  margin-right: 6px;\n}\n.ana-logo {\n  display: inline;\n  float: left;\n  margin: 0 15px -4px 0;\n}\n.ana-logo > img {\n  width: 35px;\n  height: 35px;\n  border-radius: 0 7px 7px 7px;\n  box-shadow: 0px 0px 25px 3px rgba(0, 0, 0, 0.19);\n  margin-top: 4px;\n}\n.ana-content {\n  display: flex;\n  flex-direction: column;\n  float: left;\n  width: 63%;\n}\n.ana-content > .title {\n  font-weight: bold;\n  font-size: 18px;\n  position: relative;\n}\n.ana-content > .subtitle {\n  font-size: 11px;\n  opacity: 0.9;\n}\n.ana-actions {\n  display: flex;\n  flex-direction: row;\n  float: right;\n  margin-top: 5px;\n}\n.ana-actions .ana-action {\n  opacity: 0.6;\n  height: 24px;\n  width: 24px;\n  padding: 4px;\n  border-radius: 3px;\n  cursor: pointer;\n}\n.ana-actions .ana-action:hover {\n  opacity: 1;\n  background-color: rgba(0, 0, 0, 0.1);\n}\n.ana-actions .ana-action svg {\n  height: 16px;\n  width: 16px;\n}\n.ana-actions .ana-action svg path {\n  fill: #fff;\n}\n.ana-actions .ana-action.refresh svg {\n  height: 14px;\n  width: 14px;\n}\n.ana-minmax-btn {\n  border-radius: 3px;\n  height: 3px;\n  width: 15px;\n  opacity: 0.6;\n  position: absolute;\n  top: 10px;\n  right: 10px;\n}\n.ana-min .ana-minmax-btn {\n  border-radius: 2px;\n  height: 11px;\n  background-color: transparent;\n  width: 11px;\n}\n.ana-min .ana-logo {\n  transform: translateY(-22px);\n}\n.ana-min .ana-logo > img {\n  box-shadow: 0px 1px 6px 1px rgba(0, 0, 0, 0.36);\n}\n.input-msg {\n  background-color: white;\n  padding: 5px 16px;\n  font-size: 10px;\n  color: crimson;\n}\n.typing-indicator-container {\n  display: table-cell;\n}\n.typing-indicator {\n  width: auto;\n  display: table;\n  position: relative;\n}\n.typing-indicator span {\n  height: 6px;\n  width: 6px;\n  float: left;\n  margin: 0 1px;\n  display: block;\n  border-radius: 50%;\n  opacity: 0.4;\n}\n.typing-indicator span:nth-of-type(1) {\n  -webkit-animation: 1s blink infinite 0.3333s;\n  animation: 1s blink infinite 0.3333s;\n}\n.typing-indicator span:nth-of-type(2) {\n  -webkit-animation: 1s blink infinite 0.6666s;\n  animation: 1s blink infinite 0.6666s;\n}\n.typing-indicator span:nth-of-type(3) {\n  -webkit-animation: 1s blink infinite 0.9999s;\n  animation: 1s blink infinite 0.9999s;\n}\n@-webkit-keyframes blink {\n  50% {\n    opacity: 1;\n  }\n}\n@keyframes blink {\n  50% {\n    opacity: 1;\n  }\n}\n@-webkit-keyframes bulge {\n  50% {\n    transform: scale(1.05);\n  }\n}\n@keyframes bulge {\n  50% {\n    transform: scale(1.05);\n  }\n}\n.scrollbar::-webkit-scrollbar-track {\n  background-color: transparent;\n}\n.scrollbar::-webkit-scrollbar {\n  width: 5px;\n  height: 5px;\n  background-color: transparent;\n}\n.scrollable::-webkit-scrollbar * {\n  background: transparent;\n}\n.scrollbar::-webkit-scrollbar-thumb {\n  border-radius: 10px !important;\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3) !important;\n  background-color: rgba(0, 0, 0, 0.3) !important;\n}\n.carousel-item-container:first-child > .carousel-item {\n  margin-left: 16px;\n}\n.carousel-item-container:last-child > .carousel-item {\n  margin-right: 16px;\n}\n.carousel-arrow > i {\n  color: rgba(0, 0, 0, 0.6);\n}\n.ana-link {\n  color: inherit;\n  text-decoration: underline;\n}\n.chat-bottom-overlay > img {\n  height: 12px;\n  width: 12px;\n}\n.ana-online-dot {\n  border-radius: 5px;\n  height: 6px;\n  width: 6px;\n  background-color: #00DF50;\n  border: 1px solid white;\n  margin-top: 7px;\n  margin-right: 5px;\n  display: inline-block;\n}\n.chat-history-loading {\n  position: absolute;\n  bottom: -2px;\n  z-index: 100;\n  text-align: center;\n  width: 100%;\n  margin: 0 -20px 0 -15px;\n}\n.chat-history-loading > mat-progress-spinner {\n  display: inline-block;\n  height: 50px;\n  width: 50px;\n}\n@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {\n  .root {\n    border-radius: 0;\n  }\n\n  .ana-title {\n    border-radius: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaGF0LXRocmVhZC9jaGF0LXRocmVhZC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy90dXJ0dXZzaGluL1Byb2plY3RzL2NoYXRib3RzLm1uL3NpbXVsYXRvci9zcmMvYXBwL2NvbXBvbmVudHMvY2hhdC10aHJlYWQvY2hhdC10aHJlYWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0ksY0FBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBREVKO0FDQ0E7RUFDSSxpQkFBQTtBREVKO0FDQ0E7RUFDSSxlQUFBO0FERUo7QUNDQTtFQUNJLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7QURFSjtBQ0NBO0VBQ0ksdUJBQUE7QURFSjtBQ0NBOztFQUVJLG9CQUFBO0VBQ0EsYUFBQTtBREVKO0FDQ0E7RUFDSSx1QkFBQTtBREVKO0FDQ0E7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FERUo7QUNDQTtFQUNJLGNBQUE7QURFSjtBQ0NBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHNEQUFBO0FERUo7QUNDSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QURFUjtBQ0NJO0VBQ0ksNEJBQUE7QURFUjtBQ0NROztFQUVJLG9DQUFBO0FERVo7QUNDSTtFQUNJLDRCQUFBO0FERVI7QUNDUTs7RUFFSSxvQ0FBQTtBREVaO0FDQ0k7RUFDSSx1QkFBQTtFQUNBLGFBQUE7QURFUjtBQ0NJO0VBQ0ksdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QURFUjtBQ0NJO0VBQ0ksV0FBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSx3QkFBQTtBREVSO0FDQ0k7RUFDSSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0FERVI7QUNDQTtFQUNJLFdBQUE7RUFDQSxxQkFBQTtBREVKO0FDQ0E7RUFDSSxnQkFBQTtBREVKO0FDQ0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNLQUFBO0VBQ0EsK0JBQUE7RUFDQSwwQkFBQTtBREVKO0FDQ0E7RUFDSSxxQkFBQTtBREVKO0FDQ0E7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBREVKO0FDQ0k7RUFDSSxZQUFBO0FERVI7QUNDQTtFQUNJLFFBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7QURFSjtBQ0NBO0VBQ0ksc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1DQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FERUo7QUNDQTtFQUNJLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBREVKO0FDQ0E7RUFDSSxtQkFBQTtBREVKO0FDQ0k7RUFDSSxjQUFBO0FERVI7QUNDQTtFQUNJLG9DQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FERUo7QUNDQTtFQUNJLHlCQUFBO0FERUo7QUNDQTtFQUNJLHlCQUFBO0FERUo7QUNDQTtFQUNJLFlBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBREVKO0FDQ0E7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7QURFSjtBQ0NBO0VBQ0ksbUJBQUE7QURFSjtBQ0VBOzs7OztDQUFBO0FBT0E7RUFDSSx5QkFBQTtFQUNBLDRCQUFBO0FEQUo7QUNHQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QURBSjtBQ0dJO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FEQVI7QUNHSTtFQUNJLHVCQUFBO0VBR0EsNEJBQUE7RUFDQSxpREFBQTtBREFSO0FDR0k7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0FEQVI7QUNHSTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBREFSO0FDR1E7RUFDSSxZQUFBO0FEQVo7QUNHSTtFQUNJLGVBQUE7QURBUjtBQ0dBO0VBQ0ksWUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QURBSjtBQ0dBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0VBQ0Esd0RBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFHQSxtQkFBQTtBREFKO0FDR0E7RUFDSSx1QkFBQTtFQUNBLGtDQUFBO0FEQUo7QUNHQTtFQUNJLDBCQUFBO0FEQUo7QUNHQTtFQUNJLDBCQUFBO0FEQUo7QUNHQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtBREFKO0FDR0k7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtBREFSO0FDR1E7RUFDSSxVQUFBO0FEQVo7QUNHUTtFQUNJLFFBQUE7RUFDQSwrQ0FBQTtFQUNBLDBCQUFBO0FEQVo7QUNHUTtFQUNJLE9BQUE7RUFDQSw4Q0FBQTtFQUNBLDBCQUFBO0FEQVo7QUNHQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBS0EseUJBQUE7RUFDQSxVQUFBO0FEQUo7QUNHQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUtBLHdCQUFBO0FEQUo7QUNHQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUdBLG1CQUFBO0FEQUo7QUNHQTs7O0VBR0ksV0FBQTtFQUdBLHNCQUFBO0FEQUo7QUNLQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtBREZKO0FDS0E7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EscURBQUE7QURGSjtBQ0tBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QURGSjtBQ0tJO0VBQ0ksa0JBQUE7QURGUjtBQ0tBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQWMseUNBQUE7QUREbEI7QUNJQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBRERKO0FDSUE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0FEREo7QUNJQTtFQUNJLFdBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0FEREo7QUNJQTtFQUNJLG1CQUFBO0FEREo7QUNJQTtFQUNJLG1CQUFBO0FEREo7QUNJQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBR0EsNEJBQUE7QURESjtBQ0lBO0VBQ0ksZ0JBQUE7RUFDQSwrQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QURESjtBQ0lBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBRERKO0FDSUk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0RBQUE7RUFDQSxlQUFBO0FERFI7QUNJQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FEREo7QUNJSTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FERFI7QUNJSTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FERFI7QUNJQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FEREo7QUNJSTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUREUjtBQ0lRO0VBQ0ksVUFBQTtFQUNBLG9DQUFBO0FERFo7QUNJUTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FERFo7QUNJWTtFQUNJLFVBQUE7QUREaEI7QUNJUTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FERFo7QUNJQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBRERKO0FDSUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLFdBQUE7QURESjtBQ0lBO0VBQ0ksNEJBQUE7QURESjtBQ0lJO0VBQ0ksK0NBQUE7QUREUjtBQ0lBO0VBQ0ksdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FEREo7QUNJQTtFQUNJLG1CQUFBO0FEREo7QUNJQTtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QURESjtBQ0lJO0VBQ0ksV0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUREUjtBQ0lRO0VBR0ksNENBQUE7RUFDQSxvQ0FBQTtBRERaO0FDSVE7RUFHSSw0Q0FBQTtFQUNBLG9DQUFBO0FERFo7QUNJUTtFQUdJLDRDQUFBO0VBQ0Esb0NBQUE7QUREWjtBQ1VBO0VBQ0k7SUFDSSxVQUFBO0VERk47QUFDRjtBQ0tBO0VBQ0k7SUFDSSxVQUFBO0VESE47QUFDRjtBQ01BO0VBQ0k7SUFLSSxzQkFBQTtFREpOO0FBQ0Y7QUNpQkE7RUFDSTtJQUtJLHNCQUFBO0VETk47QUFDRjtBQ1NBO0VBQ0ksNkJBQUE7QURQSjtBQ1VBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtBRFBKO0FDVUE7RUFDSSx1QkFBQTtBRFBKO0FDVUE7RUFDSSw4QkFBQTtFQUNBLCtEQUFBO0VBQ0EsK0NBQUE7QURQSjtBQ1VBO0VBQ0ksaUJBQUE7QURQSjtBQ1VBO0VBQ0ksa0JBQUE7QURQSjtBQ1VBO0VBQ0kseUJBQUE7QURQSjtBQ1VBO0VBQ0ksY0FBQTtFQUNBLDBCQUFBO0FEUEo7QUNVQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FEUEo7QUNVQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QURQSjtBQ1VBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0FEUEo7QUNVSTtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QURQUjtBQ1VBO0VBQ0k7SUFHSSxnQkFBQTtFRFBOOztFQ1VFO0lBR0ksZ0JBQUE7RURQTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jaGF0LXRocmVhZC9jaGF0LXRocmVhZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5yb290IHtcbiAgZGlzcGxheTogdGFibGU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ubWVkaWEge1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbn1cblxuLmNsaWNrYWJsZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNvbnRlbnQge1xuICBtYXJnaW46IDAgYXV0bztcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IGluaGVyaXQ7XG59XG5cbi5hbmEtbWluLnJvb3Qge1xuICBoZWlnaHQ6IDU3cHggIWltcG9ydGFudDtcbn1cblxuLmFuYS1taW4gLmNoYXQtdGhyZWFkLFxuLmFuYS1taW4gLmNoYXQtaW5wdXQtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5hbmEtbWluIC5yb290IHtcbiAgaGVpZ2h0OiA1N3B4ICFpbXBvcnRhbnQ7XG59XG5cbi5jaGF0LXRocmVhZCB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgZmxleC1ncm93OiAxO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XG59XG5cbi5jaGF0LW1lc3NhZ2UtZ3JvdXAge1xuICBtYXJnaW46IDEwcHggMDtcbn1cblxuLmNoYXQtbWVzc2FnZS1pdGVtIHtcbiAgbWF4LXdpZHRoOiA4MCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLXdpZHRoOiA0MCU7XG4gIGJveC1zaGFkb3c6IDBweCAycHggM3B4IC0xcHggcmdiYSgxMTAsIDExMCwgMTEwLCAwLjE1KTtcbn1cblxuLmNoYXQtbWVzc2FnZS1pdGVtLm1lZGlhICogLmNoYXQtbWVkaWEge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmNoYXQtbWVzc2FnZS1pdGVtLm1lZGlhLmluY29taW5nICogLmNoYXQtbWVkaWEge1xuICBib3JkZXItcmFkaXVzOiAwIDEwcHggMTBweCAwO1xufVxuXG4uY2hhdC1tZXNzYWdlLWl0ZW0ubWVkaWEuaW5jb21pbmcgKiB2aWRlby5jaGF0LW1lZGlhLFxuLmNoYXQtbWVzc2FnZS1pdGVtLm1lZGlhLmluY29taW5nICogLmNoYXQtbWVkaWEgPiBhdWRpbyB7XG4gIGJvcmRlci1yYWRpdXM6IDAgMTBweCAwIDAgIWltcG9ydGFudDtcbn1cblxuLmNoYXQtbWVzc2FnZS1pdGVtLm1lZGlhLm91dGdvaW5nICogLmNoYXQtbWVkaWEge1xuICBib3JkZXItcmFkaXVzOiAxMHB4IDAgMCAxMHB4O1xufVxuXG4uY2hhdC1tZXNzYWdlLWl0ZW0ubWVkaWEub3V0Z29pbmcgKiB2aWRlby5jaGF0LW1lZGlhLFxuLmNoYXQtbWVzc2FnZS1pdGVtLm1lZGlhLm91dGdvaW5nICogLmNoYXQtbWVkaWEgPiBhdWRpbyB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMCAwIDAgIWltcG9ydGFudDtcbn1cblxuLmNoYXQtbWVzc2FnZS1pdGVtLnRleHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTVweDtcbn1cblxuLmNoYXQtbWVzc2FnZS1pdGVtLnR5cGluZyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIG1pbi13aWR0aDogYXV0bztcbn1cblxuLmNoYXQtbWVzc2FnZS1pdGVtLmluY29taW5nIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJvcmRlci1yYWRpdXM6IDAgMTBweCAxMHB4IDA7XG4gIGJvcmRlci1sZWZ0LXdpZHRoOiAzcHg7XG4gIGJvcmRlci1sZWZ0LXN0eWxlOiBzb2xpZDtcbn1cblxuLmNoYXQtbWVzc2FnZS1pdGVtLm91dGdvaW5nIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBib3JkZXItcmFkaXVzOiAxMHB4IDAgMCAxMHB4O1xuICBib3JkZXItcmlnaHQtd2lkdGg6IDNweDtcbiAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBzb2xpZDtcbn1cblxuLmNoYXQtbWVzc2FnZS1pdGVtLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbmFwcC1jaGF0LXRocmVhZCB7XG4gIG1heC13aWR0aDogNTAwcHg7XG59XG5cbi5kb3RzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50IDBweCwgdHJhbnNwYXJlbnQgMnB4LCB3aGl0ZSAycHgsIHdoaXRlIDIwcHgpLCBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNjOGMzYzcgMHB4LCAjYzhjM2M3IDJweCwgd2hpdGUgMnB4LCB3aGl0ZSAyMHB4KTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNDM3cHggLTJweDtcbiAgYmFja2dyb3VuZC1zaXplOiAyMHB4IDIwcHg7XG59XG5cbi5jaGF0LXRleHQge1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbi5jaGF0LXRpbWUge1xuICBmb250LXNpemU6IDhweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDJweDtcbiAgcmlnaHQ6IDhweDtcbn1cblxuLmNoYXQtdGltZSA+IHNwYW4ge1xuICBvcGFjaXR5OiAwLjQ7XG59XG5cbi5jaGF0LXN0dWIge1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3R0b206IC0xM3B4O1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uaW5jb21pbmcgPiAuY2hhdC1zdHViIHtcbiAgYm9yZGVyLXRvcC13aWR0aDogMTNweDtcbiAgYm9yZGVyLXRvcC1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1sZWZ0OiAxNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC0zcHg7XG59XG5cbi5vdXRnb2luZyA+IC5jaGF0LXN0dWIge1xuICBib3JkZXItdG9wLXdpZHRoOiAxM3B4O1xuICBib3JkZXItdG9wLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXJpZ2h0OiAxNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAtM3B4O1xufVxuXG4uY2hhdC1tZXNzYWdlLWxhc3Qge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4uY2hhdC1tZXNzYWdlLWxhc3QgPiAuY2hhdC1zdHViIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5jaGF0LWJvdHRvbS1vdmVybGF5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogOS42cHg7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgcGFkZGluZzogNXB4IDEwcHg7XG59XG5cbi5vdXRnb2luZyAqIC5jaGF0LWJvdHRvbS1vdmVybGF5IHtcbiAgYm9yZGVyLXJhZGl1czogMCAwIDAgMTBweDtcbn1cblxuLmluY29taW5nICogLmNoYXQtYm90dG9tLW92ZXJsYXkge1xuICBib3JkZXItcmFkaXVzOiAwIDAgMTBweCAwO1xufVxuXG4ubWVkaWEgPiAuY2hhdC10aW1lIHtcbiAgY29sb3I6IHdoaXRlO1xuICBvcGFjaXR5OiAxO1xuICBib3R0b206IDVweDtcbn1cblxuLmNoYXQtbWVkaWEgPiBhdWRpbyB7XG4gIHdpZHRoOiAyMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTlweDtcbn1cblxudmlkZW8uY2hhdC1tZWRpYSB7XG4gIG1hcmdpbi1ib3R0b206IDE5cHg7XG59XG5cbi8qXG5HcmVlbiBkb3QgdXBcbkNhcm91c2VsIGxlZnQgcmlnaHQgYnV0dG9uIGJhY2tncm91bmRcbkNhcm91c2VsIGxlZnQgcmlnaHQgdmVydGljYWwgY2VudGVyXG5iZyB3aGl0ZVxuKi9cbi5jaGF0LWlucHV0LWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCAxMHB4IDEwcHg7XG59XG5cbi5jaGF0LWlucHV0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jaGF0LWlucHV0LmNsaWNrIHtcbiAgZGlzcGxheTogaW5saW5lO1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IGF1dG87XG59XG5cbi5jaGF0LWlucHV0LnRleHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAwIDAgMTBweCAxMHB4O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDAgMCAxMHB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCAxMHB4IDEwcHg7XG4gIGJveC1zaGFkb3c6IDBweCAtM3B4IDExcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG59XG5cbi5jaGF0LWlucHV0IGJ1dHRvbi5idG4tY2xpY2sge1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHBhZGRpbmc6IDdweCAyM3B4O1xuICBib3JkZXI6IHRyYW5zcGFyZW50O1xuICBtYXJnaW46IDAgMTBweCAxMHB4IDEwcHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5jaGF0LWlucHV0IGJ1dHRvbi5idG4taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBwYWRkaW5nOiAwIDE0cHg7XG4gIG9wYWNpdHk6IDAuODtcbn1cblxuLmNoYXQtaW5wdXQgYnV0dG9uLmJ0bi1pY29uOmRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC4xO1xufVxuXG4uY2hhdC1pbnB1dCBpIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uY2hhdC10ZXh0LWlucHV0IHtcbiAgYm9yZGVyOiBub25lO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBvdXRsaW5lOiBub25lO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5jaGF0LWlucHV0LWNsaWNrLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAvKlJlbW92ZSBiZWxvdyBmb3IgY2xpY2sgYnV0dG9ucyB0byBzY3JvbGwgaG9yaXpvbnRhbGx5Ki9cbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAxMHB4O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5jaGF0LWZpbGUtYXR0YWNobWVudCB7XG4gIGhlaWdodDogNjBweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4uYW5hLXNlbnQtdGljayB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxcHgpO1xufVxuXG4uYW5hLWRlbGl2ZXJlZC10aWNrIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDFweCk7XG59XG5cbi5jYXJvdXNlbC13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDAgLTIwcHg7XG59XG5cbi5jYXJvdXNlbC13cmFwcGVyID4gLmNhcm91c2VsLWFycm93IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgcGFkZGluZzogNXB4IDAgMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBvcGFjaXR5OiAwLjg1O1xufVxuXG4uY2Fyb3VzZWwtd3JhcHBlciA+IC5jYXJvdXNlbC1hcnJvdzpob3ZlciB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5jYXJvdXNlbC13cmFwcGVyID4gLmNhcm91c2VsLWFycm93LnJpZ2h0IHtcbiAgcmlnaHQ6IDA7XG4gIGJveC1zaGFkb3c6IC0xcHggMHB4IDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBib3JkZXItcmFkaXVzOiA1cHggMCAwIDVweDtcbn1cblxuLmNhcm91c2VsLXdyYXBwZXIgPiAuY2Fyb3VzZWwtYXJyb3cubGVmdCB7XG4gIGxlZnQ6IDA7XG4gIGJveC1zaGFkb3c6IDFweCAwcHggMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJvcmRlci1yYWRpdXM6IDAgNXB4IDVweCAwO1xufVxuXG4uY2Fyb3VzZWwtYXJyb3cucmlnaHQgc3ZnIHtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xuICBmaWxsOiAjMzMzO1xufVxuXG4uY2Fyb3VzZWwtYXJyb3cubGVmdCBzdmcge1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBmaWxsOiAjMzMzO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xufVxuXG4uY2Fyb3VzZWwtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtbXMtZmxleC1kaXJlY3Rpb246IHJvdztcbiAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4uY2Fyb3VzZWwtaXRlbS1tZWRpYSA+IGltZyxcbi5jYXJvdXNlbC1pdGVtLW1lZGlhID4gdmlkZW8sXG4uY2Fyb3VzZWwtaXRlbS1tZWRpYSA+IGF1ZGlvIHtcbiAgd2lkdGg6IDEwMCU7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiBpbmhlcml0O1xuICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xufVxuXG4uY2Fyb3VzZWwtaXRlbS1tZWRpYSB7XG4gIHBhZGRpbmc6IDIwcHggMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWluLWhlaWdodDogMTcwcHg7XG59XG5cbi5jYXJvdXNlbC1pdGVtIHtcbiAgd2lkdGg6IDI0MHB4O1xuICBtYXJnaW46IDAgMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYm94LXNoYWRvdzogMHB4IDFweCA2cHggMXB4IHJnYmEoMTEwLCAxMTAsIDExMCwgMC4xNSk7XG59XG5cbi5jYXJvdXNlbC1pdGVtLWNvbnRlbnQge1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIGZsZXgtZ3JvdzogMTtcbn1cblxuLmNhcm91c2VsLWl0ZW0tY29udGVudC5uby1tZWRpYSB7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbn1cblxuLmNhcm91c2VsLWl0ZW0tY29udGFpbmVyIHtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBwYWRkaW5nOiAzcHg7XG4gIC8qRm9yIGNhcm91c2VsIGl0ZW0gc2hhZG93IHRvIGJlIHZpc2libGUqL1xufVxuXG4uY2Fyb3VzZWwtaXRlbS10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW46IO+/vTAgMCAycHggMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmNhcm91c2VsLWl0ZW0tZGVzYyB7XG4gIGNvbG9yOiBncmF5O1xuICBmb250LXNpemU6IDExcHg7XG4gIG1hcmdpbjogMnB4IDAgMTBweCAwO1xufVxuXG4uY2Fyb3VzZWwtaXRlbS1idXR0b24gPiBidXR0b24ge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IHgtc21hbGw7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCI7XG59XG5cbi50ZXh0LXdyYXAge1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xufVxuXG4uY2Fyb3VzZWwtY29udGFpbmVyID4gdGFibGUge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uYW5hLXRpdGxlIHtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICB6LWluZGV4OiAxMDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAwO1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwIDA7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwIDA7XG59XG5cbi5hbmEtbWluIC5hbmEtdGl0bGUge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBib3gtc2hhZG93OiAwcHggMXB4IDZweCAxcHggcmdiYSgwLCAwLCAwLCAwLjM2KTtcbiAgbWFyZ2luLWxlZnQ6IDZweDtcbiAgbWFyZ2luLXJpZ2h0OiA2cHg7XG59XG5cbi5hbmEtbG9nbyB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbjogMCAxNXB4IC00cHggMDtcbn1cblxuLmFuYS1sb2dvID4gaW1nIHtcbiAgd2lkdGg6IDM1cHg7XG4gIGhlaWdodDogMzVweDtcbiAgYm9yZGVyLXJhZGl1czogMCA3cHggN3B4IDdweDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAyNXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xuICBtYXJnaW4tdG9wOiA0cHg7XG59XG5cbi5hbmEtY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogNjMlO1xufVxuXG4uYW5hLWNvbnRlbnQgPiAudGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5hbmEtY29udGVudCA+IC5zdWJ0aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgb3BhY2l0eTogMC45O1xufVxuXG4uYW5hLWFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLmFuYS1hY3Rpb25zIC5hbmEtYWN0aW9uIHtcbiAgb3BhY2l0eTogMC42O1xuICBoZWlnaHQ6IDI0cHg7XG4gIHdpZHRoOiAyNHB4O1xuICBwYWRkaW5nOiA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYW5hLWFjdGlvbnMgLmFuYS1hY3Rpb246aG92ZXIge1xuICBvcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5hbmEtYWN0aW9ucyAuYW5hLWFjdGlvbiBzdmcge1xuICBoZWlnaHQ6IDE2cHg7XG4gIHdpZHRoOiAxNnB4O1xufVxuXG4uYW5hLWFjdGlvbnMgLmFuYS1hY3Rpb24gc3ZnIHBhdGgge1xuICBmaWxsOiAjZmZmO1xufVxuXG4uYW5hLWFjdGlvbnMgLmFuYS1hY3Rpb24ucmVmcmVzaCBzdmcge1xuICBoZWlnaHQ6IDE0cHg7XG4gIHdpZHRoOiAxNHB4O1xufVxuXG4uYW5hLW1pbm1heC1idG4ge1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGhlaWdodDogM3B4O1xuICB3aWR0aDogMTVweDtcbiAgb3BhY2l0eTogMC42O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTBweDtcbiAgcmlnaHQ6IDEwcHg7XG59XG5cbi5hbmEtbWluIC5hbmEtbWlubWF4LWJ0biB7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgaGVpZ2h0OiAxMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgd2lkdGg6IDExcHg7XG59XG5cbi5hbmEtbWluIC5hbmEtbG9nbyB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjJweCk7XG59XG5cbi5hbmEtbWluIC5hbmEtbG9nbyA+IGltZyB7XG4gIGJveC1zaGFkb3c6IDBweCAxcHggNnB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMzYpO1xufVxuXG4uaW5wdXQtbXNnIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDVweCAxNnB4O1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiBjcmltc29uO1xufVxuXG4udHlwaW5nLWluZGljYXRvci1jb250YWluZXIge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xufVxuXG4udHlwaW5nLWluZGljYXRvciB7XG4gIHdpZHRoOiBhdXRvO1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4udHlwaW5nLWluZGljYXRvciBzcGFuIHtcbiAgaGVpZ2h0OiA2cHg7XG4gIHdpZHRoOiA2cHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW46IDAgMXB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBvcGFjaXR5OiAwLjQ7XG59XG5cbi50eXBpbmctaW5kaWNhdG9yIHNwYW46bnRoLW9mLXR5cGUoMSkge1xuICAtbW96LWFuaW1hdGlvbjogMXMgYmxpbmsgaW5maW5pdGUgMC4zMzMzcztcbiAgLW8tYW5pbWF0aW9uOiAxcyBibGluayBpbmZpbml0ZSAwLjMzMzNzO1xuICAtd2Via2l0LWFuaW1hdGlvbjogMXMgYmxpbmsgaW5maW5pdGUgMC4zMzMzcztcbiAgYW5pbWF0aW9uOiAxcyBibGluayBpbmZpbml0ZSAwLjMzMzNzO1xufVxuXG4udHlwaW5nLWluZGljYXRvciBzcGFuOm50aC1vZi10eXBlKDIpIHtcbiAgLW1vei1hbmltYXRpb246IDFzIGJsaW5rIGluZmluaXRlIDAuNjY2NnM7XG4gIC1vLWFuaW1hdGlvbjogMXMgYmxpbmsgaW5maW5pdGUgMC42NjY2cztcbiAgLXdlYmtpdC1hbmltYXRpb246IDFzIGJsaW5rIGluZmluaXRlIDAuNjY2NnM7XG4gIGFuaW1hdGlvbjogMXMgYmxpbmsgaW5maW5pdGUgMC42NjY2cztcbn1cblxuLnR5cGluZy1pbmRpY2F0b3Igc3BhbjpudGgtb2YtdHlwZSgzKSB7XG4gIC1tb3otYW5pbWF0aW9uOiAxcyBibGluayBpbmZpbml0ZSAwLjk5OTlzO1xuICAtby1hbmltYXRpb246IDFzIGJsaW5rIGluZmluaXRlIDAuOTk5OXM7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiAxcyBibGluayBpbmZpbml0ZSAwLjk5OTlzO1xuICBhbmltYXRpb246IDFzIGJsaW5rIGluZmluaXRlIDAuOTk5OXM7XG59XG5cbkAtbW96LWtleWZyYW1lcyBibGluayB7XG4gIDUwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuQC13ZWJraXQta2V5ZnJhbWVzIGJsaW5rIHtcbiAgNTAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGJsaW5rIHtcbiAgNTAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgYnVsZ2Uge1xuICA1MCUge1xuICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgICAtby10cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICB9XG59XG5ALW1vei1rZXlmcmFtZXMgYnVsZ2Uge1xuICA1MCUge1xuICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgICAtby10cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGJ1bGdlIHtcbiAgNTAlIHtcbiAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gICAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgfVxufVxuLnNjcm9sbGJhcjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLnNjcm9sbGJhcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogNXB4O1xuICBoZWlnaHQ6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5zY3JvbGxhYmxlOjotd2Via2l0LXNjcm9sbGJhciAqIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5zY3JvbGxiYXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKSAhaW1wb3J0YW50O1xufVxuXG4uY2Fyb3VzZWwtaXRlbS1jb250YWluZXI6Zmlyc3QtY2hpbGQgPiAuY2Fyb3VzZWwtaXRlbSB7XG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xufVxuXG4uY2Fyb3VzZWwtaXRlbS1jb250YWluZXI6bGFzdC1jaGlsZCA+IC5jYXJvdXNlbC1pdGVtIHtcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xufVxuXG4uY2Fyb3VzZWwtYXJyb3cgPiBpIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbn1cblxuLmFuYS1saW5rIHtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4uY2hhdC1ib3R0b20tb3ZlcmxheSA+IGltZyB7XG4gIGhlaWdodDogMTJweDtcbiAgd2lkdGg6IDEycHg7XG59XG5cbi5hbmEtb25saW5lLWRvdCB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgaGVpZ2h0OiA2cHg7XG4gIHdpZHRoOiA2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMERGNTA7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICBtYXJnaW4tdG9wOiA3cHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5jaGF0LWhpc3RvcnktbG9hZGluZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAtMnB4O1xuICB6LWluZGV4OiAxMDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMCAtMjBweCAwIC0xNXB4O1xufVxuXG4uY2hhdC1oaXN0b3J5LWxvYWRpbmcgPiBtYXQtcHJvZ3Jlc3Mtc3Bpbm5lciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogNTBweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogMzIwcHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogNDgwcHgpIHtcbiAgLnJvb3Qge1xuICAgIC1tb3otYm9yZGVyLXJhZGl1czogMDtcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgfVxuXG4gIC5hbmEtdGl0bGUge1xuICAgIC1tb3otYm9yZGVyLXJhZGl1czogMDtcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgfVxufSIsIi5yb290IHtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLm1lZGlhIHtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbn1cblxuLmNsaWNrYWJsZSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY29udGVudCB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XG59XG5cbi5hbmEtbWluLnJvb3Qge1xuICAgIGhlaWdodDogNTdweCAhaW1wb3J0YW50O1xufVxuXG4uYW5hLW1pbiAuY2hhdC10aHJlYWQsXG4uYW5hLW1pbiAuY2hhdC1pbnB1dC1jb250YWluZXIge1xuICAgIGhlaWdodDogMCAhaW1wb3J0YW50O1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5hbmEtbWluIC5yb290IHtcbiAgICBoZWlnaHQ6IDU3cHggIWltcG9ydGFudDtcbn1cblxuLmNoYXQtdGhyZWFkIHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XG59XG5cbi5jaGF0LW1lc3NhZ2UtZ3JvdXAge1xuICAgIG1hcmdpbjogMTBweCAwO1xufVxuXG4uY2hhdC1tZXNzYWdlLWl0ZW0ge1xuICAgIG1heC13aWR0aDogODAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtaW4td2lkdGg6IDQwJTtcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDNweCAtMXB4IHJnYmEoMTEwLCAxMTAsIDExMCwgMC4xNSk7XG59XG5cbiAgICAuY2hhdC1tZXNzYWdlLWl0ZW0ubWVkaWEgKiAuY2hhdC1tZWRpYSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIH1cblxuICAgIC5jaGF0LW1lc3NhZ2UtaXRlbS5tZWRpYS5pbmNvbWluZyAqIC5jaGF0LW1lZGlhIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMCAxMHB4IDEwcHggMDtcbiAgICB9XG5cbiAgICAgICAgLmNoYXQtbWVzc2FnZS1pdGVtLm1lZGlhLmluY29taW5nICogdmlkZW8uY2hhdC1tZWRpYSxcbiAgICAgICAgLmNoYXQtbWVzc2FnZS1pdGVtLm1lZGlhLmluY29taW5nICogLmNoYXQtbWVkaWEgPiBhdWRpbyB7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwIDEwcHggMCAwICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgIC5jaGF0LW1lc3NhZ2UtaXRlbS5tZWRpYS5vdXRnb2luZyAqIC5jaGF0LW1lZGlhIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweCAwIDAgMTBweDtcbiAgICB9XG5cbiAgICAgICAgLmNoYXQtbWVzc2FnZS1pdGVtLm1lZGlhLm91dGdvaW5nICogdmlkZW8uY2hhdC1tZWRpYSxcbiAgICAgICAgLmNoYXQtbWVzc2FnZS1pdGVtLm1lZGlhLm91dGdvaW5nICogLmNoYXQtbWVkaWEgPiBhdWRpbyB7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4IDAgMCAwICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgIC5jaGF0LW1lc3NhZ2UtaXRlbS50ZXh0IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgfVxuXG4gICAgLmNoYXQtbWVzc2FnZS1pdGVtLnR5cGluZyB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gICAgICAgIG1pbi13aWR0aDogYXV0bztcbiAgICB9XG5cbiAgICAuY2hhdC1tZXNzYWdlLWl0ZW0uaW5jb21pbmcge1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMCAxMHB4IDEwcHggMDtcbiAgICAgICAgYm9yZGVyLWxlZnQtd2lkdGg6IDNweDtcbiAgICAgICAgYm9yZGVyLWxlZnQtc3R5bGU6IHNvbGlkO1xuICAgIH1cblxuICAgIC5jaGF0LW1lc3NhZ2UtaXRlbS5vdXRnb2luZyB7XG4gICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweCAwIDAgMTBweDtcbiAgICAgICAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAzcHg7XG4gICAgICAgIGJvcmRlci1yaWdodC1zdHlsZTogc29saWQ7XG4gICAgfVxuXG4uY2hhdC1tZXNzYWdlLWl0ZW0tY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbmFwcC1jaGF0LXRocmVhZCB7XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbn1cblxuLmRvdHMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQgMHB4LCB0cmFuc3BhcmVudCAycHgsIHJnYigyNTUsIDI1NSwgMjU1KSAycHgsIHJnYigyNTUsIDI1NSwgMjU1KSAyMHB4KSwgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2IoMjAwLCAxOTUsIDE5OSkgMHB4LCByZ2IoMjAwLCAxOTUsIDE5OSkgMnB4LCByZ2IoMjU1LCAyNTUsIDI1NSkgMnB4LCByZ2IoMjU1LCAyNTUsIDI1NSkgMjBweCk7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNDM3cHggLTJweDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDIwcHggMjBweDtcbn1cblxuLmNoYXQtdGV4dCB7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xufVxuXG4uY2hhdC10aW1lIHtcbiAgICBmb250LXNpemU6IDhweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAycHg7XG4gICAgcmlnaHQ6IDhweDtcbn1cblxuICAgIC5jaGF0LXRpbWUgPiBzcGFuIHtcbiAgICAgICAgb3BhY2l0eTogMC40O1xuICAgIH1cblxuLmNoYXQtc3R1YiB7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICAgIGJvdHRvbTogLTEzcHg7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLmluY29taW5nID4gLmNoYXQtc3R1YiB7XG4gICAgYm9yZGVyLXRvcC13aWR0aDogMTNweDtcbiAgICBib3JkZXItdG9wLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItbGVmdDogMTVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogLTNweDtcbn1cblxuLm91dGdvaW5nID4gLmNoYXQtc3R1YiB7XG4gICAgYm9yZGVyLXRvcC13aWR0aDogMTNweDtcbiAgICBib3JkZXItdG9wLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItcmlnaHQ6IDE1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAtM3B4O1xufVxuXG4uY2hhdC1tZXNzYWdlLWxhc3Qge1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbiAgICAuY2hhdC1tZXNzYWdlLWxhc3QgPiAuY2hhdC1zdHViIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuXG4uY2hhdC1ib3R0b20tb3ZlcmxheSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogOS42cHg7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xufVxuXG4ub3V0Z29pbmcgKiAuY2hhdC1ib3R0b20tb3ZlcmxheSB7XG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDAgMTBweDtcbn1cblxuLmluY29taW5nICogLmNoYXQtYm90dG9tLW92ZXJsYXkge1xuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAxMHB4IDA7XG59XG5cbi5tZWRpYSA+IC5jaGF0LXRpbWUge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGJvdHRvbTogNXB4O1xufVxuXG4uY2hhdC1tZWRpYSA+IGF1ZGlvIHtcbiAgICB3aWR0aDogMjMwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTlweDtcbn1cblxudmlkZW8uY2hhdC1tZWRpYSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTlweDtcbn1cblxuXG4vKlxuR3JlZW4gZG90IHVwXG5DYXJvdXNlbCBsZWZ0IHJpZ2h0IGJ1dHRvbiBiYWNrZ3JvdW5kXG5DYXJvdXNlbCBsZWZ0IHJpZ2h0IHZlcnRpY2FsIGNlbnRlclxuYmcgd2hpdGVcbiovXG5cbi5jaGF0LWlucHV0LWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgMTBweCAxMHB4O1xufVxuXG4uY2hhdC1pbnB1dCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4gICAgLmNoYXQtaW5wdXQuY2xpY2sge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICB3aWR0aDogYXV0bztcbiAgICB9XG5cbiAgICAuY2hhdC1pbnB1dC50ZXh0IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIC1tb3otYm9yZGVyLXJhZGl1czogMCAwIDEwcHggMTBweDtcbiAgICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwIDAgMTBweCAxMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwIDAgMTBweCAxMHB4O1xuICAgICAgICBib3gtc2hhZG93OiAwcHggLTNweCAxMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICAgIH1cblxuICAgIC5jaGF0LWlucHV0IGJ1dHRvbi5idG4tY2xpY2sge1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIHBhZGRpbmc6IDdweCAyM3B4O1xuICAgICAgICBib3JkZXI6IHRyYW5zcGFyZW50O1xuICAgICAgICBtYXJnaW46IDAgMTBweCAxMHB4IDEwcHg7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgfVxuXG4gICAgLmNoYXQtaW5wdXQgYnV0dG9uLmJ0bi1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgIHBhZGRpbmc6IDAgMTRweDtcbiAgICAgICAgb3BhY2l0eTogMC44O1xuICAgIH1cblxuICAgICAgICAuY2hhdC1pbnB1dCBidXR0b24uYnRuLWljb246ZGlzYWJsZWQge1xuICAgICAgICAgICAgb3BhY2l0eTogMC4xMDtcbiAgICAgICAgfVxuXG4gICAgLmNoYXQtaW5wdXQgaSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB9XG5cbi5jaGF0LXRleHQtaW5wdXQge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHBhZGRpbmc6IDEycHggMTZweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuLmNoYXQtaW5wdXQtY2xpY2stY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIC8qUmVtb3ZlIGJlbG93IGZvciBjbGljayBidXR0b25zIHRvIHNjcm9sbCBob3Jpem9udGFsbHkqL1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5jaGF0LWZpbGUtYXR0YWNobWVudCB7XG4gICAgaGVpZ2h0OiA2MHB4ICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuLmFuYS1zZW50LXRpY2sge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxcHgpO1xufVxuXG4uYW5hLWRlbGl2ZXJlZC10aWNrIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMXB4KTtcbn1cblxuLmNhcm91c2VsLXdyYXBwZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW46IDAgLTIwcHg7XG59XG5cbiAgICAuY2Fyb3VzZWwtd3JhcHBlciA+IC5jYXJvdXNlbC1hcnJvdyB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIHBhZGRpbmc6IDVweCAwIDA7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgb3BhY2l0eTogMC44NTtcbiAgICB9XG5cbiAgICAgICAgLmNhcm91c2VsLXdyYXBwZXIgPiAuY2Fyb3VzZWwtYXJyb3c6aG92ZXIge1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXJvdXNlbC13cmFwcGVyID4gLmNhcm91c2VsLWFycm93LnJpZ2h0IHtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogLTFweCAwcHggMXB4IDFweCByZ2JhKDAsMCwwLDAuMSk7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHggMCAwIDVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXJvdXNlbC13cmFwcGVyID4gLmNhcm91c2VsLWFycm93LmxlZnQge1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDFweCAwcHggMXB4IDFweCByZ2JhKDAsMCwwLDAuMSk7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwIDVweCA1cHggMDtcbiAgICAgICAgfVxuXG4uY2Fyb3VzZWwtYXJyb3cucmlnaHQgc3ZnIHtcbiAgICB3aWR0aDogMjRweDtcbiAgICBoZWlnaHQ6IDI0cHg7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG4gICAgZmlsbDogIzMzMztcbn1cblxuLmNhcm91c2VsLWFycm93LmxlZnQgc3ZnIHtcbiAgICB3aWR0aDogMjRweDtcbiAgICBoZWlnaHQ6IDI0cHg7XG4gICAgZmlsbDogIzMzMztcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG59XG5cbi5jYXJvdXNlbC1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLW1zLWZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi5jYXJvdXNlbC1pdGVtLW1lZGlhID4gaW1nLFxuLmNhcm91c2VsLWl0ZW0tbWVkaWEgPiB2aWRlbyxcbi5jYXJvdXNlbC1pdGVtLW1lZGlhID4gYXVkaW8ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC1tb3otYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XG4gICAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcbn1cblxuXG5cbi5jYXJvdXNlbC1pdGVtLW1lZGlhIHtcbiAgICBwYWRkaW5nOiAyMHB4IDA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1pbi1oZWlnaHQ6IDE3MHB4O1xufVxuXG4uY2Fyb3VzZWwtaXRlbSB7XG4gICAgd2lkdGg6IDI0MHB4O1xuICAgIG1hcmdpbjogMCAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDZweCAxcHggcmdiYSgxMTAsIDExMCwgMTEwLCAwLjE1KTtcbn1cblxuLmNhcm91c2VsLWl0ZW0tY29udGVudCB7XG4gICAgcGFkZGluZzogMCAyMHB4O1xuICAgIGZsZXgtZ3JvdzogMTtcbn1cblxuICAgIC5jYXJvdXNlbC1pdGVtLWNvbnRlbnQubm8tbWVkaWEge1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgfVxuXG4uY2Fyb3VzZWwtaXRlbS1jb250YWluZXIge1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICBwYWRkaW5nOiAzcHg7IC8qRm9yIGNhcm91c2VsIGl0ZW0gc2hhZG93IHRvIGJlIHZpc2libGUqL1xufVxuXG4uY2Fyb3VzZWwtaXRlbS10aXRsZSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luOiDvv70wIDAgMnB4IDA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmNhcm91c2VsLWl0ZW0tZGVzYyB7XG4gICAgY29sb3I6IGdyYXk7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIG1hcmdpbjogMnB4IDAgMTBweCAwO1xufVxuXG4uY2Fyb3VzZWwtaXRlbS1idXR0b24gPiBidXR0b24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnO1xufVxuXG4udGV4dC13cmFwIHtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xufVxuXG4uY2Fyb3VzZWwtY29udGFpbmVyID4gdGFibGUge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5hbmEtdGl0bGUge1xuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgICB6LWluZGV4OiAxMDA7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC1tb3otYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDAgMDtcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwIDA7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDAgMDtcbn1cblxuLmFuYS1taW4gLmFuYS10aXRsZSB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDZweCAxcHggcmdiYSgwLDAsMCwwLjM2KTtcbiAgICBtYXJnaW4tbGVmdDogNnB4O1xuICAgIG1hcmdpbi1yaWdodDogNnB4O1xufVxuXG4uYW5hLWxvZ28ge1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtYXJnaW46IDAgMTVweCAtNHB4IDA7XG59XG5cbiAgICAuYW5hLWxvZ28gPiBpbWcge1xuICAgICAgICB3aWR0aDogMzVweDtcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwIDdweCA3cHggN3B4O1xuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDI1cHggM3B4IHJnYmEoMCwwLDAsMC4xOSk7XG4gICAgICAgIG1hcmdpbi10b3A6IDRweDtcbiAgICB9XG5cbi5hbmEtY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiA2MyU7XG59XG5cbiAgICAuYW5hLWNvbnRlbnQgPiAudGl0bGUge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuXG4gICAgLmFuYS1jb250ZW50ID4gLnN1YnRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICBvcGFjaXR5OiAwLjk7XG4gICAgfVxuXG4uYW5hLWFjdGlvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4gICAgLmFuYS1hY3Rpb25zIC5hbmEtYWN0aW9uIHtcbiAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICAgIHdpZHRoOiAyNHB4O1xuICAgICAgICBwYWRkaW5nOiA0cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cblxuICAgICAgICAuYW5hLWFjdGlvbnMgLmFuYS1hY3Rpb246aG92ZXIge1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4xKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hbmEtYWN0aW9ucyAuYW5hLWFjdGlvbiBzdmcge1xuICAgICAgICAgICAgaGVpZ2h0OiAxNnB4O1xuICAgICAgICAgICAgd2lkdGg6IDE2cHg7XG4gICAgICAgIH1cblxuICAgICAgICAgICAgLmFuYS1hY3Rpb25zIC5hbmEtYWN0aW9uIHN2ZyBwYXRoIHtcbiAgICAgICAgICAgICAgICBmaWxsOiAjZmZmO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIC5hbmEtYWN0aW9ucyAuYW5hLWFjdGlvbi5yZWZyZXNoIHN2ZyB7XG4gICAgICAgICAgICBoZWlnaHQ6IDE0cHg7XG4gICAgICAgICAgICB3aWR0aDogMTRweDtcbiAgICAgICAgfVxuXG4uYW5hLW1pbm1heC1idG4ge1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBoZWlnaHQ6IDNweDtcbiAgICB3aWR0aDogMTVweDtcbiAgICBvcGFjaXR5OiAwLjY7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTBweDtcbiAgICByaWdodDogMTBweDtcbn1cblxuLmFuYS1taW4gLmFuYS1taW5tYXgtYnRuIHtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgaGVpZ2h0OiAxMXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIHdpZHRoOiAxMXB4O1xufVxuXG4uYW5hLW1pbiAuYW5hLWxvZ28ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjJweCk7XG59XG5cbiAgICAuYW5hLW1pbiAuYW5hLWxvZ28gPiBpbWcge1xuICAgICAgICBib3gtc2hhZG93OiAwcHggMXB4IDZweCAxcHggcmdiYSgwLDAsMCwwLjM2KTtcbiAgICB9XG5cbi5pbnB1dC1tc2cge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDVweCAxNnB4O1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBjb2xvcjogY3JpbXNvbjtcbn1cblxuLnR5cGluZy1pbmRpY2F0b3ItY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xufVxuXG4udHlwaW5nLWluZGljYXRvciB7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgZGlzcGxheTogdGFibGU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4gICAgLnR5cGluZy1pbmRpY2F0b3Igc3BhbiB7XG4gICAgICAgIGhlaWdodDogNnB4O1xuICAgICAgICB3aWR0aDogNnB4O1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgbWFyZ2luOiAwIDFweDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgb3BhY2l0eTogMC40O1xuICAgIH1cblxuICAgICAgICAudHlwaW5nLWluZGljYXRvciBzcGFuOm50aC1vZi10eXBlKDEpIHtcbiAgICAgICAgICAgIC1tb3otYW5pbWF0aW9uOiAxcyBibGluayBpbmZpbml0ZSAwLjMzMzNzO1xuICAgICAgICAgICAgLW8tYW5pbWF0aW9uOiAxcyBibGluayBpbmZpbml0ZSAwLjMzMzNzO1xuICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IDFzIGJsaW5rIGluZmluaXRlIDAuMzMzM3M7XG4gICAgICAgICAgICBhbmltYXRpb246IDFzIGJsaW5rIGluZmluaXRlIDAuMzMzM3M7XG4gICAgICAgIH1cblxuICAgICAgICAudHlwaW5nLWluZGljYXRvciBzcGFuOm50aC1vZi10eXBlKDIpIHtcbiAgICAgICAgICAgIC1tb3otYW5pbWF0aW9uOiAxcyBibGluayBpbmZpbml0ZSAwLjY2NjZzO1xuICAgICAgICAgICAgLW8tYW5pbWF0aW9uOiAxcyBibGluayBpbmZpbml0ZSAwLjY2NjZzO1xuICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IDFzIGJsaW5rIGluZmluaXRlIDAuNjY2NnM7XG4gICAgICAgICAgICBhbmltYXRpb246IDFzIGJsaW5rIGluZmluaXRlIDAuNjY2NnM7XG4gICAgICAgIH1cblxuICAgICAgICAudHlwaW5nLWluZGljYXRvciBzcGFuOm50aC1vZi10eXBlKDMpIHtcbiAgICAgICAgICAgIC1tb3otYW5pbWF0aW9uOiAxcyBibGluayBpbmZpbml0ZSAwLjk5OTlzO1xuICAgICAgICAgICAgLW8tYW5pbWF0aW9uOiAxcyBibGluayBpbmZpbml0ZSAwLjk5OTlzO1xuICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IDFzIGJsaW5rIGluZmluaXRlIDAuOTk5OXM7XG4gICAgICAgICAgICBhbmltYXRpb246IDFzIGJsaW5rIGluZmluaXRlIDAuOTk5OXM7XG4gICAgICAgIH1cblxuQC1tb3ota2V5ZnJhbWVzIGJsaW5rIHtcbiAgICA1MCUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIGJsaW5rIHtcbiAgICA1MCUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyBibGluayB7XG4gICAgNTAlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBidWxnZSB7XG4gICAgNTAlIHtcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICAgICAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgICAgICAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICAgIH1cbn1cblxuQC1tb3ota2V5ZnJhbWVzIGJ1bGdlIHtcbiAgICA1MCUge1xuICAgICAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICAgICAgICAtby10cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIGJ1bGdlIHtcbiAgICA1MCUge1xuICAgICAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICAgICAgICAtby10cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gICAgfVxufVxuXG4uc2Nyb2xsYmFyOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5zY3JvbGxiYXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICB3aWR0aDogNXB4O1xuICAgIGhlaWdodDogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uc2Nyb2xsYWJsZTo6LXdlYmtpdC1zY3JvbGxiYXIgKiB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5zY3JvbGxiYXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwwLDAsLjMpICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwuMykgIWltcG9ydGFudDtcbn1cblxuLmNhcm91c2VsLWl0ZW0tY29udGFpbmVyOmZpcnN0LWNoaWxkID4gLmNhcm91c2VsLWl0ZW0ge1xuICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xufVxuXG4uY2Fyb3VzZWwtaXRlbS1jb250YWluZXI6bGFzdC1jaGlsZCA+IC5jYXJvdXNlbC1pdGVtIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG59XG5cbi5jYXJvdXNlbC1hcnJvdyA+IGkge1xuICAgIGNvbG9yOiByZ2JhKDAsMCwwLC42KTtcbn1cblxuLmFuYS1saW5rIHtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLmNoYXQtYm90dG9tLW92ZXJsYXkgPiBpbWcge1xuICAgIGhlaWdodDogMTJweDtcbiAgICB3aWR0aDogMTJweDtcbn1cblxuLmFuYS1vbmxpbmUtZG90IHtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgaGVpZ2h0OiA2cHg7XG4gICAgd2lkdGg6IDZweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBERjUwO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICAgIG1hcmdpbi10b3A6IDdweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5jaGF0LWhpc3RvcnktbG9hZGluZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogLTJweDtcbiAgICB6LWluZGV4OiAxMDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMCAtMjBweCAwIC0xNXB4O1xufVxuXG4gICAgLmNoYXQtaGlzdG9yeS1sb2FkaW5nID4gbWF0LXByb2dyZXNzLXNwaW5uZXIge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgfVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoIDogMzIwcHgpIGFuZCAobWF4LWRldmljZS13aWR0aCA6IDQ4MHB4KSB7XG4gICAgLnJvb3Qge1xuICAgICAgICAtbW96LWJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICB9XG5cbiAgICAuYW5hLXRpdGxlIHtcbiAgICAgICAgLW1vei1ib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgfVxufVxuIl19 */");

/***/ }),

/***/ "./src/app/components/chat-thread/chat-thread.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/chat-thread/chat-thread.component.ts ***!
  \*****************************************************************/
/*! exports provided: ChatThreadComponent, ModelHelpers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatThreadComponent", function() { return ChatThreadComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelHelpers", function() { return ModelHelpers; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _models_ana_chat_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/ana-chat.models */ "./src/app/models/ana-chat.models.ts");
/* harmony import */ var _models_ana_chat_vm_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/ana-chat-vm.models */ "./src/app/models/ana-chat-vm.models.ts");
/* harmony import */ var _services_stomp_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/stomp.service */ "./src/app/services/stomp.service.ts");
/* harmony import */ var _services_simulator_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/simulator.service */ "./src/app/services/simulator.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_utilities_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/utilities.service */ "./src/app/services/utilities.service.ts");
/* harmony import */ var _services_chain_delay_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/chain-delay.service */ "./src/app/services/chain-delay.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _services_info_dialog_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/info-dialog.service */ "./src/app/services/info-dialog.service.ts");













let ChatThreadComponent = class ChatThreadComponent {
    constructor(stompService, apiService, dialog, simulator, sanitizer, infoDialog, chainDelayService) {
        this.stompService = stompService;
        this.apiService = apiService;
        this.dialog = dialog;
        this.simulator = simulator;
        this.sanitizer = sanitizer;
        this.infoDialog = infoDialog;
        this.chainDelayService = chainDelayService;
        this.isMin = false;
        this.isMute = false;
        this.carItemWidth = 245;
        this.fetchingHistory = false;
        this.lastScrollTop = 0;
        this._handleMessageReceivedDelegate = (message) => {
            if (this.settings && this.settings.stompConfig && this.settings.stompConfig.debug) {
                console.log("Socket Message Received: ");
                console.log(message);
            }
            switch (message.data.type) {
                case _models_ana_chat_models__WEBPACK_IMPORTED_MODULE_4__["MessageType"].INPUT:
                    {
                        this.chainDelayService.delay((queueLength) => {
                            this.chatInput.resetInputs(); //Currently only one input item is supported
                            this.chatInput.setInput(new _models_ana_chat_vm_models__WEBPACK_IMPORTED_MODULE_5__["ChatInputItemVM"](message));
                            this.chatThread.removeTyping();
                            this.textInputFocus();
                        }, 0);
                        break;
                    }
                case _models_ana_chat_models__WEBPACK_IMPORTED_MODULE_4__["MessageType"].SIMPLE:
                case _models_ana_chat_models__WEBPACK_IMPORTED_MODULE_4__["MessageType"].CAROUSEL:
                    {
                        this.chatThread.setTyping();
                        this.chainDelayService.delay((queueLength) => {
                            let msg = new _models_ana_chat_vm_models__WEBPACK_IMPORTED_MODULE_5__["ChatMessageVM"](message, _models_ana_chat_vm_models__WEBPACK_IMPORTED_MODULE_5__["Direction"].Incoming, "");
                            this.chatThread.addMessage(msg);
                            this.notifyNewMsg();
                            if (message.data.type == _models_ana_chat_models__WEBPACK_IMPORTED_MODULE_4__["MessageType"].CAROUSEL) {
                                let carItemsWithOptions = msg.carouselMessageData().content.items.filter(x => x.options && x.options.length > 0).length;
                                if (carItemsWithOptions > 0) //Hide the fixed input textbox if carousel has options
                                    this.chatInput.resetInputs();
                            }
                            if (queueLength > 0)
                                this.chatThread.setTyping();
                        }, 2000);
                        break;
                    }
                default:
                    console.log(`Unsupported message type: ${_models_ana_chat_models__WEBPACK_IMPORTED_MODULE_4__["MessageType"][message.data.type]}`);
            }
        };
        this.MH = new ModelHelpers();
        this.chatThread = new _models_ana_chat_vm_models__WEBPACK_IMPORTED_MODULE_5__["ChatThreadVM"](this.sanitizer);
        this.chatInput = new _models_ana_chat_vm_models__WEBPACK_IMPORTED_MODULE_5__["ChatInputVM"](this.dialog, this.chatThread, this.apiService, this.stompService, this, this.sanitizer);
    }
    ngAfterViewInit() {
        if (this.chatThreadView)
            this.chatThread.chatThreadView = this.chatThreadView.nativeElement;
    }
    connectionStatusMessage() {
        if (!this.stompService)
            return '';
        switch (this.stompService.connectionStatus) {
            case _services_stomp_service__WEBPACK_IMPORTED_MODULE_6__["StompConnectionStatus"].Connected:
                return 'Available';
            case _services_stomp_service__WEBPACK_IMPORTED_MODULE_6__["StompConnectionStatus"].Connecting:
                return 'Trying to connect...';
            case _services_stomp_service__WEBPACK_IMPORTED_MODULE_6__["StompConnectionStatus"].Disconnected:
                return 'Not available';
            default:
                return '';
        }
    }
    setMin(min) {
        this.isMin = min;
    }
    scrollCarousel(carId, direction) {
        if (this.carouselContainers && this.carouselContainers.length > 0) {
            let carousels = this.carouselContainers.map(x => x.nativeElement).filter(x => x.classList.contains(carId));
            if (carousels) {
                let car = carousels[0];
                if (direction == 'right') {
                    if (car.scrollBy) {
                        car.scrollBy({ behavior: 'smooth', left: this.carItemWidth }); //The 'left' value should be the width + margin of a single carousel item set in the CSS
                    }
                    else {
                        car.scrollLeft += this.carItemWidth;
                    }
                }
                else if (direction == 'left') {
                    if (car.scrollBy) {
                        car.scrollBy({ behavior: 'smooth', left: -this.carItemWidth });
                    }
                    else {
                        car.scrollLeft -= this.carItemWidth;
                    }
                }
            }
        }
    }
    canScrollCarousel(carId, direction) {
        return true;
        //Below implementation is not accurate.
        //if (this.carouselContainers && this.carouselContainers.length > 0) {
        //    let carousels = this.carouselContainers.map(x => x.nativeElement as HTMLDivElement).filter(x => x.classList.contains(carId));
        //    if (carousels) {
        //        let car = carousels[0];
        //        if (direction == 'right')
        //            return car.scrollLeft < car.scrollWidth;
        //        else if (direction == 'left')
        //            return car.scrollLeft > 0;
        //    }
        //}
    }
    isLastInMessageGroup(msg) {
        let msgsOnly = this.chatThread.messages.filter(x => x.getMessageContentType() != _models_ana_chat_models__WEBPACK_IMPORTED_MODULE_4__["MessageContentType"].Typing);
        let index = msgsOnly.indexOf(msg);
        if (index != -1) {
            if (index >= (msgsOnly.length - 1))
                return true;
            if (msgsOnly[index].direction != msgsOnly[index + 1].direction)
                return true;
        }
        return false;
    }
    isLastMessage(msg) {
        let msgsOnly = this.chatThread.messages.filter(x => x.getMessageContentType() != _models_ana_chat_models__WEBPACK_IMPORTED_MODULE_4__["MessageContentType"].Typing);
        let index = msgsOnly.indexOf(msg);
        return index == msgsOnly.length - 1;
    }
    handleCarouselClick(chatMessage, carOption) {
        let carMsg = chatMessage.carouselMessageData();
        if (!carMsg.content.input)
            carMsg.content.input = {
                val: ""
            };
        if (carOption.type == _models_ana_chat_models__WEBPACK_IMPORTED_MODULE_4__["ButtonType"].URL) {
            let v = JSON.parse(carOption.value);
            carMsg.content.input.val = v.value;
            window.open(v.url, '_blank');
        }
        else
            carMsg.content.input.val = carOption.value;
        let msg = this.chatThread.addTextReply(carOption.title, _services_utilities_service__WEBPACK_IMPORTED_MODULE_9__["UtilitiesService"].uuidv4());
        this._sendMessageDelegate(new _models_ana_chat_models__WEBPACK_IMPORTED_MODULE_4__["ANAChatMessage"]({
            meta: _services_utilities_service__WEBPACK_IMPORTED_MODULE_9__["UtilitiesService"].getReplyMeta(chatMessage.meta),
            data: carMsg
        }), msg);
        this.chatInput.resetInputs();
    }
    insertThreadMessageForCarouselInput(chatMessage) {
        try {
            let carMsg = chatMessage.carouselMessageData();
            let msg = null;
            carMsg.content.items.forEach(x => {
                try {
                    x.options.forEach(y => {
                        try {
                            let value = "";
                            if (y.type == _models_ana_chat_models__WEBPACK_IMPORTED_MODULE_4__["ButtonType"].URL) {
                                let v = JSON.parse(y.value);
                                value = v.value;
                            }
                            else
                                value = y.value;
                            if (value == carMsg.content.input.val)
                                msg = this.chatThread.addTextReply(y.title, "", chatMessage.meta.timestamp, true);
                        }
                        catch (e) {
                            console.log(e);
                        }
                    });
                }
                catch (e) {
                    console.log(e);
                }
            });
            return msg;
        }
        catch (e) {
            console.log(e);
            return null;
        }
    }
    chatThreadOnScroll(event) {
        if (!this.chatThread.chatThreadView)
            return;
        if (!this.settings || this.settings.simulatorMode)
            return;
        let currentScrollTop = this.chatThread.chatThreadView.scrollTop;
        if (currentScrollTop < this.lastScrollTop) {
            if (this.fetchingHistory)
                return;
            if (this.chatThread.chatThreadView) {
                if (this.chatThread.chatThreadView.scrollTop <= 2) {
                    this.fetchingHistory = true;
                    this.loadHistory(() => this.fetchingHistory = false);
                }
            }
        }
        this.lastScrollTop = currentScrollTop;
    }
    chatTextInputOnFocus() {
        this.chatThread.scrollLastIntoView(1000);
    }
    textInputFocus() {
        let ele = this.inputContainerRef.nativeElement;
        if (ele) {
            setTimeout(() => {
                let inputEle = ele.querySelector('#chat-text');
                if (inputEle)
                    inputEle.focus();
            }, 100);
        }
    }
    loadHistory(next) {
        if (!this.settings || this.settings.simulatorMode)
            return;
        let oldMsgTimestamp = ((this.chatThread.messages && this.chatThread.messages.length > 0) ? this.chatThread.messages[0].meta.timestamp : null);
        let oldScrollHeight = null;
        if (this.chatThread.chatThreadView)
            oldScrollHeight = this.chatThread.chatThreadView.scrollHeight;
        this.apiService.fetchHistory(oldMsgTimestamp).subscribe(resp => {
            try {
                let chatMsgs = resp.content.map(x => new _models_ana_chat_models__WEBPACK_IMPORTED_MODULE_4__["ANAChatMessage"](x));
                for (let i = 0; i < chatMsgs.length; i++) {
                    let chatMsg = chatMsgs[i];
                    let direction = chatMsg.meta.recipient.id == this.stompService.config.businessId ? _models_ana_chat_vm_models__WEBPACK_IMPORTED_MODULE_5__["Direction"].Outgoing : _models_ana_chat_vm_models__WEBPACK_IMPORTED_MODULE_5__["Direction"].Incoming;
                    switch (chatMsg.data.type) {
                        case _models_ana_chat_models__WEBPACK_IMPORTED_MODULE_4__["MessageType"].CAROUSEL:
                            if (direction == _models_ana_chat_vm_models__WEBPACK_IMPORTED_MODULE_5__["Direction"].Incoming)
                                this.chatThread.addMessage(new _models_ana_chat_vm_models__WEBPACK_IMPORTED_MODULE_5__["ChatMessageVM"](chatMsg, direction, ""), true);
                            else if (direction == _models_ana_chat_vm_models__WEBPACK_IMPORTED_MODULE_5__["Direction"].Outgoing)
                                this.insertThreadMessageForCarouselInput(new _models_ana_chat_vm_models__WEBPACK_IMPORTED_MODULE_5__["ChatMessageVM"](chatMsg, direction, ""));
                            break;
                        case _models_ana_chat_models__WEBPACK_IMPORTED_MODULE_4__["MessageType"].SIMPLE:
                            if (direction == _models_ana_chat_vm_models__WEBPACK_IMPORTED_MODULE_5__["Direction"].Incoming) //Outgoing messages are never 'SIMPLE',  they are mostly 'INPUT' and rarely 'CAROUSEL'
                                this.chatThread.addMessage(new _models_ana_chat_vm_models__WEBPACK_IMPORTED_MODULE_5__["ChatMessageVM"](chatMsg, direction, ""), true);
                            break;
                        case _models_ana_chat_models__WEBPACK_IMPORTED_MODULE_4__["MessageType"].INPUT:
                            if (direction == _models_ana_chat_vm_models__WEBPACK_IMPORTED_MODULE_5__["Direction"].Outgoing) { //Ignore incoming input messages as their outgoing messages will be present (along with user given data).
                                this.chatInput.insertThreadMessageForInput(new _models_ana_chat_vm_models__WEBPACK_IMPORTED_MODULE_5__["ChatInputItemVM"](chatMsg));
                            }
                            break;
                        default:
                            break;
                    }
                }
                if (!oldMsgTimestamp) { //Display input and scroll to last only for page 0 of the history (latest page)
                    if (chatMsgs[0] && chatMsgs[0].data.type == _models_ana_chat_models__WEBPACK_IMPORTED_MODULE_4__["MessageType"].INPUT) {
                        let inputContent = chatMsgs[0].data.content;
                        if (!inputContent.input || Object.keys(inputContent.input).length <= 0)
                            this.chatInput.setInput(new _models_ana_chat_vm_models__WEBPACK_IMPORTED_MODULE_5__["ChatInputItemVM"](chatMsgs[0]));
                    }
                    this.chatThread.scrollToLast();
                }
                else {
                    if (oldScrollHeight && this.chatThread.chatThreadView) {
                        window.requestAnimationFrame(() => {
                            this.chatThread.chatThreadView.scrollTop = (this.chatThread.chatThreadView.scrollHeight - oldScrollHeight);
                        });
                    }
                }
            }
            catch (e) {
                console.log(e);
            }
            if (next)
                next();
        }, err => {
            if (next)
                next();
        });
    }
    removeConsecutiveErrorsMessage() {
        let oldMsgIdx = this.chatThread.messages.findIndex(x => x.messageAckId == _services_utilities_service__WEBPACK_IMPORTED_MODULE_9__["Config"].consecutiveErrorsMessageAckId);
        if (oldMsgIdx != -1)
            this.chatThread.messages.splice(oldMsgIdx, 1);
    }
    notifyNewMsg() {
        if (this.settings.appConfig.msgSounds && document.visibilityState != 'visible' && !this.isMute) {
            let audio = new Audio('assets/sounds/new-msg.mp3');
            audio.play();
        }
    }
    openWindow(url) {
        if (typeof url == 'string')
            window.open(url);
        else if (typeof url == 'object') {
            window.open(url.changingThisBreaksApplicationSecurity);
        }
    }
    viewImage(url) {
        this.fullScreenImage = url;
        let imgContainer = document.querySelector("div.img-container");
        let image = document.querySelector("div.img-container>img");
        if (imgContainer && image) {
            image.alt = '';
            image.style.transform = '';
            imgContainer.style.transform = '';
            this.setupImageViewerGestures(imgContainer, image);
        }
    }
    viewVideo(url) {
        this.fullScreenVideo = url;
    }
    closeImageViewer() {
        this.fullScreenImage = null;
        this.destroyHammer();
    }
    closeVideoViewer() {
        this.fullScreenVideo = null;
    }
    destroyHammer() {
        if (this.hammerManager) {
            this.hammerManager.destroy();
            delete this.hammerManager;
        }
    }
    setupImageViewerGestures(imgContainer, image) {
        this.destroyHammer();
        if (!_services_utilities_service__WEBPACK_IMPORTED_MODULE_9__["UtilitiesService"].isMobile()) {
            //Ignore touch handlers if mouse is detected
            return;
        }
        this.hammerManager = new hammerjs__WEBPACK_IMPORTED_MODULE_3__["Manager"](image);
        let pinch = new hammerjs__WEBPACK_IMPORTED_MODULE_3__["Pinch"]();
        let pan = new hammerjs__WEBPACK_IMPORTED_MODULE_3__["Pan"]();
        pinch.recognizeWith(pan);
        this.hammerManager.add([pinch, pan]);
        let adjustScale = 1;
        let adjustDeltaX = 0;
        let adjustDeltaY = 0;
        let currentScale = null;
        let currentDeltaX = null;
        let currentDeltaY = null;
        // Prevent long press saving on mobiles.
        imgContainer.ontouchstart = function (e) {
            e.preventDefault();
        };
        // Handles pinch and pan events/transforming at the same time;
        this.hammerManager.on("pinch pan", function (ev) {
            let transforms = [];
            // Adjusting the current pinch/pan event properties using the previous ones set when they finished touching
            currentScale = adjustScale * ev.scale;
            currentDeltaX = adjustDeltaX + (ev.deltaX / currentScale);
            currentDeltaY = adjustDeltaY + (ev.deltaY / currentScale);
            // Concatinating and applying parameters.
            transforms.push(`scale(${currentScale})`);
            transforms.push(`translate(${currentDeltaX}px,${currentDeltaY}px)`);
            imgContainer.style.transform = transforms.join(' ');
        });
        this.hammerManager.on("panend pinchend", function (ev) {
            // Saving the final transforms for adjustment next time the user interacts.
            adjustScale = currentScale;
            adjustDeltaX = currentDeltaX;
            adjustDeltaY = currentDeltaY;
        });
    }
    getStarted(clearThread, askConfirmation) {
        if (askConfirmation) {
            this.infoDialog.confirm("Start a fresh chat?", "Restarting the chat will clear current chat messages. Are you sure?", (ok) => {
                if (ok) {
                    this.getStarted(true, false);
                }
            }, "Yes", "No");
            return;
        }
        if (clearThread) {
            this.fetchingHistory = true;
            setTimeout(() => this.fetchingHistory = false, 1000);
            this.chatThread.messages = [];
            this.chatInput.resetInputs();
        }
        let firstMsg = new _models_ana_chat_models__WEBPACK_IMPORTED_MODULE_4__["ANAChatMessage"]({
            "meta": {
                "sender": {
                    "id": this.stompService.config.businessId,
                    "medium": 3
                },
                "recipient": {
                    "id": this.stompService.config.customerId,
                    "medium": 3
                },
                "senderType": _models_ana_chat_models__WEBPACK_IMPORTED_MODULE_4__["SenderType"].USER,
                "flowId": this.stompService.config.flowId,
                "previousFlowId": this.stompService.config.flowId,
                "currentFlowId": this.stompService.config.flowId,
                "timestamp": new Date().getTime(),
            },
            "data": {
                "type": 2,
                "content": {
                    "inputType": _models_ana_chat_models__WEBPACK_IMPORTED_MODULE_4__["InputType"].OPTIONS,
                    "mandatory": 1,
                    "options": [
                        {
                            "title": "Get Started",
                            "value": "GetStarted"
                        }
                    ],
                    "input": {
                        "val": ""
                    }
                }
            },
            "events": [
                {
                    "type": _models_ana_chat_models__WEBPACK_IMPORTED_MODULE_4__["EventType"].SET_SESSION_DATA,
                    "data": JSON.stringify(_services_utilities_service__WEBPACK_IMPORTED_MODULE_9__["UtilitiesService"].settings.appConfig.initVerbs)
                }
            ]
        });
        let msg = new _models_ana_chat_vm_models__WEBPACK_IMPORTED_MODULE_5__["ChatMessageVM"](firstMsg, _models_ana_chat_vm_models__WEBPACK_IMPORTED_MODULE_5__["Direction"].Outgoing, _services_utilities_service__WEBPACK_IMPORTED_MODULE_9__["UtilitiesService"].uuidv4()); //Pseudo, not actually added to thread. 
        this._sendMessageDelegate(new _models_ana_chat_models__WEBPACK_IMPORTED_MODULE_4__["ANAChatMessage"]({
            meta: _services_utilities_service__WEBPACK_IMPORTED_MODULE_9__["UtilitiesService"].getReplyMeta(firstMsg.meta),
            data: firstMsg.data,
            events: firstMsg.events
        }), msg);
    }
    ngOnInit() {
        this.settings = _services_utilities_service__WEBPACK_IMPORTED_MODULE_9__["UtilitiesService"].settings;
        if (this.settings && this.settings.stompConfig) {
            this._sendMessageDelegate = (a, b) => this.stompService.sendMessage(a, b);
            this.stompService.handleMessageReceived = this._handleMessageReceivedDelegate;
            this.stompService.handleConnect = () => {
                if (this.chatThread.messages.length <= 0) {
                    this.getStarted(false, false);
                }
                else {
                    //Retrying all pending messages in the chat thread.
                    this.removeConsecutiveErrorsMessage();
                    let pendingMsgs = this.chatThread.messages.filter(x => x.status == _models_ana_chat_vm_models__WEBPACK_IMPORTED_MODULE_5__["MessageStatus"].SentTimeout || x.status == _models_ana_chat_vm_models__WEBPACK_IMPORTED_MODULE_5__["MessageStatus"].SentToServer && x.retrySending);
                    pendingMsgs.forEach(x => x.retrySending());
                }
            };
            this.stompService.handleAck = (messageAckId, deliveredAck) => {
                if (deliveredAck) {
                    //For deliveredAck, msgAckId is the msg.meta.id
                    let msg = this.chatThread.messages.find(x => x.meta.id == messageAckId);
                    if (msg) {
                        msg.status = _models_ana_chat_vm_models__WEBPACK_IMPORTED_MODULE_5__["MessageStatus"].DelieveredToTarget;
                        msg.clearTimeoutTimer();
                    }
                }
                else {
                    let msg = this.chatThread.messages.find(x => x.messageAckId == messageAckId);
                    if (msg) {
                        msg.status = _models_ana_chat_vm_models__WEBPACK_IMPORTED_MODULE_5__["MessageStatus"].ReceivedAtServer;
                        msg.clearTimeoutTimer();
                    }
                }
            };
            this.stompService.handleTyping = () => {
                this.chatThread.setTyping();
            };
            this.stompService.handleConsecutiveErrorsState = () => {
                this.removeConsecutiveErrorsMessage();
                this.chatThread.addTextIncoming(_services_utilities_service__WEBPACK_IMPORTED_MODULE_9__["Config"].consecutiveErrorsMessageText, _services_utilities_service__WEBPACK_IMPORTED_MODULE_9__["Config"].consecutiveErrorsMessageAckId);
            };
            this.loadHistory(() => {
                try {
                    if (window.parent && window.parent.postMessage) {
                        window.parent.postMessage({
                            type: "LOADED"
                        }, "*");
                    }
                }
                catch (e) { }
                this.stompService.connect();
            });
        }
        if (this.settings.simulatorMode) {
            this.fetchingHistory = false;
            this.simulator.handleMessageReceived = this._handleMessageReceivedDelegate;
            this.simulator.handleResetSignal = () => {
                this.chatThread.messages = [];
                this.chatInput.resetInputs();
            };
            this._sendMessageDelegate = (a, b) => this.simulator.sendMessage(a, b);
        }
    }
    carouselItemHasMedia(carItem) {
        return carItem.media && (carItem.media.type != null || carItem.media.type != undefined) && carItem.media.url;
    }
};
ChatThreadComponent.ctorParameters = () => [
    { type: _services_stomp_service__WEBPACK_IMPORTED_MODULE_6__["StompService"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_8__["APIService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _services_simulator_service__WEBPACK_IMPORTED_MODULE_7__["SimulatorService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["DomSanitizer"] },
    { type: _services_info_dialog_service__WEBPACK_IMPORTED_MODULE_12__["InfoDialogService"] },
    { type: _services_chain_delay_service__WEBPACK_IMPORTED_MODULE_10__["ChainDelayService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("inputContainer", { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], ChatThreadComponent.prototype, "inputContainerRef", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("chatThreadView", { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], ChatThreadComponent.prototype, "chatThreadView", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])("carouselContainer"),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], ChatThreadComponent.prototype, "carouselContainers", void 0);
ChatThreadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chat-thread',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./chat-thread.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/chat-thread/chat-thread.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./chat-thread.component.scss */ "./src/app/components/chat-thread/chat-thread.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_stomp_service__WEBPACK_IMPORTED_MODULE_6__["StompService"],
        _services_api_service__WEBPACK_IMPORTED_MODULE_8__["APIService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
        _services_simulator_service__WEBPACK_IMPORTED_MODULE_7__["SimulatorService"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["DomSanitizer"],
        _services_info_dialog_service__WEBPACK_IMPORTED_MODULE_12__["InfoDialogService"],
        _services_chain_delay_service__WEBPACK_IMPORTED_MODULE_10__["ChainDelayService"]])
], ChatThreadComponent);

class ModelHelpers {
    constructor() {
        this.Direction = _models_ana_chat_vm_models__WEBPACK_IMPORTED_MODULE_5__["Direction"];
        this.MessageStatus = _models_ana_chat_vm_models__WEBPACK_IMPORTED_MODULE_5__["MessageStatus"];
        this.MessageType = _models_ana_chat_models__WEBPACK_IMPORTED_MODULE_4__["MessageType"];
        this.MessageContentType = _models_ana_chat_models__WEBPACK_IMPORTED_MODULE_4__["MessageContentType"];
        this.MediaType = _models_ana_chat_models__WEBPACK_IMPORTED_MODULE_4__["MediaType"];
        this.InputType = _models_ana_chat_models__WEBPACK_IMPORTED_MODULE_4__["InputType"];
        this.StompConnectionStatus = _services_stomp_service__WEBPACK_IMPORTED_MODULE_6__["StompConnectionStatus"];
    }
}


/***/ }),

/***/ "./src/app/components/complex-input/complex-input.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/complex-input/complex-input.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-form-field {\n  width: 100%;\n}\n\nagm-map {\n  height: 286px;\n  width: 237px;\n}\n\nmat-list {\n  max-height: 80vh;\n  max-width: 90vh;\n  min-width: 200px;\n}\n\nmat-list-item {\n  margin: 10px -16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90dXJ0dXZzaGluL1Byb2plY3RzL2NoYXRib3RzLm1uL3NpbXVsYXRvci9zcmMvYXBwL2NvbXBvbmVudHMvY29tcGxleC1pbnB1dC9jb21wbGV4LWlucHV0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NvbXBsZXgtaW5wdXQvY29tcGxleC1pbnB1dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tcGxleC1pbnB1dC9jb21wbGV4LWlucHV0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbn1cblxuYWdtLW1hcCB7XG4gIGhlaWdodDogMjg2cHg7XG4gIHdpZHRoOiAyMzdweDtcbn1cblxubWF0LWxpc3Qge1xuICBtYXgtaGVpZ2h0OiA4MHZoO1xuICBtYXgtd2lkdGg6IDkwdmg7XG4gIG1pbi13aWR0aDogMjAwcHg7XG59XG5cbm1hdC1saXN0LWl0ZW0ge1xuICBtYXJnaW46IDEwcHggLTE2cHg7XG59XG4iLCJtYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5hZ20tbWFwIHtcbiAgaGVpZ2h0OiAyODZweDtcbiAgd2lkdGg6IDIzN3B4O1xufVxuXG5tYXQtbGlzdCB7XG4gIG1heC1oZWlnaHQ6IDgwdmg7XG4gIG1heC13aWR0aDogOTB2aDtcbiAgbWluLXdpZHRoOiAyMDBweDtcbn1cblxubWF0LWxpc3QtaXRlbSB7XG4gIG1hcmdpbjogMTBweCAtMTZweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/complex-input/complex-input.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/complex-input/complex-input.component.ts ***!
  \*********************************************************************/
/*! exports provided: ComplexInputComponent, ComplexType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplexInputComponent", function() { return ComplexInputComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplexType", function() { return ComplexType; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _services_utilities_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/utilities.service */ "./src/app/services/utilities.service.ts");




let ComplexInputComponent = class ComplexInputComponent {
    constructor(dialogRef, params) {
        this.dialogRef = dialogRef;
        this.params = params;
        this.ComplexType = ComplexType;
        this.givenAddress = {
            area: "",
            city: "",
            country: "",
            line1: "",
            pin: "",
            state: ""
        };
        this.geoLoc = {
            lat: 0.0,
            lng: 0.0
        };
    }
    ngOnInit() {
        if (this.params.Type == ComplexType.Location) {
            if (this.params.DefaultGeoLoc)
                this.geoLoc = this.params.DefaultGeoLoc;
        }
        else if (this.params.Type == ComplexType.List) {
            this.listValues = this.params.ListValues;
            this.listMultiple = this.params.ListMultiple;
        }
        else if (this.params.Type == ComplexType.Time) {
            let date = new Date();
            this.choosenTime = `${_services_utilities_service__WEBPACK_IMPORTED_MODULE_3__["UtilitiesService"].pad(date.getHours(), 2)}:${_services_utilities_service__WEBPACK_IMPORTED_MODULE_3__["UtilitiesService"].pad(date.getMinutes(), 2)}`; //:${UtilitiesService.pad(date.getSeconds(), 2)}
        }
    }
    ngAfterViewInit() {
        Promise.resolve(null).then(() => {
            if (this.params.Type == ComplexType.Date)
                this.datePicker.open();
        });
    }
    getChoosenANATime() {
        let split = this.choosenTime.split(':');
        return {
            hour: split[0],
            minute: split[1],
            second: (split.length >= 3 ? split[2] : '0')
        };
    }
    getChoosenANADate() {
        return {
            mday: this.choosenDate.getDate().toString(),
            month: (this.choosenDate.getMonth() + 1).toString(),
            year: this.choosenDate.getFullYear().toString()
        };
    }
    mapLocationUpdated(event) {
        this.geoLoc.lat = event.coords.lat;
        this.geoLoc.lng = event.coords.lng;
    }
    choosenListValues() {
        if (this.listMultiple)
            return this.listValues.filter(x => x.isSelected);
        else
            return [this.selectedListItem];
    }
    searchedListValues() {
        if (this.listItemsSearch) {
            return this.listValues.filter(x => x.text && x.text.toLowerCase().includes(this.listItemsSearch.toLowerCase()));
        }
        return this.listValues;
    }
    isValid() {
        switch (this.params.Type) {
            case ComplexType.Address:
                {
                    if (this.givenAddress &&
                        this.givenAddress.area &&
                        this.givenAddress.city &&
                        this.givenAddress.country &&
                        this.givenAddress.line1 &&
                        this.givenAddress.pin &&
                        this.givenAddress.state) {
                        return true;
                    }
                    else
                        return false;
                }
            case ComplexType.Date:
                {
                    if (this.choosenDate)
                        return true;
                    else
                        return false;
                }
            case ComplexType.Time:
                {
                    if (this.choosenTime)
                        return true;
                    else
                        return false;
                }
            case ComplexType.List:
                {
                    if (this.listMultiple) {
                        if (this.choosenListValues() && this.choosenListValues().length > 0)
                            return true;
                        else
                            return false;
                    }
                    else {
                        return this.selectedListItem != null;
                    }
                }
            case ComplexType.Location:
                {
                    if (this.geoLoc)
                        return true;
                    else
                        return false;
                }
            default:
                return true;
        }
    }
    dialogClose() {
        this.dialogRef.close(true);
    }
};
ComplexInputComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("datePicker", { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepicker"])
], ComplexInputComponent.prototype, "datePicker", void 0);
ComplexInputComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-complex-input',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./complex-input.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/complex-input/complex-input.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./complex-input.component.scss */ "./src/app/components/complex-input/complex-input.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
], ComplexInputComponent);

var ComplexType;
(function (ComplexType) {
    ComplexType[ComplexType["Date"] = 0] = "Date";
    ComplexType[ComplexType["Time"] = 1] = "Time";
    ComplexType[ComplexType["Location"] = 2] = "Location";
    ComplexType[ComplexType["Address"] = 3] = "Address";
    ComplexType[ComplexType["List"] = 4] = "List";
})(ComplexType || (ComplexType = {}));


/***/ }),

/***/ "./src/app/components/info-dialog/info-dialog.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/info-dialog/info-dialog.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-dialog-actions {\n  justify-content: center;\n}\n\nmat-form-field {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90dXJ0dXZzaGluL1Byb2plY3RzL2NoYXRib3RzLm1uL3NpbXVsYXRvci9zcmMvYXBwL2NvbXBvbmVudHMvaW5mby1kaWFsb2cvaW5mby1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvaW5mby1kaWFsb2cvaW5mby1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9pbmZvLWRpYWxvZy9pbmZvLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1kaWFsb2ctYWN0aW9ucyB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbm1hdC1mb3JtLWZpZWxkIHtcbiAgICB3aWR0aDogMTAwJVxufVxuIiwibWF0LWRpYWxvZy1hY3Rpb25zIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbm1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/info-dialog/info-dialog.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/info-dialog/info-dialog.component.ts ***!
  \*****************************************************************/
/*! exports provided: InfoDialogComponent, InfoDialogType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoDialogComponent", function() { return InfoDialogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoDialogType", function() { return InfoDialogType; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



let InfoDialogComponent = class InfoDialogComponent {
    constructor(dialogRef, options) {
        this.dialogRef = dialogRef;
        this.options = options;
        this.InfoDialogType = InfoDialogType;
        this.dialogRef.disableClose = true;
        if (!options) {
            options = {
                dialogType: InfoDialogType.Alert,
                title: 'Title',
                message: 'Message'
            };
        }
        switch (options.dialogType) {
            case InfoDialogType.Confirm:
                {
                    this.primaryButtonText = this.options.primaryButton || "OK";
                    this.secondaryButtonText = this.options.secondaryButton || "Cancel";
                }
                break;
            case InfoDialogType.Prompt:
                {
                    this.inputText = options.defaultInputText;
                    this.primaryButtonText = this.options.primaryButton || "Done";
                    this.secondaryButtonText = this.options.secondaryButton || "Cancel";
                }
                break;
            case InfoDialogType.Alert:
            default:
                {
                    this.secondaryButtonText = this.options.primaryButton || "Close"; //Primary button plays as the text for secondaryButton here.
                }
                break;
        }
    }
    ngOnInit() {
    }
    inputKeypress(event) {
        if (event.keyCode == 13) {
            this.primaryClick();
        }
    }
    primaryClick() {
        switch (this.options.dialogType) {
            case InfoDialogType.Confirm:
                this.dialogRef.close(true);
                break;
            case InfoDialogType.Prompt:
                this.dialogRef.close(this.inputText);
                break;
            case InfoDialogType.Alert:
            default:
                this.dialogRef.close();
                break;
        }
    }
};
InfoDialogComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
InfoDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-info-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./info-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/info-dialog/info-dialog.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./info-dialog.component.scss */ "./src/app/components/info-dialog/info-dialog.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
], InfoDialogComponent);

var InfoDialogType;
(function (InfoDialogType) {
    InfoDialogType[InfoDialogType["Prompt"] = 0] = "Prompt";
    InfoDialogType[InfoDialogType["Alert"] = 1] = "Alert";
    InfoDialogType[InfoDialogType["Confirm"] = 2] = "Confirm";
})(InfoDialogType || (InfoDialogType = {}));


/***/ }),

/***/ "./src/app/models/ana-chat-vm.models.ts":
/*!**********************************************!*\
  !*** ./src/app/models/ana-chat-vm.models.ts ***!
  \**********************************************/
/*! exports provided: Direction, MessageStatus, ChatMessageVM, ChatThreadVM, ChatInputItemVM, ChatInputVM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Direction", function() { return Direction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageStatus", function() { return MessageStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatMessageVM", function() { return ChatMessageVM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatThreadVM", function() { return ChatThreadVM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatInputItemVM", function() { return ChatInputItemVM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatInputVM", function() { return ChatInputVM; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_complex_input_complex_input_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/complex-input/complex-input.component */ "./src/app/components/complex-input/complex-input.component.ts");
/* harmony import */ var _services_utilities_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/utilities.service */ "./src/app/services/utilities.service.ts");
/* harmony import */ var _ana_chat_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ana-chat.models */ "./src/app/models/ana-chat.models.ts");




var Direction;
(function (Direction) {
    Direction[Direction["Incoming"] = 0] = "Incoming";
    Direction[Direction["Outgoing"] = 1] = "Outgoing";
})(Direction || (Direction = {}));
var MessageStatus;
(function (MessageStatus) {
    MessageStatus[MessageStatus["None"] = 0] = "None";
    MessageStatus[MessageStatus["SentToServer"] = 1] = "SentToServer";
    MessageStatus[MessageStatus["ReceivedAtServer"] = 2] = "ReceivedAtServer";
    MessageStatus[MessageStatus["SentTimeout"] = 3] = "SentTimeout";
    MessageStatus[MessageStatus["DelieveredToTarget"] = 4] = "DelieveredToTarget";
})(MessageStatus || (MessageStatus = {}));
class ChatMessageVM {
    startTimeoutTimer() {
        this.timeoutTimer = setTimeout(() => {
            if (this.status == MessageStatus.SentToServer)
                this.status = MessageStatus.SentTimeout;
        }, 2000);
    }
    clearTimeoutTimer() {
        clearTimeout(this.timeoutTimer);
        this.timeoutTimer = undefined;
    }
    executeRetry() {
        if (this.retrySending)
            this.retrySending();
    }
    simpleMessageData() {
        return this.messageData;
    }
    carouselMessageData() {
        return this.messageData;
    }
    getMessageContentType() {
        if (this.messageData.type == _ana_chat_models__WEBPACK_IMPORTED_MODULE_3__["MessageType"].SIMPLE) {
            var simple = this.simpleMessageData();
            if (simple.content.typing)
                return _ana_chat_models__WEBPACK_IMPORTED_MODULE_3__["MessageContentType"].Typing;
            if (simple.content.media)
                return _ana_chat_models__WEBPACK_IMPORTED_MODULE_3__["MessageContentType"].Media;
            else if (simple.content.text)
                return _ana_chat_models__WEBPACK_IMPORTED_MODULE_3__["MessageContentType"].Text;
            else
                return null;
        }
        return null;
    }
    isToday() {
        return this.time.toDateString() == (new Date()).toDateString();
    }
    constructor(chatMessage, direction, ackId, status) {
        this.direction = direction;
        this.time = new Date(chatMessage.meta.timestamp);
        this.meta = chatMessage.meta;
        this.messageData = chatMessage.data;
        this.status = status || MessageStatus.None;
        this.messageAckId = ackId;
    }
}
class ChatThreadVM {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
        this.messages = [];
    }
    addTextIncoming(text, ackId) {
        let msg = new ChatMessageVM(new _ana_chat_models__WEBPACK_IMPORTED_MODULE_3__["ANAChatMessage"]({
            "meta": {
                "timestamp": new Date().getTime(),
            },
            "data": {
                "type": _ana_chat_models__WEBPACK_IMPORTED_MODULE_3__["MessageType"].SIMPLE,
                "content": {
                    "text": text,
                }
            }
        }), Direction.Incoming, ackId);
        this.addMessage(msg);
        return msg;
    }
    addTextReply(text, ackId, timestamp, insert = false) {
        if (!text)
            return null;
        let msg = new ChatMessageVM(new _ana_chat_models__WEBPACK_IMPORTED_MODULE_3__["ANAChatMessage"]({
            "meta": {
                "timestamp": timestamp || new Date().getTime(),
            },
            "data": {
                "type": _ana_chat_models__WEBPACK_IMPORTED_MODULE_3__["MessageType"].SIMPLE,
                "content": {
                    "text": text,
                }
            }
        }), Direction.Outgoing, ackId);
        this.addMessage(msg, insert);
        return msg;
    }
    setTyping(autohide) {
        if (this.typingTimerId)
            clearTimeout(this.typingTimerId);
        this.removeTyping();
        let msg = new ChatMessageVM(new _ana_chat_models__WEBPACK_IMPORTED_MODULE_3__["ANAChatMessage"]({
            "meta": {
                "timestamp": new Date().getTime(),
            },
            "data": {
                "type": _ana_chat_models__WEBPACK_IMPORTED_MODULE_3__["MessageType"].SIMPLE,
                "content": {
                    "typing": true
                }
            }
        }), Direction.Incoming, '');
        this.addMessage(msg);
        if (autohide) {
            this.typingTimerId = setTimeout(() => {
                this.removeTyping();
            }, 1000);
        }
    }
    removeTyping() {
        let index = this.messages.findIndex(x => x.getMessageContentType() == _ana_chat_models__WEBPACK_IMPORTED_MODULE_3__["MessageContentType"].Typing);
        if (index != -1) {
            this.messages.splice(index, 1);
            if (this.typingTimerId)
                clearTimeout(this.typingTimerId);
        }
    }
    addMediaReply(media, text = '', ackId, timestamp, insert = false) {
        let msg = new ChatMessageVM(new _ana_chat_models__WEBPACK_IMPORTED_MODULE_3__["ANAChatMessage"]({
            "meta": {
                "timestamp": timestamp || new Date().getTime(),
            },
            "data": {
                "type": _ana_chat_models__WEBPACK_IMPORTED_MODULE_3__["MessageType"].SIMPLE,
                "content": {
                    "text": text,
                    "media": media,
                }
            }
        }), Direction.Outgoing, ackId);
        this.addMessage(msg, insert);
        return msg;
    }
    addMessage(chatMsgVM, insert = false) {
        if (_services_utilities_service__WEBPACK_IMPORTED_MODULE_2__["UtilitiesService"].settings.simulatorMode) {
            let simpleData = chatMsgVM.simpleMessageData();
            if (simpleData.content.media && simpleData.content.media.url)
                simpleData.content.media.url = this.sanitizer.bypassSecurityTrustUrl(simpleData.content.media.url);
        }
        if (!insert)
            this.removeTyping();
        if (!chatMsgVM.meta.id || this.messages.findIndex(x => x.meta.id == chatMsgVM.meta.id) == -1) { //Not allowing duplicate messages, if meta.id is set
            if (insert)
                this.messages.unshift(chatMsgVM);
            else
                this.messages.push(chatMsgVM);
        }
        //Sorting the messages based on timestamp. Currently disabled.
        //this.messages.sort((x, y) => x.meta.timestamp - y.meta.timestamp);
        if (!insert)
            this.scrollLastIntoView();
    }
    scrollLastIntoView(t = 100) {
        if (this.chatThreadView)
            setTimeout(() => this.chatThreadView.children.item(this.chatThreadView.children.length - 1).scrollIntoView({ behavior: 'smooth' }), t);
    }
    scrollToLast() {
        if (this.chatThreadView)
            window.requestAnimationFrame(() => this.chatThreadView.scrollTo({ top: this.chatThreadView.scrollHeight, behavior: 'smooth' }));
    }
}
class ChatInputItemVM {
    textInputContent() {
        return this.content;
    }
    constructor(message) {
        this.data = message.data;
        this.content = message.inputData().content;
        if (!this.content.input)
            this.content.input = {};
        this.meta = message.meta;
        this.disabled = false;
    }
}
class ChatInputVM {
    constructor(dialog, chatThread, apiService, stomp, chatThreadComponent, sanitizer) {
        this.dialog = dialog;
        this.chatThread = chatThread;
        this.apiService = apiService;
        this.stomp = stomp;
        this.chatThreadComponent = chatThreadComponent;
        this.sanitizer = sanitizer;
        this.textInput = undefined;
        this.clickInput = undefined;
    }
    insertThreadMessageForInput(inputVM) {
        let ackId = "";
        let timestamp = inputVM.meta.timestamp;
        switch (inputVM.content.inputType) {
            case _ana_chat_models__WEBPACK_IMPORTED_MODULE_3__["InputType"].TEXT:
            case _ana_chat_models__WEBPACK_IMPORTED_MODULE_3__["InputType"].EMAIL:
            case _ana_chat_models__WEBPACK_IMPORTED_MODULE_3__["InputType"].PHONE:
            case _ana_chat_models__WEBPACK_IMPORTED_MODULE_3__["InputType"].NUMERIC:
                {
                    let modifieldInputContent = inputVM.content;
                    return this.chatThread.addTextReply(modifieldInputContent.input.val, ackId, timestamp, true);
                }
            case _ana_chat_models__WEBPACK_IMPORTED_MODULE_3__["InputType"].ADDRESS:
                {
                    let modifieldInputContent = inputVM.content;
                    let userAddressInput = modifieldInputContent.input.address;
                    return this.chatThread.addTextReply(`${[userAddressInput.line1, userAddressInput.area, userAddressInput.city, userAddressInput.state, userAddressInput.country, userAddressInput.pin].filter(x => x).join(", ")}`, ackId, timestamp, true);
                }
            case _ana_chat_models__WEBPACK_IMPORTED_MODULE_3__["InputType"].LOCATION:
                {
                    let locInputData = inputVM.content;
                    let gMapUrl = _services_utilities_service__WEBPACK_IMPORTED_MODULE_2__["UtilitiesService"].googleMapsStaticLink(locInputData.input.location);
                    return this.chatThread.addMediaReply({
                        previewUrl: gMapUrl,
                        type: _ana_chat_models__WEBPACK_IMPORTED_MODULE_3__["MediaType"].IMAGE,
                        url: gMapUrl
                    }, "Location", ackId, timestamp, true);
                }
            case _ana_chat_models__WEBPACK_IMPORTED_MODULE_3__["InputType"].MEDIA:
                {
                    let mediaInputContent = inputVM.content;
                    if (mediaInputContent && mediaInputContent.input.media) {
                        let asset = mediaInputContent.input.media[0];
                        let media = {
                            previewUrl: asset.previewUrl,
                            type: asset.type,
                            url: asset.url
                        };
                        return this.chatThread.addMediaReply(media, '', ackId, timestamp, true);
                    }
                    return null;
                }
            case _ana_chat_models__WEBPACK_IMPORTED_MODULE_3__["InputType"].LIST:
                {
                    let listInputContent = inputVM.content;
                    let selectedValues = listInputContent.input.val.split(',');
                    let selectedListItems = listInputContent.values.filter(x => selectedValues.indexOf(x.value) != -1);
                    return this.chatThread.addTextReply(selectedListItems.map(x => x.text).join(', '), ackId, timestamp, true);
                }
            case _ana_chat_models__WEBPACK_IMPORTED_MODULE_3__["InputType"].TIME:
                {
                    let timeContent = inputVM.content;
                    let displayTime = _services_utilities_service__WEBPACK_IMPORTED_MODULE_2__["UtilitiesService"].anaTimeDisplay(timeContent.input.time);
                    return this.chatThread.addTextReply(displayTime, ackId, timestamp, true);
                }
            case _ana_chat_models__WEBPACK_IMPORTED_MODULE_3__["InputType"].DATE:
                {
                    let dateContent = inputVM.content;
                    let displayDate = _services_utilities_service__WEBPACK_IMPORTED_MODULE_2__["UtilitiesService"].anaDateDisplay(dateContent.input.date);
                    return this.chatThread.addTextReply(displayDate, ackId, timestamp, true);
                }
            case _ana_chat_models__WEBPACK_IMPORTED_MODULE_3__["InputType"].OPTIONS:
                {
                    let optionInputContent = inputVM.content;
                    let selectedOption = optionInputContent.options.find(x => x.value == optionInputContent.input.val);
                    if (selectedOption)
                        return this.chatThread.addTextReply(selectedOption.title, ackId, timestamp, true);
                    return null;
                }
            default:
                console.log(`Unsupported button type: ${inputVM.content.inputType}`);
                break;
        }
    }
    setInput(chatInputItemVM) {
        if (this.textInput)
            this.textInput.disabled = true;
        if (this.inputCategory(chatInputItemVM) == _ana_chat_models__WEBPACK_IMPORTED_MODULE_3__["InputCategory"].Text) {
            let a = chatInputItemVM.content;
            if (a.textInputAttr && a.textInputAttr.defaultText)
                a.input.val = a.textInputAttr.defaultText;
            this.textInput = chatInputItemVM;
        }
        else if (this.inputCategory(chatInputItemVM) == _ana_chat_models__WEBPACK_IMPORTED_MODULE_3__["InputCategory"].Click) {
            this.clickInput = chatInputItemVM;
            if (chatInputItemVM.content.mandatory == _ana_chat_models__WEBPACK_IMPORTED_MODULE_3__["Bool"].FALSE) {
                this.textInput = this.textInputForNonMandatoryCase(chatInputItemVM.meta);
            }
            else
                this.textInput = undefined;
        }
        this.chatThread.scrollLastIntoView(300);
    }
    textInputForNonMandatoryCase(srcMeta) {
        let anaMeta = {
            id: "",
            sender: {
                id: _services_utilities_service__WEBPACK_IMPORTED_MODULE_2__["UtilitiesService"].settings.stompConfig ? _services_utilities_service__WEBPACK_IMPORTED_MODULE_2__["UtilitiesService"].settings.stompConfig.businessId : _services_utilities_service__WEBPACK_IMPORTED_MODULE_2__["Config"].simulatorBusinessId,
                medium: 3,
            },
            recipient: {
                id: _services_utilities_service__WEBPACK_IMPORTED_MODULE_2__["UtilitiesService"].settings.stompConfig ? _services_utilities_service__WEBPACK_IMPORTED_MODULE_2__["UtilitiesService"].settings.stompConfig.customerId : _services_utilities_service__WEBPACK_IMPORTED_MODULE_2__["Config"].simulatorCustomerId,
                medium: 3
            },
            responseTo: srcMeta ? srcMeta.id : '',
            senderType: _ana_chat_models__WEBPACK_IMPORTED_MODULE_3__["SenderType"].USER,
            sessionId: srcMeta ? srcMeta.sessionId : '',
            flowId: srcMeta.flowId,
            currentFlowId: srcMeta.currentFlowId,
            previousFlowId: srcMeta.previousFlowId,
            timestamp: srcMeta ? srcMeta.timestamp : new Date().getTime()
        };
        let input = new ChatInputItemVM(new _ana_chat_models__WEBPACK_IMPORTED_MODULE_3__["ANAChatMessage"]({
            meta: anaMeta,
            data: {
                type: _ana_chat_models__WEBPACK_IMPORTED_MODULE_3__["MessageType"].INPUT,
                content: {
                    inputType: 0,
                    mandatory: 1,
                    textInputAttr: {
                        multiLine: 1,
                        minLength: 0,
                        maxLength: 400,
                        defaultText: "",
                        placeHolder: "Type a message..."
                    },
                    input: {
                        val: "",
                    }
                }
            }
        }));
        return input;
    }
    clickInputTitle() {
        if (this.clickInput) {
            try {
                if (this.clickInput.content.inputType == _ana_chat_models__WEBPACK_IMPORTED_MODULE_3__["InputType"].MEDIA)
                    return 'Choose ' + _ana_chat_models__WEBPACK_IMPORTED_MODULE_3__["MediaType"][this.clickInput.content.mediaType].toLowerCase();
                if (this.clickInput.content.inputType == _ana_chat_models__WEBPACK_IMPORTED_MODULE_3__["InputType"].LIST) {
                    if (this.clickInput.content.multiple)
                        return 'Choose';
                    else
                        return 'Choose an option';
                }
                return 'Choose ' + _ana_chat_models__WEBPACK_IMPORTED_MODULE_3__["InputType"][this.clickInput.content.inputType].toLowerCase();
            }
            catch (e) {
                return 'Choose';
            }
        }
        else
            return "Choose";
    }
    inputCategory(inputVM) {
        switch (inputVM.content.inputType) {
            case _ana_chat_models__WEBPACK_IMPORTED_MODULE_3__["InputType"].TEXT:
            case _ana_chat_models__WEBPACK_IMPORTED_MODULE_3__["InputType"].EMAIL:
            case _ana_chat_models__WEBPACK_IMPORTED_MODULE_3__["InputType"].NUMERIC:
            case _ana_chat_models__WEBPACK_IMPORTED_MODULE_3__["InputType"].PHONE:
                return _ana_chat_models__WEBPACK_IMPORTED_MODULE_3__["InputCategory"].Text;
            default:
                return _ana_chat_models__WEBPACK_IMPORTED_MODULE_3__["InputCategory"].Click;
        }
    }
    handleClick(inputVM) {
        if (!this.isInputValid(inputVM)) {
            let errorMsg = this.inputErrorMsg(inputVM);
            let lastMsg = this.chatThread.messages[this.chatThread.messages.length - 1];
            if (lastMsg.direction == Direction.Incoming && lastMsg.messageAckId == "ERROR_MSG" && lastMsg.simpleMessageData().content.text == errorMsg)
                return; //Skip if already error message is added with the same msg text.
            //alert(this.inputErrorMsg(inputVM));
            switch (inputVM.content.inputType) {
                case _ana_chat_models__WEBPACK_IMPORTED_MODULE_3__["InputType"].TEXT:
                case _ana_chat_models__WEBPACK_IMPORTED_MODULE_3__["InputType"].EMAIL:
                case _ana_chat_models__WEBPACK_IMPORTED_MODULE_3__["InputType"].PHONE:
                case _ana_chat_models__WEBPACK_IMPORTED_MODULE_3__["InputType"].NUMERIC:
                    {
                        let modifieldInputContent = inputVM.content;
                        this.chatThread.addTextReply(modifieldInputContent.input.val, "");
                        break;
                    }
            }
            this.chatThread.addTextIncoming(errorMsg, "ERROR_MSG");
            return;
        }
        let ackId = _services_utilities_service__WEBPACK_IMPORTED_MODULE_2__["UtilitiesService"].uuidv4();
        switch (inputVM.content.inputType) {
            case _ana_chat_models__WEBPACK_IMPORTED_MODULE_3__["InputType"].TEXT:
            case _ana_chat_models__WEBPACK_IMPORTED_MODULE_3__["InputType"].EMAIL:
            case _ana_chat_models__WEBPACK_IMPORTED_MODULE_3__["InputType"].PHONE:
            case _ana_chat_models__WEBPACK_IMPORTED_MODULE_3__["InputType"].NUMERIC:
                {
                    this.resetInputs();
                    let modifieldInputContent = inputVM.content;
                    let msg = this.chatThread.addTextReply(modifieldInputContent.input.val, ackId);
                    this.chatThreadComponent._sendMessageDelegate(new _ana_chat_models__WEBPACK_IMPORTED_MODULE_3__["ANAChatMessage"]({
                        meta: _services_utilities_service__WEBPACK_IMPORTED_MODULE_2__["UtilitiesService"].getReplyMeta(inputVM.meta),
                        data: { type: inputVM.data.type, content: modifieldInputContent }
                    }), msg);
                    break;
                }
            case _ana_chat_models__WEBPACK_IMPORTED_MODULE_3__["InputType"].ADDRESS:
                {
                    let modifieldInputContent = inputVM.content;
                    let dialogRef = this.dialog.open(_components_complex_input_complex_input_component__WEBPACK_IMPORTED_MODULE_1__["ComplexInputComponent"], {
                        width: 'auto',
                        data: {
                            Type: _components_complex_input_complex_input_component__WEBPACK_IMPORTED_MODULE_1__["ComplexType"].Address
                        }
                    });
                    dialogRef.afterClosed().subscribe(result => {
                        if (result != true)
                            return;
                        let userAddressInput = dialogRef.componentInstance.givenAddress;
                        let msg = this.chatThread.addTextReply(`${_services_utilities_service__WEBPACK_IMPORTED_MODULE_2__["UtilitiesService"].anaAddressDisplay(userAddressInput)}`, ackId);
                        modifieldInputContent.input = {
                            address: userAddressInput
                        };
                        this.resetInputs();
                        this.chatThreadComponent._sendMessageDelegate(new _ana_chat_models__WEBPACK_IMPORTED_MODULE_3__["ANAChatMessage"]({
                            meta: _services_utilities_service__WEBPACK_IMPORTED_MODULE_2__["UtilitiesService"].getReplyMeta(inputVM.meta),
                            data: { type: inputVM.data.type, content: modifieldInputContent }
                        }), msg);
                    });
                    break;
                }
            case _ana_chat_models__WEBPACK_IMPORTED_MODULE_3__["InputType"].LOCATION:
                {
                    let locInputData = inputVM.content;
                    let geoLoc = locInputData.defaultLocation;
                    if (!geoLoc) {
                        if (navigator.geolocation) {
                            navigator.geolocation.getCurrentPosition((pos) => {
                                let loc = {
                                    lat: pos.coords.latitude,
                                    lng: pos.coords.longitude
                                };
                                this.showLocationPickerDialog(locInputData, inputVM.meta, inputVM.data.type, ackId, loc);
                            }, err => {
                                this.showLocationPickerDialog(locInputData, inputVM.meta, inputVM.data.type, ackId);
                            });
                        }
                    }
                    else
                        this.showLocationPickerDialog(locInputData, inputVM.meta, inputVM.data.type, ackId, geoLoc);
                    break;
                }
            case _ana_chat_models__WEBPACK_IMPORTED_MODULE_3__["InputType"].MEDIA:
                {
                    let mediaInputContent = inputVM.content;
                    let input = document.createElement('input');
                    input.type = 'file';
                    if (mediaInputContent.mediaType != _ana_chat_models__WEBPACK_IMPORTED_MODULE_3__["MediaType"].FILE)
                        input.accept = `${_ana_chat_models__WEBPACK_IMPORTED_MODULE_3__["MediaType"][mediaInputContent.mediaType]}/*`;
                    input.multiple = false;
                    input.onchange = () => {
                        if (input.files) {
                            let f = input.files[0];
                            if (!_services_utilities_service__WEBPACK_IMPORTED_MODULE_2__["UtilitiesService"].settings.simulatorMode) {
                                this.apiService.uploadFile(f).subscribe(resp => {
                                    if (resp.links)
                                        this.sendReplyAfterFileUpload(resp.links[0].href, f.type, mediaInputContent, ackId, inputVM);
                                    else
                                        alert("Error occurred while sending the file!");
                                }, err => {
                                    alert("Unable to send file!");
                                });
                            }
                            else {
                                let mediaBlob = new Blob([f], {
                                    type: f.type
                                });
                                let mediaBlobUrl = URL.createObjectURL(mediaBlob);
                                this.sendReplyAfterFileUpload(mediaBlobUrl, f.type, mediaInputContent, ackId, inputVM);
                            }
                        }
                    };
                    input.click();
                    break;
                }
            case _ana_chat_models__WEBPACK_IMPORTED_MODULE_3__["InputType"].LIST:
                {
                    let listInputContent = inputVM.content;
                    let dialogRef = this.dialog.open(_components_complex_input_complex_input_component__WEBPACK_IMPORTED_MODULE_1__["ComplexInputComponent"], {
                        width: 'auto',
                        data: {
                            Type: _components_complex_input_complex_input_component__WEBPACK_IMPORTED_MODULE_1__["ComplexType"].List,
                            ListValues: listInputContent.values,
                            ListMultiple: listInputContent.multiple
                        }
                    });
                    dialogRef.afterClosed().subscribe(result => {
                        if (result != true)
                            return;
                        this.resetInputs();
                        let selectedListItems = dialogRef.componentInstance.choosenListValues();
                        let msg = this.chatThread.addTextReply(selectedListItems.map(x => x.text).join(', '), ackId);
                        listInputContent.input.val = selectedListItems.map(x => x.value).join(',');
                        this.chatThreadComponent._sendMessageDelegate(new _ana_chat_models__WEBPACK_IMPORTED_MODULE_3__["ANAChatMessage"]({
                            meta: _services_utilities_service__WEBPACK_IMPORTED_MODULE_2__["UtilitiesService"].getReplyMeta(inputVM.meta),
                            data: { type: inputVM.data.type, content: listInputContent }
                        }), msg);
                    });
                    break;
                }
            case _ana_chat_models__WEBPACK_IMPORTED_MODULE_3__["InputType"].TIME:
                {
                    let timeContent = inputVM.content;
                    let dialogRef = this.dialog.open(_components_complex_input_complex_input_component__WEBPACK_IMPORTED_MODULE_1__["ComplexInputComponent"], {
                        width: 'auto',
                        data: {
                            Type: _components_complex_input_complex_input_component__WEBPACK_IMPORTED_MODULE_1__["ComplexType"].Time
                        }
                    });
                    dialogRef.afterClosed().subscribe(result => {
                        if (result != true)
                            return;
                        this.resetInputs();
                        let userInputTime = dialogRef.componentInstance.getChoosenANATime();
                        let displayTime = _services_utilities_service__WEBPACK_IMPORTED_MODULE_2__["UtilitiesService"].anaTimeDisplay(userInputTime);
                        let msg = this.chatThread.addTextReply(displayTime, ackId);
                        timeContent.input = { time: userInputTime };
                        this.chatThreadComponent._sendMessageDelegate(new _ana_chat_models__WEBPACK_IMPORTED_MODULE_3__["ANAChatMessage"]({
                            meta: _services_utilities_service__WEBPACK_IMPORTED_MODULE_2__["UtilitiesService"].getReplyMeta(inputVM.meta),
                            data: { type: inputVM.data.type, content: timeContent }
                        }), msg);
                    });
                    break;
                }
            case _ana_chat_models__WEBPACK_IMPORTED_MODULE_3__["InputType"].DATE:
                {
                    let dateContent = inputVM.content;
                    let dialogRef = this.dialog.open(_components_complex_input_complex_input_component__WEBPACK_IMPORTED_MODULE_1__["ComplexInputComponent"], {
                        width: 'auto',
                        data: {
                            Type: _components_complex_input_complex_input_component__WEBPACK_IMPORTED_MODULE_1__["ComplexType"].Date
                        }
                    });
                    dialogRef.afterClosed().subscribe(result => {
                        if (result != true)
                            return;
                        this.resetInputs();
                        let userInputDate = dialogRef.componentInstance.getChoosenANADate();
                        let displayDate = _services_utilities_service__WEBPACK_IMPORTED_MODULE_2__["UtilitiesService"].anaDateDisplay(userInputDate);
                        let msg = this.chatThread.addTextReply(displayDate, ackId);
                        dateContent.input = { date: userInputDate };
                        this.chatThreadComponent._sendMessageDelegate(new _ana_chat_models__WEBPACK_IMPORTED_MODULE_3__["ANAChatMessage"]({
                            meta: _services_utilities_service__WEBPACK_IMPORTED_MODULE_2__["UtilitiesService"].getReplyMeta(inputVM.meta),
                            data: { type: inputVM.data.type, content: dateContent }
                        }), msg);
                    });
                    break;
                }
            case _ana_chat_models__WEBPACK_IMPORTED_MODULE_3__["InputType"].OPTIONS:
                {
                    this.resetInputs();
                    let optionInputContent = inputVM.content;
                    let msg = this.chatThread.addTextReply(optionInputContent.input.title, ackId);
                    this.chatThreadComponent._sendMessageDelegate(new _ana_chat_models__WEBPACK_IMPORTED_MODULE_3__["ANAChatMessage"]({
                        meta: _services_utilities_service__WEBPACK_IMPORTED_MODULE_2__["UtilitiesService"].getReplyMeta(inputVM.meta),
                        data: { type: inputVM.data.type, content: optionInputContent }
                    }), msg);
                    break;
                }
            default:
                console.log(`Unsupported button type: ${inputVM.content.inputType}`);
                break;
        }
    }
    handleKeyPress(inputVM, event) {
        if (event.keyCode == 13) //Enter key
         {
            if (this.inputCategory(inputVM) == _ana_chat_models__WEBPACK_IMPORTED_MODULE_3__["InputCategory"].Text) {
                if (inputVM.textInputContent().input.val)
                    this.handleClick(inputVM);
            }
            else
                this.handleClick(inputVM);
        }
        else {
            this.stomp.sendTypingMessage(inputVM.meta);
        }
    }
    handleBtnOptionClick(inputVM, optionVal) {
        if (inputVM.content.inputType == _ana_chat_models__WEBPACK_IMPORTED_MODULE_3__["InputType"].OPTIONS) {
            let x = inputVM.content;
            let option = x.options.find(y => y.value == optionVal);
            if (!option) {
                alert('Invalid option!');
                return;
            }
            if (option.type == _ana_chat_models__WEBPACK_IMPORTED_MODULE_3__["ButtonType"].URL) {
                let v = JSON.parse(option.value);
                x.input.val = v.value;
                window.open(v.url, '_blank');
            }
            if (option.type == _ana_chat_models__WEBPACK_IMPORTED_MODULE_3__["ButtonType"].DEEPLINK) {
                let v = JSON.parse(option.value);
                x.input.val = v.value;
                try {
                    if (window.parent && window.parent.postMessage) {
                        window.parent.postMessage({
                            type: "DEEPLINK",
                            payload: v.url
                        }, "*");
                    }
                }
                catch (e) {
                    console.error(e);
                }
            }
            else
                x.input.val = option.value;
            x.input.title = option.title;
        }
        this.handleClick(inputVM);
    }
    htmlInputType(inputVM) {
        switch (inputVM.content.inputType) {
            case _ana_chat_models__WEBPACK_IMPORTED_MODULE_3__["InputType"].TEXT:
            case _ana_chat_models__WEBPACK_IMPORTED_MODULE_3__["InputType"].PHONE:
                return 'text';
            case _ana_chat_models__WEBPACK_IMPORTED_MODULE_3__["InputType"].EMAIL:
                return 'email';
            case _ana_chat_models__WEBPACK_IMPORTED_MODULE_3__["InputType"].NUMERIC:
                return 'number';
            default:
                return 'text';
        }
    }
    isInputValid(inputVM) {
        switch (inputVM.content.inputType) {
            case _ana_chat_models__WEBPACK_IMPORTED_MODULE_3__["InputType"].TEXT:
                {
                    let x = inputVM.content;
                    if (!x.input.val)
                        return false;
                    if (x.textInputAttr) {
                        if (x.textInputAttr.minLength > 0 && x.input.val.length < x.textInputAttr.minLength)
                            return false;
                        if (x.textInputAttr.maxLength > 0 && x.input.val.length > x.textInputAttr.maxLength)
                            return false;
                    }
                    return true;
                }
            case _ana_chat_models__WEBPACK_IMPORTED_MODULE_3__["InputType"].EMAIL:
                {
                    let x = inputVM.content;
                    return x.input.val && x.input.val.match(_services_utilities_service__WEBPACK_IMPORTED_MODULE_2__["Config"].emailRegex);
                }
            case _ana_chat_models__WEBPACK_IMPORTED_MODULE_3__["InputType"].PHONE:
                {
                    let x = inputVM.content;
                    return x.input.val && x.input.val.match(_services_utilities_service__WEBPACK_IMPORTED_MODULE_2__["Config"].phoneRegex);
                }
            case _ana_chat_models__WEBPACK_IMPORTED_MODULE_3__["InputType"].NUMERIC:
                {
                    let x = inputVM.content;
                    return x.input.val && x.input.val.match(_services_utilities_service__WEBPACK_IMPORTED_MODULE_2__["Config"].numberRegex);
                }
            case _ana_chat_models__WEBPACK_IMPORTED_MODULE_3__["InputType"].ADDRESS:
            case _ana_chat_models__WEBPACK_IMPORTED_MODULE_3__["InputType"].LOCATION:
            case _ana_chat_models__WEBPACK_IMPORTED_MODULE_3__["InputType"].MEDIA:
            case _ana_chat_models__WEBPACK_IMPORTED_MODULE_3__["InputType"].LIST:
            case _ana_chat_models__WEBPACK_IMPORTED_MODULE_3__["InputType"].TIME:
            case _ana_chat_models__WEBPACK_IMPORTED_MODULE_3__["InputType"].DATE:
                {
                    //These are validated in the complex input dialog itself.
                    return true;
                }
            case _ana_chat_models__WEBPACK_IMPORTED_MODULE_3__["InputType"].OPTIONS:
                {
                    let x = inputVM.content;
                    return x.input.val;
                }
            default:
                console.log(`Unsupported button type: ${inputVM.content.inputType}`);
                break;
        }
    }
    inputErrorMsg(inputVM) {
        switch (inputVM.content.inputType) {
            case _ana_chat_models__WEBPACK_IMPORTED_MODULE_3__["InputType"].EMAIL:
                return 'Please give a valid email address';
            case _ana_chat_models__WEBPACK_IMPORTED_MODULE_3__["InputType"].NUMERIC:
                return 'Please give a valid number';
            case _ana_chat_models__WEBPACK_IMPORTED_MODULE_3__["InputType"].PHONE:
                return 'Please give a valid phone number';
            case _ana_chat_models__WEBPACK_IMPORTED_MODULE_3__["InputType"].TEXT:
                {
                    let c = inputVM.textInputContent();
                    if (!c.input.val)
                        return "The value cannot be empty";
                    if (c.input.val && c.input.val.length < c.textInputAttr.minLength)
                        return `Minimum ${c.textInputAttr.minLength} characters required.`;
                    else if (c.input.val && c.input.val.length > c.textInputAttr.maxLength)
                        return `Maximum ${c.textInputAttr.maxLength} characters allowed.`;
                }
            default:
                return 'The value cannot be empty!';
        }
    }
    resetInputs() {
        this.textInput = undefined;
        this.clickInput = undefined;
    }
    showLocationPickerDialog(locInputContent, inputMeta, inputMessageType, ackId, defaultLoc) {
        let dialogRef = this.dialog.open(_components_complex_input_complex_input_component__WEBPACK_IMPORTED_MODULE_1__["ComplexInputComponent"], {
            width: 'auto',
            data: {
                Type: _components_complex_input_complex_input_component__WEBPACK_IMPORTED_MODULE_1__["ComplexType"].Location,
                DefaultGeoLoc: defaultLoc
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result != true)
                return;
            this.resetInputs();
            let userInputLoc = dialogRef.componentInstance.geoLoc;
            let gMapUrl = _services_utilities_service__WEBPACK_IMPORTED_MODULE_2__["UtilitiesService"].googleMapsStaticLink(userInputLoc);
            let msg = this.chatThread.addMediaReply({
                previewUrl: gMapUrl,
                type: _ana_chat_models__WEBPACK_IMPORTED_MODULE_3__["MediaType"].IMAGE,
                url: gMapUrl
            }, "Location", ackId);
            locInputContent.input = { location: userInputLoc };
            this.chatThreadComponent._sendMessageDelegate(new _ana_chat_models__WEBPACK_IMPORTED_MODULE_3__["ANAChatMessage"]({
                meta: _services_utilities_service__WEBPACK_IMPORTED_MODULE_2__["UtilitiesService"].getReplyMeta(inputMeta),
                data: { type: inputMessageType, content: locInputContent }
            }), msg);
        });
    }
    sendReplyAfterFileUpload(assetUrl, assetType, mediaInputContent, ackId, inputVM) {
        let media = {
            previewUrl: assetUrl,
            type: _services_utilities_service__WEBPACK_IMPORTED_MODULE_2__["UtilitiesService"].getAnaMediaTypeFromMIMEType(assetType),
            url: assetUrl
        };
        let msg = this.chatThread.addMediaReply(media, '', ackId);
        mediaInputContent.input = { media: [media] };
        this.resetInputs();
        this.chatThreadComponent._sendMessageDelegate(new _ana_chat_models__WEBPACK_IMPORTED_MODULE_3__["ANAChatMessage"]({
            meta: _services_utilities_service__WEBPACK_IMPORTED_MODULE_2__["UtilitiesService"].getReplyMeta(inputVM.meta),
            data: { type: inputVM.data.type, content: mediaInputContent }
        }), msg);
    }
}


/***/ }),

/***/ "./src/app/models/ana-chat.models.ts":
/*!*******************************************!*\
  !*** ./src/app/models/ana-chat.models.ts ***!
  \*******************************************/
/*! exports provided: InputType, EventType, SenderType, MediaType, ButtonType, MessageType, Bool, InputCategory, MessageContentType, ANAChatMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputType", function() { return InputType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventType", function() { return EventType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SenderType", function() { return SenderType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaType", function() { return MediaType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonType", function() { return ButtonType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageType", function() { return MessageType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bool", function() { return Bool; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputCategory", function() { return InputCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageContentType", function() { return MessageContentType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ANAChatMessage", function() { return ANAChatMessage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var InputType;
(function (InputType) {
    InputType[InputType["LOCATION"] = 7] = "LOCATION";
    InputType[InputType["DATE"] = 5] = "DATE";
    InputType[InputType["TIME"] = 6] = "TIME";
    InputType[InputType["ADDRESS"] = 4] = "ADDRESS";
    InputType[InputType["MEDIA"] = 8] = "MEDIA";
    InputType[InputType["OPTIONS"] = 10] = "OPTIONS";
    InputType[InputType["LIST"] = 9] = "LIST";
    InputType[InputType["PHONE"] = 3] = "PHONE";
    InputType[InputType["EMAIL"] = 2] = "EMAIL";
    InputType[InputType["NUMERIC"] = 1] = "NUMERIC";
    InputType[InputType["TEXT"] = 0] = "TEXT";
})(InputType || (InputType = {}));
var EventType;
(function (EventType) {
    EventType[EventType["SET_SESSION_DATA"] = 21] = "SET_SESSION_DATA";
    EventType[EventType["TYPING"] = 11] = "TYPING";
    EventType[EventType["ACK"] = 13] = "ACK";
})(EventType || (EventType = {}));
var SenderType;
(function (SenderType) {
    SenderType[SenderType["AGENT"] = 3] = "AGENT";
    SenderType[SenderType["ANA"] = 1] = "ANA";
    SenderType[SenderType["AI"] = 2] = "AI";
    SenderType[SenderType["USER"] = 0] = "USER";
})(SenderType || (SenderType = {}));
var MediaType;
(function (MediaType) {
    MediaType[MediaType["IMAGE"] = 0] = "IMAGE";
    MediaType[MediaType["VIDEO"] = 2] = "VIDEO";
    MediaType[MediaType["FILE"] = 3] = "FILE";
    MediaType[MediaType["AUDIO"] = 1] = "AUDIO";
})(MediaType || (MediaType = {}));
var ButtonType;
(function (ButtonType) {
    ButtonType[ButtonType["DEEPLINK"] = 3] = "DEEPLINK";
    ButtonType[ButtonType["ACTION"] = 2] = "ACTION";
    ButtonType[ButtonType["QUICK_REPLY"] = 1] = "QUICK_REPLY";
    ButtonType[ButtonType["URL"] = 0] = "URL";
})(ButtonType || (ButtonType = {}));
var MessageType;
(function (MessageType) {
    MessageType[MessageType["CAROUSEL"] = 1] = "CAROUSEL";
    MessageType[MessageType["INPUT"] = 2] = "INPUT";
    MessageType[MessageType["EXTERNAL"] = 3] = "EXTERNAL";
    MessageType[MessageType["SIMPLE"] = 0] = "SIMPLE";
})(MessageType || (MessageType = {}));
var Bool;
(function (Bool) {
    Bool[Bool["TRUE"] = 1] = "TRUE";
    Bool[Bool["FALSE"] = 0] = "FALSE";
})(Bool || (Bool = {}));
var InputCategory;
(function (InputCategory) {
    InputCategory[InputCategory["Click"] = 0] = "Click";
    InputCategory[InputCategory["Text"] = 1] = "Text";
})(InputCategory || (InputCategory = {}));
var MessageContentType;
(function (MessageContentType) {
    MessageContentType[MessageContentType["Text"] = 0] = "Text";
    MessageContentType[MessageContentType["Media"] = 1] = "Media";
    MessageContentType[MessageContentType["Typing"] = 2] = "Typing";
})(MessageContentType || (MessageContentType = {}));
class ANAChatMessage {
    constructor(rawMessage) {
        this.events = [];
        this.raw = rawMessage;
        this.meta = this.raw.meta;
        this.data = this.raw.data;
        this.events = this.raw.events;
    }
    simpleData() {
        return this.data;
    }
    carouselData() {
        return this.data;
    }
    inputData() {
        return this.data;
    }
    extract() {
        return {
            meta: this.meta,
            data: this.data,
            events: this.events
        };
    }
}


/***/ }),

/***/ "./src/app/models/google-maps-config.model.ts":
/*!****************************************************!*\
  !*** ./src/app/models/google-maps-config.model.ts ***!
  \****************************************************/
/*! exports provided: GoogleMapsConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleMapsConfig", function() { return GoogleMapsConfig; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_utilities_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/utilities.service */ "./src/app/services/utilities.service.ts");



let GoogleMapsConfig = class GoogleMapsConfig {
    constructor(utils) {
        _services_utilities_service__WEBPACK_IMPORTED_MODULE_2__["UtilitiesService"].googleMapsConfigRef = this;
    }
};
GoogleMapsConfig.ctorParameters = () => [
    { type: _services_utilities_service__WEBPACK_IMPORTED_MODULE_2__["UtilitiesService"] }
];
GoogleMapsConfig = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_utilities_service__WEBPACK_IMPORTED_MODULE_2__["UtilitiesService"]])
], GoogleMapsConfig);



/***/ }),

/***/ "./src/app/services/api.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: APIService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APIService", function() { return APIService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_utilities_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/utilities.service */ "./src/app/services/utilities.service.ts");




let APIService = class APIService {
    constructor(http) {
        this.http = http;
    }
    setAPIEndpoint(apiEndpoint) {
        this.apiEndpoint = apiEndpoint;
        if (this.apiEndpoint && !this.apiEndpoint.endsWith('/'))
            this.apiEndpoint += "/";
        if (!this.fileUploadEndpoint)
            this.fileUploadEndpoint = this.apiEndpoint + "files";
        this.chatHistoryEndpoint = this.apiEndpoint + "chatdata/messages?userId={userId}&businessId={businessId}&flowId={flowId}&size={size}&page=0&ofCurrentSession={ofCurrentSession}";
    }
    uploadFile(file) {
        let formData = new FormData();
        formData.append("file", file);
        return this.http.post(this.fileUploadEndpoint, formData);
    }
    fetchHistory(oldestMsgTimestamp, size = 20) {
        let businessId = _services_utilities_service__WEBPACK_IMPORTED_MODULE_3__["UtilitiesService"].settings.stompConfig.businessId;
        let customerId = _services_utilities_service__WEBPACK_IMPORTED_MODULE_3__["UtilitiesService"].settings.stompConfig.customerId;
        let flowId = _services_utilities_service__WEBPACK_IMPORTED_MODULE_3__["UtilitiesService"].settings.stompConfig.flowId;
        let currentSessionOnly = _services_utilities_service__WEBPACK_IMPORTED_MODULE_3__["UtilitiesService"].settings.stompConfig.currentSessionOnly;
        let api = this.chatHistoryEndpoint
            .replace('{userId}', customerId)
            .replace('{businessId}', businessId)
            .replace('{size}', size.toString())
            .replace('{flowId}', flowId)
            .replace('{ofCurrentSession}', currentSessionOnly ? 'true' : 'false');
        if (oldestMsgTimestamp)
            api += "&lastMessageTimeStamp=" + oldestMsgTimestamp.toString();
        return this.http.get(api);
    }
};
APIService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
APIService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], APIService);



/***/ }),

/***/ "./src/app/services/chain-delay.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/chain-delay.service.ts ***!
  \*************************************************/
/*! exports provided: ChainDelayService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChainDelayService", function() { return ChainDelayService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ChainDelayService = class ChainDelayService {
    constructor() {
        this.queue = [];
    }
    schedule(fn, t) {
        this.timer = setTimeout(() => {
            this.timer = null;
            fn(this.queue.length);
            if (this.queue.length) {
                let item = this.queue.shift();
                this.schedule(item.fn, item.t);
            }
        }, t);
    }
    ;
    delay(fn, t) {
        // if already queuing things or running a timer, 
        //   then just add to the queue
        if (this.queue.length || this.timer) {
            this.queue.push({ fn: fn, t: t });
        }
        else {
            // no queue or timer yet, so schedule the timer
            this.schedule(fn, t);
        }
    }
    ;
    cancel() {
        clearTimeout(this.timer);
        this.queue = [];
    }
    ;
};
ChainDelayService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ChainDelayService);



/***/ }),

/***/ "./src/app/services/info-dialog.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/info-dialog.service.ts ***!
  \*************************************************/
/*! exports provided: InfoDialogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoDialogService", function() { return InfoDialogService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _components_info_dialog_info_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/info-dialog/info-dialog.component */ "./src/app/components/info-dialog/info-dialog.component.ts");




let InfoDialogService = class InfoDialogService {
    constructor(dialog) {
        this.dialog = dialog;
    }
    alert(title, message, callback, primaryButton, secondaryButton) {
        let data = {
            dialogType: _components_info_dialog_info_dialog_component__WEBPACK_IMPORTED_MODULE_3__["InfoDialogType"].Alert,
            message: message,
            title: title,
            primaryButton: primaryButton,
            secondaryButton: secondaryButton
        };
        let d = this.dialog.open(_components_info_dialog_info_dialog_component__WEBPACK_IMPORTED_MODULE_3__["InfoDialogComponent"], {
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
            dialogType: _components_info_dialog_info_dialog_component__WEBPACK_IMPORTED_MODULE_3__["InfoDialogType"].Prompt,
            message: message,
            title: title,
            defaultInputText: defaultText,
            primaryButton: primaryButton,
            secondaryButton: secondaryButton
        };
        let d = this.dialog.open(_components_info_dialog_info_dialog_component__WEBPACK_IMPORTED_MODULE_3__["InfoDialogComponent"], {
            width: 'auto',
            data: data
        });
        d.afterClosed().subscribe(x => {
            callback(x);
        });
    }
    confirm(title, message, callback, primaryButton, secondaryButton) {
        let data = {
            dialogType: _components_info_dialog_info_dialog_component__WEBPACK_IMPORTED_MODULE_3__["InfoDialogType"].Confirm,
            message: message,
            title: title,
            primaryButton: primaryButton,
            secondaryButton: secondaryButton
        };
        let d = this.dialog.open(_components_info_dialog_info_dialog_component__WEBPACK_IMPORTED_MODULE_3__["InfoDialogComponent"], {
            width: 'auto',
            data: data
        });
        d.afterClosed().subscribe(x => {
            callback(x);
        });
    }
};
InfoDialogService.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
];
InfoDialogService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
], InfoDialogService);



/***/ }),

/***/ "./src/app/services/mat-css.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/mat-css.service.ts ***!
  \*********************************************/
/*! exports provided: MatCSSService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCSSService", function() { return MatCSSService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MAT_CSS = __webpack_require__(/*! ../../../node_modules/@angular/material/prebuilt-themes/indigo-pink.css */ "./node_modules/@angular/material/prebuilt-themes/indigo-pink.css");
let MatCSSService = class MatCSSService {
    constructor() { }
    loadCustomMatTheme(accent, customStyle, appCSS) {
        let c1 = /#3f51b5/g;
        let c2 = /#ff4081/g;
        let c3 = /#f44336/g;
        //Replacing mat default theme colors with the requested accent color
        let resultCSS = MAT_CSS.replace(c1, accent).replace(c2, accent).replace(c3, accent) + "\r\n" + appCSS;
        customStyle.innerHTML = resultCSS;
    }
};
MatCSSService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MatCSSService);



/***/ }),

/***/ "./src/app/services/simulator.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/simulator.service.ts ***!
  \***********************************************/
/*! exports provided: SimulatorService, SimulatorMessageType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimulatorService", function() { return SimulatorService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimulatorMessageType", function() { return SimulatorMessageType; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_ana_chat_vm_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/ana-chat-vm.models */ "./src/app/models/ana-chat-vm.models.ts");
/* harmony import */ var _models_ana_chat_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/ana-chat.models */ "./src/app/models/ana-chat.models.ts");
/* harmony import */ var _services_utilities_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/utilities.service */ "./src/app/services/utilities.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");






let SimulatorService = class SimulatorService {
    constructor(http, utils) {
        this.http = http;
        this.utils = utils;
        this.debug = true;
        window.onmessage = (event) => {
            this.logDebug('On message received from studio:');
            this.logDebug(event.data);
            let msg = event.data;
            if (msg.type == SimulatorMessageType.AnaChatMessage) {
                let cfMsg = msg;
                if (this.handleMessageReceived)
                    this.handleMessageReceived(new _models_ana_chat_models__WEBPACK_IMPORTED_MODULE_3__["ANAChatMessage"](cfMsg.data));
            }
            else if (msg.type == SimulatorMessageType.AnaChatReset) {
                if (this.handleResetSignal)
                    this.handleResetSignal();
            }
        };
    }
    logDebug(msg) {
        if (this.debug)
            console.log(msg);
    }
    sendMessage(message, threadMsgRef) {
        window.parent.postMessage({
            data: message,
            type: SimulatorMessageType.AnaChatMessage
        }, "*");
        if (threadMsgRef)
            threadMsgRef.status = _models_ana_chat_vm_models__WEBPACK_IMPORTED_MODULE_2__["MessageStatus"].ReceivedAtServer;
    }
};
SimulatorService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _services_utilities_service__WEBPACK_IMPORTED_MODULE_4__["UtilitiesService"] }
];
SimulatorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _services_utilities_service__WEBPACK_IMPORTED_MODULE_4__["UtilitiesService"]])
], SimulatorService);

var SimulatorMessageType;
(function (SimulatorMessageType) {
    SimulatorMessageType["AnaChatMessage"] = "AnaChatMessage";
    SimulatorMessageType["AnaChatReset"] = "AnaChatReset";
})(SimulatorMessageType || (SimulatorMessageType = {}));


/***/ }),

/***/ "./src/app/services/stomp.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/stomp.service.ts ***!
  \*******************************************/
/*! exports provided: StompService, StompConnectionStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StompService", function() { return StompService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StompConnectionStatus", function() { return StompConnectionStatus; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var sockjs_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sockjs-client */ "./node_modules/sockjs-client/lib/entry.js");
/* harmony import */ var sockjs_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sockjs_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var stompjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! stompjs */ "./node_modules/stompjs/index.js");
/* harmony import */ var stompjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(stompjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _models_ana_chat_vm_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/ana-chat-vm.models */ "./src/app/models/ana-chat-vm.models.ts");
/* harmony import */ var _models_ana_chat_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/ana-chat.models */ "./src/app/models/ana-chat.models.ts");
/* harmony import */ var _services_utilities_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/utilities.service */ "./src/app/services/utilities.service.ts");







let StompService = class StompService {
    constructor() {
        this.stompHeaders = {};
        this.consecutiveErrorsCount = 0;
        this.debug = (...args) => {
            if (console && console.log && console.log.apply && this.config && this.config.debug)
                console.log.apply(console, args);
        };
        //Should be an arrow function to follow class context
        this.onConnect = (frame) => {
            this.clearTimer();
            this.consecutiveErrorsCount = 0;
            if (this.connectionStatus == StompConnectionStatus.Connected)
                return;
            try {
                this.subscribe();
                this.connectionStatus = StompConnectionStatus.Connected;
                if (this.handleConnect)
                    this.handleConnect();
            }
            catch (e) {
                this.debug(e);
                this.connectionStatus = StompConnectionStatus.Disconnected;
            }
        };
        this.subscribe = () => {
            this.stompHeaders['user_id'] = this.config.customerId;
            let custId = this.stompHeaders['user_id'];
            this.stompHeaders['id'] = _services_utilities_service__WEBPACK_IMPORTED_MODULE_6__["UtilitiesService"].uuidv4();
            this.client.subscribe('/topic/presence', (message) => {
                this.client.send("/app/presence", this.stompHeaders, JSON.stringify({ user_id: custId }));
            }, this.stompHeaders);
            //Header: Id should be different for different subscription
            this.stompHeaders['id'] = _services_utilities_service__WEBPACK_IMPORTED_MODULE_6__["UtilitiesService"].uuidv4();
            let channel = (this.config.flowId ? '/topic/chat/customer/' + custId + "/business/" + this.config.businessId + "/flow/" + this.config.flowId : '/topic/chat/customer/' + custId + "/business/" + this.config.businessId);
            this.client.subscribe(channel, (message) => {
                this.onMessage(JSON.parse(message.body));
            }, this.stompHeaders);
            this.stompHeaders['id'] = _services_utilities_service__WEBPACK_IMPORTED_MODULE_6__["UtilitiesService"].uuidv4();
            this.client.subscribe('/queue/events/user/' + custId, (message) => {
                let msg = new _models_ana_chat_models__WEBPACK_IMPORTED_MODULE_5__["ANAChatMessage"](JSON.parse(message.body));
                if (msg.events) {
                    for (var i = 0; i < msg.events.length; i++) {
                        let event = msg.events[i];
                        if (event.type == _models_ana_chat_models__WEBPACK_IMPORTED_MODULE_5__["EventType"].ACK) {
                            this.onAck(message.headers['tid']);
                        }
                        else if (event.type == _models_ana_chat_models__WEBPACK_IMPORTED_MODULE_5__["EventType"].TYPING) {
                            this.onTyping();
                        }
                    }
                }
            }, this.stompHeaders);
        };
        this.onError = (error) => {
            this.connectionStatus = StompConnectionStatus.Disconnected;
            if (this.consecutiveErrorsCount <= _services_utilities_service__WEBPACK_IMPORTED_MODULE_6__["Config"].consecutiveErrorsThreshold) {
                this.consecutiveErrorsCount++;
                console.log(this.consecutiveErrorsCount);
                if (this.consecutiveErrorsCount == _services_utilities_service__WEBPACK_IMPORTED_MODULE_6__["Config"].consecutiveErrorsThreshold)
                    if (this.handleConsecutiveErrorsState)
                        this.handleConsecutiveErrorsState();
            }
            if (typeof error === 'object')
                error = error.body;
            if (this.config && this.config.debug)
                this.debug('Socket Error: ' + JSON.stringify(error));
            this.debug(`Error: ${error}`);
            if (error.indexOf('Lost connection') !== -1)
                this.delayReconnect(5000);
        };
        this.onAck = (msgAckId, delivered) => {
            this.debug(`${delivered ? "DeliveredAck:" : "SentAck:"}` + msgAckId);
            if (this.handleAck)
                this.handleAck(msgAckId, delivered);
        };
        this.onTyping = () => {
            this.debug("Typing... ");
            if (this.handleTyping)
                this.handleTyping();
        };
        this.msgsIds = [];
        this.onMessage = (messageBody) => {
            let anaMsg = new _models_ana_chat_models__WEBPACK_IMPORTED_MODULE_5__["ANAChatMessage"](messageBody);
            if (anaMsg.data && Object.keys(anaMsg.data).length > 0) {
                this.sendMessageReceivedAck(anaMsg.meta);
            }
            if (anaMsg.events && anaMsg.events.length > 0) {
                for (var i = 0; i < anaMsg.events.length; i++) {
                    let event = anaMsg.events[i];
                    if (event.type == _models_ana_chat_models__WEBPACK_IMPORTED_MODULE_5__["EventType"].ACK) {
                        this.onAck(anaMsg.meta.id, true);
                    }
                    else if (event.type == _models_ana_chat_models__WEBPACK_IMPORTED_MODULE_5__["EventType"].TYPING) {
                        this.onTyping();
                    }
                }
            }
            if (anaMsg.data && Object.keys(anaMsg.data).length > 0) {
                if (this.handleMessageReceived) {
                    if (this.msgsIds.indexOf(anaMsg.meta.id) == -1) { //handle message only if it is not already handled
                        this.msgsIds.push(anaMsg.meta.id);
                        this.handleMessageReceived(anaMsg);
                    }
                }
            }
        };
        this.typingBusy = false;
    }
    connect(config) {
        this.clearTimer();
        this.configure(config);
        if (!this.client)
            throw Error('Client not configured!');
        this.debug('Connecting...');
        this.connectionStatus = StompConnectionStatus.Connecting;
        let headers = { user_id: this.config.customerId };
        this.client.connect(headers, this.onConnect, this.onError);
    }
    clearTimer() {
        if (this.timer) {
            clearTimeout(this.timer);
            this.timer = null;
        }
    }
    disconnect() {
        this.clearTimer();
        if (this.client && this.client.connected) {
            this.client.disconnect(() => this.debug("WebSocket Disconnected"));
        }
    }
    configure(config) {
        if (config === null && this.config === null)
            throw Error('No configuration provided!');
        if (config != null)
            this.config = config;
        this.sockInstance = new sockjs_client__WEBPACK_IMPORTED_MODULE_2__(this.config.endpoint);
        this.client = stompjs__WEBPACK_IMPORTED_MODULE_3__["over"](this.sockInstance);
        this.connectionStatus = StompConnectionStatus.Disconnected;
        this.client.debug = (this.config.debug || this.config.debug == null ? this.debug : null);
    }
    delayReconnect(t) {
        this.debug(`Reconnecting in ${t / 1000} second(s)...`);
        this.timer = setTimeout(() => {
            this.connect();
        }, t);
    }
    sendMessage(message, threadMsgRef) {
        let _sendMessage = () => {
            let msg = message.extract();
            this.debug("Sent Socket Message: ");
            this.debug(msg);
            let headers = this.stompHeaders;
            headers['tid'] = threadMsgRef.messageAckId;
            this.client.send(`/app/message`, headers, JSON.stringify(msg));
            threadMsgRef.status = _models_ana_chat_vm_models__WEBPACK_IMPORTED_MODULE_4__["MessageStatus"].SentToServer;
            threadMsgRef.startTimeoutTimer();
        };
        threadMsgRef.retrySending = _sendMessage; //Saving the context to be used for retrying in case of failure
        _sendMessage();
    }
    sendTypingMessage(meta) {
        if (this.typingBusy || !this.client) {
            return;
        }
        this.typingBusy = true;
        setTimeout(() => this.typingBusy = false, 1000);
        let msg = new _models_ana_chat_models__WEBPACK_IMPORTED_MODULE_5__["ANAChatMessage"]({
            meta: _services_utilities_service__WEBPACK_IMPORTED_MODULE_6__["UtilitiesService"].getReplyMeta(meta),
            events: [{
                    type: _models_ana_chat_models__WEBPACK_IMPORTED_MODULE_5__["EventType"].TYPING
                }]
        });
        let headers = this.stompHeaders;
        this.client.send(`/app/message`, headers, JSON.stringify(msg.extract()));
    }
    sendMessageReceivedAck(meta) {
        let msg = new _models_ana_chat_models__WEBPACK_IMPORTED_MODULE_5__["ANAChatMessage"]({
            meta: _services_utilities_service__WEBPACK_IMPORTED_MODULE_6__["UtilitiesService"].getReplyMeta(meta, false, true),
            events: [{
                    type: _models_ana_chat_models__WEBPACK_IMPORTED_MODULE_5__["EventType"].ACK
                }]
        });
        let headers = this.stompHeaders;
        this.client.send(`/app/message`, headers, JSON.stringify(msg.extract()));
    }
};
StompService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], StompService);

var StompConnectionStatus;
(function (StompConnectionStatus) {
    StompConnectionStatus[StompConnectionStatus["None"] = 0] = "None";
    StompConnectionStatus[StompConnectionStatus["Connected"] = 1] = "Connected";
    StompConnectionStatus[StompConnectionStatus["Disconnected"] = 2] = "Disconnected";
    StompConnectionStatus[StompConnectionStatus["Connecting"] = 3] = "Connecting";
})(StompConnectionStatus || (StompConnectionStatus = {}));


/***/ }),

/***/ "./src/app/services/utilities.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/utilities.service.ts ***!
  \***********************************************/
/*! exports provided: UtilitiesService, Config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilitiesService", function() { return UtilitiesService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Config", function() { return Config; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_ana_chat_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/ana-chat.models */ "./src/app/models/ana-chat.models.ts");
var UtilitiesService_1;



let UtilitiesService = UtilitiesService_1 = class UtilitiesService {
    constructor() { }
    static uuidv4() {
        return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).toString().replace(/[018]/g, c => (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16));
    }
    static anaDateDisplay(anaDate) {
        return `${parseInt(anaDate.mday)}-${parseInt(anaDate.month)}-${parseInt(anaDate.year)}`;
    }
    static anaDateToDate(anaDate) {
        return new Date(parseInt(anaDate.year), parseInt(anaDate.month) - 1, parseInt(anaDate.mday));
    }
    static anaTimeToDate(anaTime) {
        let d = new Date();
        d.setHours(parseInt(anaTime.hour), parseInt(anaTime.minute), parseInt(anaTime.second));
        return d;
    }
    static anaTimeDisplay(anaTime) {
        let hr = parseInt(anaTime.hour);
        let min = parseInt(anaTime.minute);
        let hours = hr > 12 ? hr - 12 : hr;
        let am_pm = hr >= 12 ? "PM" : "AM";
        hours = hours < 10 ? "0" + hours : hours;
        let minutes = min < 10 ? "0" + min : min;
        return hours + ":" + minutes + " " + am_pm;
    }
    static getReplyMeta(srcMeta, copyId, copyRespTo) {
        let replyMeta = {
            id: copyId ? srcMeta.id : this.uuidv4(),
            recipient: srcMeta.sender,
            responseTo: copyRespTo ? srcMeta.responseTo : srcMeta.id,
            sender: srcMeta.recipient,
            senderType: _models_ana_chat_models__WEBPACK_IMPORTED_MODULE_2__["SenderType"].USER,
            sessionId: srcMeta.sessionId,
            flowId: srcMeta.flowId,
            previousFlowId: srcMeta.previousFlowId,
            currentFlowId: srcMeta.currentFlowId,
            timestamp: new Date().getTime()
        };
        return replyMeta;
    }
    static googleMapsStaticLink(latLng) {
        return `https://maps.googleapis.com/maps/api/staticmap?center=${latLng.lat},${latLng.lng}&zoom=13&size=300x150&maptype=roadmap&markers=color:red|label:A|${latLng.lat},${latLng.lng}&key=${UtilitiesService_1.googleMapsConfigRef.apiKey}`;
    }
    static getAnaMediaTypeFromMIMEType(mimeType) {
        let assetType;
        if (mimeType.startsWith('image'))
            assetType = _models_ana_chat_models__WEBPACK_IMPORTED_MODULE_2__["MediaType"].IMAGE;
        else if (mimeType.startsWith('video'))
            assetType = _models_ana_chat_models__WEBPACK_IMPORTED_MODULE_2__["MediaType"].VIDEO;
        else if (mimeType.startsWith('audio'))
            assetType = _models_ana_chat_models__WEBPACK_IMPORTED_MODULE_2__["MediaType"].AUDIO;
        else
            assetType = _models_ana_chat_models__WEBPACK_IMPORTED_MODULE_2__["MediaType"].FILE;
        return assetType;
    }
    static anaAddressDisplay(anaAddress) {
        return [anaAddress.line1, anaAddress.area, anaAddress.city, anaAddress.state, anaAddress.country, anaAddress.pin].filter(x => x).join(", ");
    }
    static pad(number, width, z = '0') {
        let n = number + '';
        return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
    }
    static isMobile() {
        if (this._isMobile === null) {
            let check = false;
            (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)))
                check = true; })(navigator.userAgent || navigator.vendor || window.opera);
            this._isMobile = check;
        }
        return this._isMobile;
    }
    ;
};
UtilitiesService.googleMapsConfigRef = { apiKey: '' };
UtilitiesService._isMobile = null;
UtilitiesService = UtilitiesService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], UtilitiesService);

class Config {
}
Config.emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
Config.phoneRegex = /^\+?\d{6,15}$/;
Config.numberRegex = /^[0-9]*\.?[0-9]+$/;
Config.consecutiveErrorsThreshold = 5;
Config.consecutiveErrorsMessageText = "Uh oh, seems like you've lost your internet connection";
Config.consecutiveErrorsMessageAckId = "CONSECUTIVE_ERRORS_MESSAGE";
Config.simulatorBusinessId = 'ana-studio';
Config.simulatorCustomerId = 'ana-simulator';


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_5__);






if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/turtuvshin/Projects/chatbots.mn/simulator/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map