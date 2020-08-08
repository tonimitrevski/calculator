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
/* harmony import */ var _components_calculator_calculate_calculate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/calculator/calculate/calculate.component */ "./src/components/calculator/calculate/calculate.component.ts");
/* harmony import */ var _components_calculator_calculation_results_calculation_results_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/calculator/calculation-results/calculation-results.component */ "./src/components/calculator/calculation-results/calculation-results.component.ts");




class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 0, consts: [[1, "home-page"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please make your calculations bellow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-calculator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-calculations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_calculator_calculate_calculate_component__WEBPACK_IMPORTED_MODULE_1__["CalculateComponent"], _components_calculator_calculation_results_calculation_results_component__WEBPACK_IMPORTED_MODULE_2__["CalculationResultsComponent"]], styles: [".home-page[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.home-page[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: normal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQUNGO0FBQUU7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7QUFFSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob21lLXBhZ2Uge1xuICBwYWRkaW5nOiAyMHB4O1xuICBoMSB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_calculator_calculator_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/calculator/calculator.module */ "./src/components/calculator/calculator.module.ts");





class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _components_calculator_calculator_module__WEBPACK_IMPORTED_MODULE_3__["CalculatorModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _components_calculator_calculator_module__WEBPACK_IMPORTED_MODULE_3__["CalculatorModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _components_calculator_calculator_module__WEBPACK_IMPORTED_MODULE_3__["CalculatorModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/components/calculator/calculate/calculate.component.ts":
/*!********************************************************************!*\
  !*** ./src/components/calculator/calculate/calculate.component.ts ***!
  \********************************************************************/
/*! exports provided: CalculateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculateComponent", function() { return CalculateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_calculate_calculate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/calculate/calculate.service */ "./src/components/calculator/calculate/shared/calculate/calculate.service.ts");
/* harmony import */ var _shared_add_expression_add_expression_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/add-expression/add-expression.service */ "./src/components/calculator/calculate/shared/add-expression/add-expression.service.ts");
/* harmony import */ var _shared_object_values_calculation_result_object_value__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/object-values/calculation-result.object-value */ "./src/components/calculator/shared/object-values/calculation-result.object-value.ts");
/* harmony import */ var _shared_services_calculation_subscription_calculation_subscription_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/calculation-subscription/calculation-subscription.service */ "./src/components/calculator/shared/services/calculation-subscription/calculation-subscription.service.ts");






class CalculateComponent {
    constructor(calculationSubscriptionService) {
        this.calculationSubscriptionService = calculationSubscriptionService;
        this.expression = '';
        this.removeExpressionChar = 'C';
        this.calculateExpressionChar = '=';
        this.restartExpression = false;
    }
    onClick(e) {
        const classList = e.classList;
        if (!classList.contains('calculator_btn')) {
            return;
        }
        const currentChar = e.innerText;
        if (currentChar === this.removeExpressionChar) {
            this.restartExpressionImplementation();
            return;
        }
        if (this.restartExpression) {
            this.restartExpressionImplementation();
            this.restartExpression = false;
        }
        if (currentChar === this.calculateExpressionChar) {
            const result = _shared_calculate_calculate_service__WEBPACK_IMPORTED_MODULE_1__["CalculateService"].execute(this.expression);
            this.calculationSubscriptionService.changeSubject.next(new _shared_object_values_calculation_result_object_value__WEBPACK_IMPORTED_MODULE_3__["CalculationResultObjectValue"](this.expression, result));
            this.expression = result;
            this.restartExpression = true;
            return;
        }
        this.expression = _shared_add_expression_add_expression_service__WEBPACK_IMPORTED_MODULE_2__["AddExpressionService"].execute(this.expression, currentChar, this.lastChar);
        this.lastChar = currentChar;
    }
    restartExpressionImplementation() {
        this.expression = '';
    }
}
CalculateComponent.ɵfac = function CalculateComponent_Factory(t) { return new (t || CalculateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_calculation_subscription_calculation_subscription_service__WEBPACK_IMPORTED_MODULE_4__["CalculationSubscriptionService"])); };
CalculateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CalculateComponent, selectors: [["app-calculator"]], decls: 50, vars: 1, consts: [[1, "calculator"], [1, "calculator__input"], [1, "calculator__buttons", 3, "click"], [1, "calculator__buttons__operators"], [1, "calculator_btn", "calculator__buttons__operators__btn"], [1, "calculator__buttons__operators__btn"], [1, "calculator__buttons__main"], [1, "calculator__buttons__main__numbers"], [1, "calculator_btn", "calculator__buttons__main__numbers__nb"], [1, "calculator__buttons__main__numbers__nb", "random"], ["id", "clear", 1, "calculator_btn", "calculator__buttons__main__numbers__nb"], ["id", "result", 1, "calculator_btn", "calculator__buttons__main__equal"]], template: function CalculateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalculateComponent_Template_div_click_3_listener($event) { return ctx.onClick($event.target); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u00F7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "sin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "cos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "tan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Rand");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "=");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.expression);
    } }, styles: [".calculator[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  max-width: 500px;\n  margin: 0 auto;\n  padding: 20px;\n  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.2);\n  border-radius: 1px;\n}\n.calculator__input[_ngcontent-%COMP%] {\n  border: 1px solid #ddd;\n  border-radius: 1px;\n  height: 60px;\n  padding-right: 15px;\n  padding-top: 10px;\n  text-align: right;\n  margin-right: 6px;\n  font-size: 2.5rem;\n  overflow-x: auto;\n  transition: all 0.2s ease-in-out;\n}\n.calculator__input[_ngcontent-%COMP%]:hover {\n  border: 1px solid #bbb;\n  box-shadow: inset 0px 1px 4px 0px rgba(0, 0, 0, 0.2);\n}\n.calculator__buttons__operators[_ngcontent-%COMP%] {\n  display: flex;\n}\n.calculator__buttons__operators__btn[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 1px;\n  width: 24%;\n  text-align: center;\n  padding: 10px;\n  margin: 20px 4px 10px 0;\n  cursor: pointer;\n  background-color: #fab45e;\n  transition: ease-in-out, background-color 0.2s, box-shadow 0.2s;\n}\n.calculator__buttons__operators__btn[_ngcontent-%COMP%]:hover {\n  background-color: #f9a845;\n  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.2);\n}\n.calculator__buttons__operators__btn[_ngcontent-%COMP%]:active {\n  font-weight: bold;\n}\n.calculator__buttons__main[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.calculator__buttons__main__numbers[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n.calculator__buttons__main__numbers__nb[_ngcontent-%COMP%] {\n  display: flex;\n  width: 31.5%;\n  align-items: center;\n  justify-content: center;\n  border-radius: 1px;\n  text-align: center;\n  padding: 2px;\n  margin: 10px 4px 10px 0;\n  cursor: pointer;\n  background-color: #eae7e7;\n  transition: border-color 0.2s ease-in-out, background-color 0.2s, box-shadow 0.2s;\n}\n.calculator__buttons__main__numbers__nb[_ngcontent-%COMP%]:hover {\n  background-color: #d2cccc;\n  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.2);\n  border-color: #bbb;\n}\n.calculator__buttons__main__numbers__nb[_ngcontent-%COMP%]:active {\n  font-weight: bold;\n}\n.calculator__buttons__main__numbers__nb.random[_ngcontent-%COMP%] {\n  background-color: #ecec19c4;\n  text-transform: uppercase;\n  font-size: 1.2rem;\n}\n.calculator__buttons__main__equal[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 1px;\n  width: 24%;\n  text-align: center;\n  padding: 127px 10px;\n  margin: 10px 6px 10px 0;\n  vertical-align: top;\n  cursor: pointer;\n  color: #FFF;\n  background-color: #ea5336;\n  transition: all 0.2s ease-in-out;\n}\n.calculator__buttons__main__equal[_ngcontent-%COMP%]:hover {\n  background-color: #d73516;\n  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.2);\n}\n.calculator__buttons__main__equal[_ngcontent-%COMP%]:active {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL2NhbGN1bGF0b3IvY2FsY3VsYXRlL2NhbGN1bGF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBRUEsOENBQUE7RUFDQSxrQkFBQTtBQUNKO0FBQ0k7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO0FBQ1I7QUFBUTtFQUNJLHNCQUFBO0VBRUEsb0RBQUE7QUFFWjtBQUdRO0VBQ0ksYUFBQTtBQURaO0FBRVk7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsK0RBQUE7QUFBaEI7QUFDZ0I7RUFDSSx5QkFBQTtFQUVBLDhDQUFBO0FBQ3BCO0FBQ2dCO0VBQ0ksaUJBQUE7QUFDcEI7QUFJUTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtBQUZaO0FBSVk7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FBRmhCO0FBR2dCO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGlGQUFBO0FBRHBCO0FBRW9CO0VBQ0kseUJBQUE7RUFFQSw4Q0FBQTtFQUNBLGtCQUFBO0FBQXhCO0FBRW9CO0VBQ0ksaUJBQUE7QUFBeEI7QUFFb0I7RUFDSSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUFBeEI7QUFJWTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0NBQUE7QUFGaEI7QUFHZ0I7RUFDSSx5QkFBQTtFQUVBLDhDQUFBO0FBRHBCO0FBR2dCO0VBQ0ksaUJBQUE7QUFEcEIiLCJmaWxlIjoic3JjL2NvbXBvbmVudHMvY2FsY3VsYXRvci9jYWxjdWxhdGUvY2FsY3VsYXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhbGN1bGF0b3Ige1xuICAgIGRpc3BsYXk6ICBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDFweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIGJvcmRlci1yYWRpdXM6IDFweDtcblxuICAgICZfX2lucHV0IHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMXB4O1xuICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA2cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgICAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2UtaW4tb3V0O1xuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNiYmI7XG4gICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDBweCAxcHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMXB4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJl9fYnV0dG9ucyB7XG4gICAgICAgICZfX29wZXJhdG9ycyAge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICZfX2J0biB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDFweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjQlO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMjBweCA0cHggMTBweCAwO1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFiNDVlO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIC4ycywgYm94LXNoYWRvdyAuMnM7XG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkY29sb3I6I2ZhYjQ1ZSwgJGFtb3VudDogNSUpO1xuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAxcHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAxcHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICY6YWN0aXZlIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJl9fbWFpbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgICAgICAgICAmX19udW1iZXJzIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAmX19uYiB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMS41JTtcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDFweDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAycHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweCA0cHggMTBweCAwO1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlYWU3ZTc7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAuMnMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgLjJzLCBib3gtc2hhZG93IC4ycztcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJGNvbG9yOiNlYWU3ZTcsICRhbW91bnQ6IDEwJSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAxcHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMXB4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjYmJiO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICY6YWN0aXZlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICYucmFuZG9tIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlY2VjMTljNDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICZfX2VxdWFsIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMXB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyNCU7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEyN3B4IDEwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDZweCAxMHB4IDA7XG4gICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNGRkY7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojZWE1MzM2O1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkY29sb3I6ICNlYTUzMzYsICRhbW91bnQ6IDEwJSk7XG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDFweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDFweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJjphY3RpdmUge1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalculateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-calculator',
                templateUrl: './calculate.component.html',
                styleUrls: ['./calculate.component.scss']
            }]
    }], function () { return [{ type: _shared_services_calculation_subscription_calculation_subscription_service__WEBPACK_IMPORTED_MODULE_4__["CalculationSubscriptionService"] }]; }, null); })();


/***/ }),

/***/ "./src/components/calculator/calculate/shared/add-expression/add-expression.service.ts":
/*!*********************************************************************************************!*\
  !*** ./src/components/calculator/calculate/shared/add-expression/add-expression.service.ts ***!
  \*********************************************************************************************/
/*! exports provided: AddExpressionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddExpressionService", function() { return AddExpressionService; });
class AddExpressionService {
    static execute(expression, currentChar, lastChar) {
        if (!expression && this.operators.includes(currentChar)) {
            return expression;
        }
        if (this.operators.includes(currentChar) && this.operators.includes(lastChar)) {
            expression = expression.substring(0, expression.length - 1) + currentChar;
            return expression;
        }
        expression = expression += currentChar;
        return expression;
    }
}
AddExpressionService.operators = ['+', '-', '×', '÷'];


/***/ }),

/***/ "./src/components/calculator/calculate/shared/calculate/calculate.service.ts":
/*!***********************************************************************************!*\
  !*** ./src/components/calculator/calculate/shared/calculate/calculate.service.ts ***!
  \***********************************************************************************/
/*! exports provided: CalculateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculateService", function() { return CalculateService; });
class CalculateService {
    static execute(inputString) {
        // forming an array of numbers. eg for above string it will be: numbers = ['10', '26', '33', '56', '34', '23']
        const numbers = inputString.split(/\+|\-|\×|\÷/g);
        // forming an array of operators. for above string it will be: operators = ['+', '+', '-', '*', '/']
        // first we replace all the numbers and dot with empty string and then split
        const operators = inputString.replace(/[0-9]|\./g, '').split('');
        this.divideOperation(operators, numbers);
        this.multiplyOperation(operators, numbers);
        this.subtractOperation(operators, numbers);
        this.addOperation(operators, numbers);
        return numbers[0];
    }
    static addOperation(operators, numbers) {
        let add = operators.indexOf('+');
        while (add !== -1) {
            // using parseFloat is necessary, otherwise it will result in string concatenation :)
            numbers.splice(add, 2, String(parseFloat(numbers[add]) + parseFloat(numbers[add + 1])));
            operators.splice(add, 1);
            add = operators.indexOf('+');
        }
    }
    static subtractOperation(operators, numbers) {
        let subtract = operators.indexOf('-');
        while (subtract !== -1) {
            numbers.splice(subtract, 2, String(parseFloat(numbers[subtract]) - parseFloat(numbers[subtract + 1])));
            operators.splice(subtract, 1);
            subtract = operators.indexOf('-');
        }
    }
    static multiplyOperation(operators, numbers) {
        let multiply = operators.indexOf('×');
        while (multiply !== -1) {
            numbers.splice(multiply, 2, String(parseFloat(numbers[multiply]) * parseFloat(numbers[multiply + 1])));
            operators.splice(multiply, 1);
            multiply = operators.indexOf('×');
        }
    }
    static divideOperation(operators, numbers) {
        let divide = operators.indexOf('÷');
        while (divide !== -1) {
            numbers.splice(divide, 2, String(parseFloat(numbers[divide]) / parseFloat(numbers[divide + 1])));
            operators.splice(divide, 1);
            divide = operators.indexOf('÷');
        }
    }
}


/***/ }),

/***/ "./src/components/calculator/calculate/shared/get-random-number/get-random-number.service.ts":
/*!***************************************************************************************************!*\
  !*** ./src/components/calculator/calculate/shared/get-random-number/get-random-number.service.ts ***!
  \***************************************************************************************************/
/*! exports provided: GetRandomNumberService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetRandomNumberService", function() { return GetRandomNumberService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class GetRandomNumberService {
    constructor() { }
}
GetRandomNumberService.ɵfac = function GetRandomNumberService_Factory(t) { return new (t || GetRandomNumberService)(); };
GetRandomNumberService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GetRandomNumberService, factory: GetRandomNumberService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GetRandomNumberService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/components/calculator/calculation-results/calculation-results.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/components/calculator/calculation-results/calculation-results.component.ts ***!
  \****************************************************************************************/
/*! exports provided: CalculationResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculationResultsComponent", function() { return CalculationResultsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_services_calculation_subscription_calculation_subscription_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/calculation-subscription/calculation-subscription.service */ "./src/components/calculator/shared/services/calculation-subscription/calculation-subscription.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function CalculationResultsComponent_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "=");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const calculation_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](calculation_r1.expression);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](calculation_r1.result);
} }
class CalculationResultsComponent {
    constructor(calculationSubscriptionService) {
        this.calculationSubscriptionService = calculationSubscriptionService;
        this.listResults = [];
    }
    ngOnInit() {
        this.calculationSubscriptionSubscription = this.calculationSubscriptionService.onChange.subscribe((value) => {
            this.assignResult(value);
        });
    }
    assignResult(value) {
        if (this.listResults.length >= 5) {
            this.listResults.shift();
        }
        this.listResults.push(value);
    }
    ngOnDestroy() {
        this.calculationSubscriptionSubscription.unsubscribe();
    }
}
CalculationResultsComponent.ɵfac = function CalculationResultsComponent_Factory(t) { return new (t || CalculationResultsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_calculation_subscription_calculation_subscription_service__WEBPACK_IMPORTED_MODULE_1__["CalculationSubscriptionService"])); };
CalculationResultsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CalculationResultsComponent, selectors: [["app-calculations"]], decls: 5, vars: 1, consts: [[1, "calculations"], [1, "calculations__cont"], ["class", "calculations__cont__row", 4, "ngFor", "ngForOf"], [1, "calculations__cont__row"]], template: function CalculationResultsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Your latest 5 calculations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CalculationResultsComponent_p_4_Template, 7, 2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listResults);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".calculations[_ngcontent-%COMP%] {\n  margin-top: 40px;\n}\n.calculations[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: normal;\n  font-size: 1.3rem;\n  padding-bottom: 10px;\n  border-bottom: 2px solid #ea5336;\n}\n.calculations__cont[_ngcontent-%COMP%] {\n  padding: 20px 0;\n}\n.calculations__cont__row[_ngcontent-%COMP%] {\n  padding: 10px;\n  margin: 0 0 5px 0;\n  background-color: #fab45e;\n}\n.calculations__cont__row[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #fccb8f;\n}\n.calculations__cont__row[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  margin: 0 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL2NhbGN1bGF0b3IvY2FsY3VsYXRpb24tcmVzdWx0cy9jYWxjdWxhdGlvbi1yZXN1bHRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUFDSjtBQUFJO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0NBQUE7QUFFUjtBQUFJO0VBQ0ksZUFBQTtBQUVSO0FBRFE7RUFDSSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBQUdaO0FBRlk7RUFDSSx5QkFBQTtBQUloQjtBQUZZO0VBQ0ksYUFBQTtBQUloQiIsImZpbGUiOiJzcmMvY29tcG9uZW50cy9jYWxjdWxhdG9yL2NhbGN1bGF0aW9uLXJlc3VsdHMvY2FsY3VsYXRpb24tcmVzdWx0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYWxjdWxhdGlvbnMge1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgaDMge1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZWE1MzM2O1xuICAgIH1cbiAgICAmX19jb250IHtcbiAgICAgICAgcGFkZGluZzogMjBweCAwO1xuICAgICAgICAmX19yb3cge1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgIG1hcmdpbjogMCAwIDVweCAwO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhYjQ1ZTtcbiAgICAgICAgICAgICY6bnRoLWNoaWxkKGV2ZW4pICB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbigkY29sb3I6ICNmYWI0NWUsICRhbW91bnQ6IDEwJSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNtYWxsIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalculationResultsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-calculations',
                templateUrl: './calculation-results.component.html',
                styleUrls: ['./calculation-results.component.scss']
            }]
    }], function () { return [{ type: _shared_services_calculation_subscription_calculation_subscription_service__WEBPACK_IMPORTED_MODULE_1__["CalculationSubscriptionService"] }]; }, null); })();


/***/ }),

/***/ "./src/components/calculator/calculator.module.ts":
/*!********************************************************!*\
  !*** ./src/components/calculator/calculator.module.ts ***!
  \********************************************************/
/*! exports provided: CalculatorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculatorModule", function() { return CalculatorModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _calculate_calculate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calculate/calculate.component */ "./src/components/calculator/calculate/calculate.component.ts");
/* harmony import */ var _calculate_shared_get_random_number_get_random_number_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calculate/shared/get-random-number/get-random-number.service */ "./src/components/calculator/calculate/shared/get-random-number/get-random-number.service.ts");
/* harmony import */ var _calculation_results_calculation_results_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./calculation-results/calculation-results.component */ "./src/components/calculator/calculation-results/calculation-results.component.ts");
/* harmony import */ var _shared_services_calculation_subscription_calculation_subscription_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/services/calculation-subscription/calculation-subscription.service */ "./src/components/calculator/shared/services/calculation-subscription/calculation-subscription.service.ts");







class CalculatorModule {
}
CalculatorModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CalculatorModule });
CalculatorModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CalculatorModule_Factory(t) { return new (t || CalculatorModule)(); }, providers: [_calculate_shared_get_random_number_get_random_number_service__WEBPACK_IMPORTED_MODULE_3__["GetRandomNumberService"], _shared_services_calculation_subscription_calculation_subscription_service__WEBPACK_IMPORTED_MODULE_5__["CalculationSubscriptionService"]], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CalculatorModule, { declarations: [_calculate_calculate_component__WEBPACK_IMPORTED_MODULE_2__["CalculateComponent"], _calculation_results_calculation_results_component__WEBPACK_IMPORTED_MODULE_4__["CalculationResultsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_calculate_calculate_component__WEBPACK_IMPORTED_MODULE_2__["CalculateComponent"], _calculation_results_calculation_results_component__WEBPACK_IMPORTED_MODULE_4__["CalculationResultsComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalculatorModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_calculate_calculate_component__WEBPACK_IMPORTED_MODULE_2__["CalculateComponent"], _calculation_results_calculation_results_component__WEBPACK_IMPORTED_MODULE_4__["CalculationResultsComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                providers: [_calculate_shared_get_random_number_get_random_number_service__WEBPACK_IMPORTED_MODULE_3__["GetRandomNumberService"], _shared_services_calculation_subscription_calculation_subscription_service__WEBPACK_IMPORTED_MODULE_5__["CalculationSubscriptionService"]],
                exports: [_calculate_calculate_component__WEBPACK_IMPORTED_MODULE_2__["CalculateComponent"], _calculation_results_calculation_results_component__WEBPACK_IMPORTED_MODULE_4__["CalculationResultsComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/components/calculator/shared/object-values/calculation-result.object-value.ts":
/*!*******************************************************************************************!*\
  !*** ./src/components/calculator/shared/object-values/calculation-result.object-value.ts ***!
  \*******************************************************************************************/
/*! exports provided: CalculationResultObjectValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculationResultObjectValue", function() { return CalculationResultObjectValue; });
class CalculationResultObjectValue {
    constructor(expression, result) {
        this.expression = expression;
        this.result = result;
    }
}


/***/ }),

/***/ "./src/components/calculator/shared/services/calculation-subscription/calculation-subscription.service.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/components/calculator/shared/services/calculation-subscription/calculation-subscription.service.ts ***!
  \****************************************************************************************************************/
/*! exports provided: CalculationSubscriptionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculationSubscriptionService", function() { return CalculationSubscriptionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



class CalculationSubscriptionService {
    constructor() {
        /**
         * Change event emitter.
         * {BehaviorSubject}
         */
        this.changeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        /**
         * Change event observable.
         * Observable<CalculationResultObjectValue>}
         */
        this.onChange = this.changeSubject.asObservable();
    }
}
CalculationSubscriptionService.ɵfac = function CalculationSubscriptionService_Factory(t) { return new (t || CalculationSubscriptionService)(); };
CalculationSubscriptionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CalculationSubscriptionService, factory: CalculationSubscriptionService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalculationSubscriptionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


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

module.exports = __webpack_require__(/*! /home/runner/work/calculator/calculator/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map