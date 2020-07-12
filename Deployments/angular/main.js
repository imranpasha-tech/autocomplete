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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./autocomplete/autocomplete.component */ "./src/app/autocomplete/autocomplete.component.ts");



class AppComponent {
    constructor() {
        this.title = 'autocomplete-angular';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-autocomplete");
    } }, directives: [_autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_1__["AutocompleteComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./autocomplete/autocomplete.component */ "./src/app/autocomplete/autocomplete.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");








class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_4__["AutocompleteComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _autocomplete_autocomplete_component__WEBPACK_IMPORTED_MODULE_4__["AutocompleteComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/autocomplete/autocomplete.component.ts":
/*!********************************************************!*\
  !*** ./src/app/autocomplete/autocomplete.component.ts ***!
  \********************************************************/
/*! exports provided: AutocompleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutocompleteComponent", function() { return AutocompleteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _service_autocomplete_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service/autocomplete.service */ "./src/app/autocomplete/service/autocomplete.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





const _c0 = ["input"];
function AutocompleteComponent_li_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const school_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](school_r2.city);
} }
class AutocompleteComponent {
    constructor(autocompleteService) {
        this.autocompleteService = autocompleteService;
    }
    ngOnInit() {
    }
    autocomplete(event) {
        console.log(event);
        this.schools = [];
        if (event.keyCode >= 65 && event.keyCode <= 90) {
            console.log(event.key);
            this.autocompleteService.getSuggestions(event.key).subscribe(response => {
                console.log("response is: ", response);
                this.schools = response;
            });
        }
        if (event.keyCode == 8) {
            this.schools = [];
            console.log(this.input.nativeElement.value);
            let text = this.input.nativeElement.value;
            if (text != "") {
                console.log("not empty");
                this.autocompleteService.getSuggestions(this.input.nativeElement.value).subscribe(response => {
                    console.log("response is: ", response);
                    this.schools = response;
                });
            }
            else {
                this.schools = [];
            }
        }
    }
}
AutocompleteComponent.ɵfac = function AutocompleteComponent_Factory(t) { return new (t || AutocompleteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_autocomplete_service__WEBPACK_IMPORTED_MODULE_1__["AutocompleteService"])); };
AutocompleteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AutocompleteComponent, selectors: [["app-autocomplete"]], viewQuery: function AutocompleteComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.input = _t.first);
    } }, decls: 13, vars: 1, consts: [["lang", "en"], ["charset", "UTF-8"], ["bgcolor", "#ffc600"], [1, "autocomplete-form"], ["type", "text", "placeholder", "City or State", 1, "search", 3, "keyup", "change"], ["input", ""], [1, "suggestions"], [4, "ngFor", "ngForOf"]], template: function AutocompleteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Type Ahead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "body", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Search for Schools");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function AutocompleteComponent_Template_input_keyup_9_listener($event) { return ctx.autocomplete($event); })("change", function AutocompleteComponent_Template_input_change_9_listener($event) { return ctx.autocomplete($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AutocompleteComponent_li_12_Template, 2, 1, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.schools);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["html[_ngcontent-%COMP%] {\r\n    box-sizing: border-box;\r\n    background: #ffc600;\r\n    font-family: 'helvetica neue';\r\n    font-size: 20px;\r\n    font-weight: 200;\r\n    min-height: 500px;\r\n    width: 100%;\r\n  }\r\nbody[_ngcontent-%COMP%] {\r\n  background-color: #ffc600;\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:before, *[_ngcontent-%COMP%]:after {\r\n    box-sizing: inherit;\r\n  }\r\nh4[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  font-family: 'helvetica neue';\r\n  text-transform: uppercase;\r\n  font-size: 30px;\r\nletter-spacing: 0.162em;\r\nfont-weight: 600;\r\ncolor: white;\r\n}\r\ninput[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    padding: 20px;\r\n  }\r\n.autocomplete-form[_ngcontent-%COMP%] {\r\n    max-width: 400px;\r\n    margin: 50px auto;\r\n  }\r\ninput.search[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    text-align: center;\r\n    outline: 0;\r\n    border: 10px solid #F7F7F7;\r\n    width: 120%;\r\n    left: -10%;\r\n    position: relative;\r\n    top: 10px;\r\n    z-index: 2;\r\n    border-radius: 5px;\r\n    font-size: 40px;\r\n    box-shadow: 0 0 5px rgba(0, 0, 0, 0.12), inset 0 0 2px rgba(0, 0, 0, 0.19);\r\n  }\r\n.suggestions[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    padding: 0;\r\n    position: relative;\r\n    \r\n  }\r\n.suggestions[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    background: white;\r\n    list-style: none;\r\n    border-bottom: 1px solid #D8D8D8;\r\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.14);\r\n    margin: 0;\r\n    padding: 20px;\r\n    transition: background 0.2s;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    text-transform: capitalize;\r\n  }\r\n.suggestions[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(even) {\r\n    transform: perspective(100px) rotateX(3deg) translateY(2px) scale(1.001);\r\n    background: linear-gradient(to bottom,  #ffffff 0%,#EFEFEF 100%);\r\n  }\r\n.suggestions[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(odd) {\r\n    transform: perspective(100px) rotateX(-3deg) translateY(3px);\r\n    background: linear-gradient(to top,  #ffffff 0%,#EFEFEF 100%);\r\n  }\r\nspan.population[_ngcontent-%COMP%] {\r\n    font-size: 15px;\r\n  }\r\n.hl[_ngcontent-%COMP%] {\r\n    background: #ffc600;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsV0FBVztFQUNiO0FBQ0Y7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFdBQVc7QUFDYjtBQUNFO0lBQ0UsbUJBQW1CO0VBQ3JCO0FBRUY7RUFDRSxrQkFBa0I7RUFDbEIsNkJBQTZCO0VBQzdCLHlCQUF5QjtFQUN6QixlQUFlO0FBQ2pCLHVCQUF1QjtBQUN2QixnQkFBZ0I7QUFDaEIsWUFBWTtBQUNaO0FBQ0U7SUFDRSxXQUFXO0lBQ1gsYUFBYTtFQUNmO0FBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0VBQ25CO0FBRUE7SUFDRSxTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDViwwQkFBMEI7SUFDMUIsV0FBVztJQUNYLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsU0FBUztJQUNULFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLDBFQUEwRTtFQUM1RTtBQUVBO0lBQ0UsU0FBUztJQUNULFVBQVU7SUFDVixrQkFBa0I7SUFDbEIscUJBQXFCO0VBQ3ZCO0FBRUE7SUFDRSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGdDQUFnQztJQUNoQyx3Q0FBd0M7SUFDeEMsU0FBUztJQUNULGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QiwwQkFBMEI7RUFDNUI7QUFFQTtJQUNFLHdFQUF3RTtJQUN4RSxnRUFBZ0U7RUFDbEU7QUFFQTtJQUNFLDREQUE0RDtJQUM1RCw2REFBNkQ7RUFDL0Q7QUFFQTtJQUNFLGVBQWU7RUFDakI7QUFFQTtJQUNFLG1CQUFtQjtFQUNyQiIsImZpbGUiOiJzcmMvYXBwL2F1dG9jb21wbGV0ZS9hdXRvY29tcGxldGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmM2MDA7XHJcbiAgICBmb250LWZhbWlseTogJ2hlbHZldGljYSBuZXVlJztcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICBtaW4taGVpZ2h0OiA1MDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuYm9keSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYzYwMDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuICAqLCAqOmJlZm9yZSwgKjphZnRlciB7XHJcbiAgICBib3gtc2l6aW5nOiBpbmhlcml0O1xyXG4gIH1cclxuICBcclxuaDQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogJ2hlbHZldGljYSBuZXVlJztcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxubGV0dGVyLXNwYWNpbmc6IDAuMTYyZW07XHJcbmZvbnQtd2VpZ2h0OiA2MDA7XHJcbmNvbG9yOiB3aGl0ZTtcclxufVxyXG4gIGlucHV0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLmF1dG9jb21wbGV0ZS1mb3JtIHtcclxuICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgICBtYXJnaW46IDUwcHggYXV0bztcclxuICB9XHJcbiAgXHJcbiAgaW5wdXQuc2VhcmNoIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgICBib3JkZXI6IDEwcHggc29saWQgI0Y3RjdGNztcclxuICAgIHdpZHRoOiAxMjAlO1xyXG4gICAgbGVmdDogLTEwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMTBweDtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIGluc2V0IDAgMCAycHggcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxuICB9XHJcbiAgXHJcbiAgLnN1Z2dlc3Rpb25zIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAvKnBlcnNwZWN0aXZlOiAyMHB4OyovXHJcbiAgfVxyXG4gIFxyXG4gIC5zdWdnZXN0aW9ucyBsaSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0Q4RDhEODtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCk7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjJzO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIH1cclxuICBcclxuICAuc3VnZ2VzdGlvbnMgbGk6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTAwcHgpIHJvdGF0ZVgoM2RlZykgdHJhbnNsYXRlWSgycHgpIHNjYWxlKDEuMDAxKTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICAjZmZmZmZmIDAlLCNFRkVGRUYgMTAwJSk7XHJcbiAgfVxyXG4gIFxyXG4gIC5zdWdnZXN0aW9ucyBsaTpudGgtY2hpbGQob2RkKSB7XHJcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEwMHB4KSByb3RhdGVYKC0zZGVnKSB0cmFuc2xhdGVZKDNweCk7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAgI2ZmZmZmZiAwJSwjRUZFRkVGIDEwMCUpO1xyXG4gIH1cclxuICBcclxuICBzcGFuLnBvcHVsYXRpb24ge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gIH1cclxuICBcclxuICAuaGwge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmYzYwMDtcclxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AutocompleteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-autocomplete',
                templateUrl: './autocomplete.component.html',
                styleUrls: ['./autocomplete.component.css']
            }]
    }], function () { return [{ type: _service_autocomplete_service__WEBPACK_IMPORTED_MODULE_1__["AutocompleteService"] }]; }, { input: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['input', { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/autocomplete/service/autocomplete.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/autocomplete/service/autocomplete.service.ts ***!
  \**************************************************************/
/*! exports provided: AutocompleteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutocompleteService", function() { return AutocompleteService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");




class AutocompleteService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.endpoint = "http://localhost:3030/autocomplete";
    }
    getSuggestions(keyword) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]()
            .set('keyword', keyword);
        return this.httpClient.get(this.endpoint, { params });
    }
}
AutocompleteService.ɵfac = function AutocompleteService_Factory(t) { return new (t || AutocompleteService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
AutocompleteService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AutocompleteService, factory: AutocompleteService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AutocompleteService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Progress\AutoComplete\workspace\autocomplete-angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map