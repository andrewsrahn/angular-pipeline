(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/hero/hero.module": [
		"./src/app/hero/hero.module.ts",
		"app-hero-hero-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error('Cannot find module "' + req + '".');
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: "\n  <h2 highlight=\"skyblue\">About</h2>\n  <h3>Quote of the day:</h3>\n  <twain-quote></twain-quote>\n  "
        })
    ], AboutComponent);
    return AboutComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot([
                    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
                    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"] },
                    { path: 'heroes', loadChildren: 'app/hero/hero.module#HeroModule' }
                ])
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] // re-export the module declarations
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

;


/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-banner></app-banner>\n<app-welcome></app-welcome>\n<nav>\n  <a routerLink=\"/dashboard\">Dashboard</a>\n  <a routerLink=\"/heroes\">Heroes</a>\n  <a routerLink=\"/about\">About</a>\n</nav>\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _banner_banner_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./banner/banner.component */ "./src/app/banner/banner.component.ts");
/* harmony import */ var _model_hero_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./model/hero.service */ "./src/app/model/hero.service.ts");
/* harmony import */ var _model_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./model/user.service */ "./src/app/model/user.service.ts");
/* harmony import */ var _twain_twain_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./twain/twain.component */ "./src/app/twain/twain.component.ts");
/* harmony import */ var _twain_twain_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./twain/twain.service */ "./src/app/twain/twain.service.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dashboard/dashboard.module */ "./src/app/dashboard/dashboard.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angular-in-memory-web-api */ "./node_modules/angular-in-memory-web-api/index.js");
/* harmony import */ var _in_memory_data_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./in-memory-data.service */ "./src/app/in-memory-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_12__["DashboardModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
                // and returns simulated server responses.
                // Remove it when a real server is ready to receive requests.
                angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_14__["HttpClientInMemoryWebApiModule"].forRoot(_in_memory_data_service__WEBPACK_IMPORTED_MODULE_15__["InMemoryDataService"], { dataEncapsulation: false })
            ],
            providers: [
                _model_hero_service__WEBPACK_IMPORTED_MODULE_7__["HeroService"],
                _twain_twain_service__WEBPACK_IMPORTED_MODULE_10__["TwainService"],
                _model_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"],
                _banner_banner_component__WEBPACK_IMPORTED_MODULE_6__["BannerComponent"],
                _twain_twain_component__WEBPACK_IMPORTED_MODULE_9__["TwainComponent"],
                _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_11__["WelcomeComponent"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/banner/banner.component.ts":
/*!********************************************!*\
  !*** ./src/app/banner/banner.component.ts ***!
  \********************************************/
/*! exports provided: BannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerComponent", function() { return BannerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BannerComponent = /** @class */ (function () {
    function BannerComponent() {
        this.title = 'Test Tour of Heroes';
    }
    BannerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-banner',
            template: '<h1>{{title}}</h1>',
            styles: ['h1 { color: green; font-size: 350%}']
        })
    ], BannerComponent);
    return BannerComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard-hero.component.css":
/*!********************************************************!*\
  !*** ./src/app/dashboard/dashboard-hero.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hero {\n\tpadding: 20px;\n  position: relative;\n\ttext-align: center;\n\tcolor: #eee;\n\tmax-height: 120px;\n\tmin-width: 120px;\n\tbackground-color: #607D8B;\n\tborder-radius: 2px;\n}\n\n.hero:hover {\n  background-color: #EEE;\n  cursor: pointer;\n  color: #607d8b;\n}\n\n@media (max-width: 600px) {\n\t.hero {\n\t  font-size: 10px;\n\t  max-height: 75px; }\n}\n\n@media (max-width: 1024px) {\n\t.hero {\n\t  min-width: 60px;\n\t}\n}\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard-hero.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/dashboard/dashboard-hero.component.ts ***!
  \*******************************************************/
/*! exports provided: DashboardHeroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardHeroComponent", function() { return DashboardHeroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardHeroComponent = /** @class */ (function () {
    function DashboardHeroComponent() {
        this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    DashboardHeroComponent.prototype.click = function () { this.selected.emit(this.hero); };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DashboardHeroComponent.prototype, "hero", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DashboardHeroComponent.prototype, "selected", void 0);
    DashboardHeroComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dashboard-hero',
            template: "\n    <div (click)=\"click()\" class=\"hero\">\n      {{hero.name | uppercase}}\n    </div>",
            styles: [__webpack_require__(/*! ./dashboard-hero.component.css */ "./src/app/dashboard/dashboard-hero.component.css")]
        })
    ], DashboardHeroComponent);
    return DashboardHeroComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "[class*='col-'] {\n  float: left;\n}\n*, *:after, *:before {\n\tbox-sizing: border-box;\n}\nh3 {\n  text-align: center; margin-bottom: 0;\n}\n[class*='col-'] {\n  padding-right: 20px;\n  padding-bottom: 20px;\n}\n[class*='col-']:last-of-type {\n  padding-right: 0;\n}\n.grid {\n  margin: 0;\n}\n.col-1-4 {\n  width: 25%;\n}\n.grid-pad {\n  padding: 10px 0;\n}\n.grid-pad > [class*='col-']:last-of-type {\n  padding-right: 20px;\n}\n@media (max-width: 1024px) {\n\t.grid {\n\t  margin: 0;\n\t}\n}\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 highlight>{{title}}</h2>\n\n<div class=\"grid grid-pad\">\n  <dashboard-hero *ngFor=\"let hero of heroes\"  class=\"col-1-4\"\n    [hero]=hero  (selected)=\"gotoDetail($event)\" >\n  </dashboard-hero>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _model_hero_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/hero.service */ "./src/app/model/hero.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(router, heroService) {
        this.router = router;
        this.heroService = heroService;
        this.heroes = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.heroService.getHeroes()
            .subscribe(function (heroes) { return _this.heroes = heroes.slice(1, 5); });
    };
    DashboardComponent.prototype.gotoDetail = function (hero) {
        var url = "/heroes/" + hero.id;
        this.router.navigateByUrl(url);
    };
    Object.defineProperty(DashboardComponent.prototype, "title", {
        get: function () {
            var cnt = this.heroes.length;
            return cnt === 0 ? 'No Heroes' :
                cnt === 1 ? 'Top Hero' : "Top " + cnt + " Heroes";
        },
        enumerable: true,
        configurable: true
    });
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _model_hero_service__WEBPACK_IMPORTED_MODULE_2__["HeroService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _dashboard_hero_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard-hero.component */ "./src/app/dashboard/dashboard-hero.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: 'dashboard', component: _dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"] },
];
var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"], _dashboard_hero_component__WEBPACK_IMPORTED_MODULE_4__["DashboardHeroComponent"]]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/in-memory-data.service.ts":
/*!*******************************************!*\
  !*** ./src/app/in-memory-data.service.ts ***!
  \*******************************************/
/*! exports provided: InMemoryDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InMemoryDataService", function() { return InMemoryDataService; });
/* harmony import */ var _twain_twain_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./twain/twain.data */ "./src/app/twain/twain.data.ts");

// Adjust to reduce number of quotes
var maxQuotes = Infinity; // 0;
/** Create in-memory database of heroes and quotes */
var InMemoryDataService = /** @class */ (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var heroes = [
            { id: 11, name: 'Mr. Nice' },
            { id: 12, name: 'Narco' },
            { id: 13, name: 'Bombasto' },
            { id: 14, name: 'Celeritas' },
            { id: 15, name: 'Magneta' },
            { id: 16, name: 'RubberMan' },
            { id: 17, name: 'Dynama' },
            { id: 18, name: 'Dr IQ' },
            { id: 19, name: 'Magma' },
            { id: 20, name: 'Tornado' }
        ];
        return { heroes: heroes, quotes: _twain_twain_data__WEBPACK_IMPORTED_MODULE_0__["QUOTES"].slice(0, maxQuotes) };
    };
    return InMemoryDataService;
}());



/***/ }),

/***/ "./src/app/model/hero.service.ts":
/*!***************************************!*\
  !*** ./src/app/model/hero.service.ts ***!
  \***************************************/
/*! exports provided: HeroService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroService", function() { return HeroService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var HeroService = /** @class */ (function () {
    function HeroService(http) {
        this.http = http;
        this.heroesUrl = 'api/heroes'; // URL to web api
    }
    /** GET heroes from the server */
    HeroService.prototype.getHeroes = function () {
        var _this = this;
        return this.http.get(this.heroesUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (heroes) { return _this.log("fetched heroes"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('getHeroes')));
    };
    /** GET hero by id. Return `undefined` when id not found */
    HeroService.prototype.getHero = function (id) {
        var _this = this;
        if (typeof id === 'string') {
            id = parseInt(id, 10);
        }
        var url = this.heroesUrl + "/?id=" + id;
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (heroes) { return heroes[0]; }), // returns a {0|1} element array
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (h) {
            var outcome = h ? "fetched" : "did not find";
            _this.log(outcome + " hero id=" + id);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError("getHero id=" + id)));
    };
    //////// Save methods //////////
    /** POST: add a new hero to the server */
    HeroService.prototype.addHero = function (hero) {
        var _this = this;
        return this.http.post(this.heroesUrl, hero, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (hero) { return _this.log("added hero w/ id=" + hero.id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('addHero')));
    };
    /** DELETE: delete the hero from the server */
    HeroService.prototype.deleteHero = function (hero) {
        var _this = this;
        var id = typeof hero === 'number' ? hero : hero.id;
        var url = this.heroesUrl + "/" + id;
        return this.http.delete(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_) { return _this.log("deleted hero id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('deleteHero')));
    };
    /** PUT: update the hero on the server */
    HeroService.prototype.updateHero = function (hero) {
        var _this = this;
        return this.http.put(this.heroesUrl, hero, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_) { return _this.log("updated hero id=" + hero.id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('updateHero')));
    };
    /**
     * Returns a function that handles Http operation failures.
     * This error handler lets the app continue to run as if no error occurred.
     * @param operation - name of the operation that failed
     */
    HeroService.prototype.handleError = function (operation) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            var message = (error.error instanceof ErrorEvent) ?
                error.error.message :
                "server returned code " + error.status + " with body \"" + error.error + "\"";
            // TODO: better job of transforming error for user consumption
            throw new Error(operation + " failed: " + message);
        };
    };
    HeroService.prototype.log = function (message) {
        console.log('HeroService: ' + message);
    };
    HeroService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HeroService);
    return HeroService;
}());



/***/ }),

/***/ "./src/app/model/user.service.ts":
/*!***************************************!*\
  !*** ./src/app/model/user.service.ts ***!
  \***************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UserService = /** @class */ (function () {
    function UserService() {
        this.isLoggedIn = true;
        this.user = { name: 'Sam Spade' };
    }
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/shared/highlight.directive.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/highlight.directive.ts ***!
  \***********************************************/
/*! exports provided: HighlightDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightDirective", function() { return HighlightDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HighlightDirective = /** @class */ (function () {
    function HighlightDirective(el) {
        this.el = el;
        this.defaultColor = 'rgb(211, 211, 211)'; // lightgray
        el.nativeElement.style.customProperty = true;
    }
    HighlightDirective.prototype.ngOnChanges = function () {
        this.el.nativeElement.style.backgroundColor = this.bgColor || this.defaultColor;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('highlight'),
        __metadata("design:type", String)
    ], HighlightDirective.prototype, "bgColor", void 0);
    HighlightDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({ selector: '[highlight]' })
        /** Set backgroundColor for the attached element to highlight color
         *  and set the element's customProperty to true */
        ,
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], HighlightDirective);
    return HighlightDirective;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _highlight_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./highlight.directive */ "./src/app/shared/highlight.directive.ts");
/* harmony import */ var _title_case_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./title-case.pipe */ "./src/app/shared/title-case.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                // SharedModule importers won't have to import FormsModule too
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _highlight_directive__WEBPACK_IMPORTED_MODULE_3__["HighlightDirective"],
                _title_case_pipe__WEBPACK_IMPORTED_MODULE_4__["TitleCasePipe"]
            ],
            declarations: [_highlight_directive__WEBPACK_IMPORTED_MODULE_3__["HighlightDirective"], _title_case_pipe__WEBPACK_IMPORTED_MODULE_4__["TitleCasePipe"]]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/title-case.pipe.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/title-case.pipe.ts ***!
  \*******************************************/
/*! exports provided: TitleCasePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleCasePipe", function() { return TitleCasePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TitleCasePipe = /** @class */ (function () {
    /** Transform to Title Case: uppercase the first letter of the words in a string.*/
    function TitleCasePipe() {
    }
    TitleCasePipe.prototype.transform = function (input) {
        return input.length === 0 ? '' :
            input.replace(/\w\S*/g, (function (txt) { return txt[0].toUpperCase() + txt.substr(1).toLowerCase(); }));
    };
    TitleCasePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'titlecase', pure: true })
        /** Transform to Title Case: uppercase the first letter of the words in a string.*/
    ], TitleCasePipe);
    return TitleCasePipe;
}());



/***/ }),

/***/ "./src/app/twain/twain.component.ts":
/*!******************************************!*\
  !*** ./src/app/twain/twain.component.ts ***!
  \******************************************/
/*! exports provided: TwainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwainComponent", function() { return TwainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _twain_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./twain.service */ "./src/app/twain/twain.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TwainComponent = /** @class */ (function () {
    function TwainComponent(twainService) {
        this.twainService = twainService;
    }
    TwainComponent.prototype.ngOnInit = function () {
        this.getQuote();
    };
    TwainComponent.prototype.getQuote = function () {
        var _this = this;
        this.errorMessage = '';
        this.quote = this.twainService.getQuote().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])('...'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            // Wait a turn because errorMessage already set once this turn
            setTimeout(function () { return _this.errorMessage = err.message || err.toString(); });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])('...'); // reset message to placeholder
        }));
    };
    TwainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'twain-quote',
            template: "\n    <p class=\"twain\"><i>{{quote | async}}</i></p>\n    <button (click)=\"getQuote()\">Next quote</button>\n    <p class=\"error\" *ngIf=\"errorMessage\">{{ errorMessage }}</p>",
            styles: [
                ".twain { font-style: italic; } .error { color: red; }"
            ]
        }),
        __metadata("design:paramtypes", [_twain_service__WEBPACK_IMPORTED_MODULE_3__["TwainService"]])
    ], TwainComponent);
    return TwainComponent;
}());



/***/ }),

/***/ "./src/app/twain/twain.data.ts":
/*!*************************************!*\
  !*** ./src/app/twain/twain.data.ts ***!
  \*************************************/
/*! exports provided: QUOTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUOTES", function() { return QUOTES; });
var QUOTES = [
    'Always do right. This will gratify some people and astonish the rest.',
    'I have never let my schooling interfere with my education.',
    'Don\'t go around saying the world owes you a living. The world owes you nothing. It was here first.',
    'Whenever you find yourself on the side of the majority, it is time to pause and reflect.',
    'If you tell the truth, you don\'t have to remember anything.',
    'Clothes make the man. Naked people have little or no influence on society.',
    'It\'s not the size of the dog in the fight, it\'s the size of the fight in the dog.',
    'Truth is stranger than fiction, but it is because Fiction is obliged to stick to possibilities; Truth isn\'t.',
    'The man who does not read good books has no advantage over the man who cannot read them.',
    'Get your facts first, and then you can distort them as much as you please.',
]
    .map(function (q, i) { return ({ id: i + 1, quote: q }); });


/***/ }),

/***/ "./src/app/twain/twain.service.ts":
/*!****************************************!*\
  !*** ./src/app/twain/twain.service.ts ***!
  \****************************************/
/*! exports provided: TwainService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwainService", function() { return TwainService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Mark Twain Quote service gets quotes from server




var TwainService = /** @class */ (function () {
    function TwainService(http) {
        this.http = http;
        this.nextId = 1;
    }
    TwainService.prototype.getQuote = function () {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) { return observer.next(_this.nextId++); }).pipe(
        // tap((id: number) => console.log(id)),
        // tap((id: number) => { throw new Error('Simulated server error'); }),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (id) { return _this.http.get("api/quotes/" + id); }), 
        // tap((q : Quote) => console.log(q)),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (q) { return q.quote; }), 
        // `errors` is observable of http.get errors
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retryWhen"])(function (errors) { return errors.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (error) {
            if (error.status === 404) {
                // Queried for quote that doesn't exist.
                _this.nextId = 1; // retry with quote id:1
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null); // signal OK to retry
            }
            // Some other HTTP error.
            console.error(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Cannot get Twain quotes from the server');
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(2), 
        // If a second retry value, then didn't find id:1 and triggers the following error
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concat"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('There are no Twain quotes')) // didn't find id:1
        ); }));
    };
    TwainService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TwainService);
    return TwainService;
}());



/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/user.service */ "./src/app/model/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent(userService) {
        this.userService = userService;
    }
    WelcomeComponent.prototype.ngOnInit = function () {
        this.welcome = this.userService.isLoggedIn ?
            'Welcome, ' + this.userService.user.name : 'Please log in.';
    };
    WelcomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-welcome',
            template: '<h3 class="welcome"><i>{{welcome}}</i></h3>'
        }),
        __metadata("design:paramtypes", [_model_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



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
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
// main app entry point




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\andrewsrahn\documents\angular\testing\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map