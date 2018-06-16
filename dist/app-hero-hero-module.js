(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-hero-hero-module"],{

/***/ "./src/app/hero/hero-detail.component.css":
/*!************************************************!*\
  !*** ./src/app/hero/hero-detail.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label {\n  display: inline-block;\n  width: 3em;\n  margin: .5em 0;\n  color: #607D8B;\n  font-weight: bold;\n}\ninput {\n  height: 2em;\n  font-size: 1em;\n  padding-left: .4em;\n}\nbutton {\n  margin-top: 20px;\n  font-family: Arial;\n  background-color: #eee;\n  border: none;\n  padding: 5px 10px;\n  border-radius: 4px;\n  cursor: pointer; cursor: hand;\n}\nbutton:hover {\n  background-color: #cfd8dc;\n}\nbutton:disabled {\n  background-color: #eee;\n  color: #ccc;\n  cursor: auto;\n}\n"

/***/ }),

/***/ "./src/app/hero/hero-detail.component.html":
/*!*************************************************!*\
  !*** ./src/app/hero/hero-detail.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"hero\">\n  <h2><span>{{hero.name | titlecase}}</span> Details</h2>\n  <div>\n    <label>id: </label>{{hero.id}}</div>\n  <div>\n    <label for=\"name\">name: </label>\n    <input id=\"name\" [(ngModel)]=\"hero.name\" placeholder=\"name\" />\n  </div>\n  <button (click)=\"save()\">Save</button>\n  <button (click)=\"cancel()\">Cancel</button>\n</div>\n"

/***/ }),

/***/ "./src/app/hero/hero-detail.component.ts":
/*!***********************************************!*\
  !*** ./src/app/hero/hero-detail.component.ts ***!
  \***********************************************/
/*! exports provided: HeroDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroDetailComponent", function() { return HeroDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _hero_detail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hero-detail.service */ "./src/app/hero/hero-detail.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* tslint:disable:member-ordering */



var HeroDetailComponent = /** @class */ (function () {
    function HeroDetailComponent(heroDetailService, route, router) {
        this.heroDetailService = heroDetailService;
        this.route = route;
        this.router = router;
    }
    HeroDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        // get hero when `id` param changes
        this.route.paramMap.subscribe(function (pmap) { return _this.getHero(pmap.get('id')); });
    };
    HeroDetailComponent.prototype.getHero = function (id) {
        var _this = this;
        // when no id or id===0, create new blank hero
        if (!id) {
            this.hero = { id: 0, name: '' };
            return;
        }
        this.heroDetailService.getHero(id).subscribe(function (hero) {
            if (hero) {
                _this.hero = hero;
            }
            else {
                _this.gotoList(); // id not found; navigate to list
            }
        });
    };
    HeroDetailComponent.prototype.save = function () {
        var _this = this;
        this.heroDetailService.saveHero(this.hero).subscribe(function () { return _this.gotoList(); });
    };
    HeroDetailComponent.prototype.cancel = function () { this.gotoList(); };
    HeroDetailComponent.prototype.gotoList = function () {
        this.router.navigate(['../'], { relativeTo: this.route });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], HeroDetailComponent.prototype, "hero", void 0);
    HeroDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hero-detail',
            template: __webpack_require__(/*! ./hero-detail.component.html */ "./src/app/hero/hero-detail.component.html"),
            styles: [__webpack_require__(/*! ./hero-detail.component.css */ "./src/app/hero/hero-detail.component.css")],
            providers: [_hero_detail_service__WEBPACK_IMPORTED_MODULE_2__["HeroDetailService"]]
        }),
        __metadata("design:paramtypes", [_hero_detail_service__WEBPACK_IMPORTED_MODULE_2__["HeroDetailService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HeroDetailComponent);
    return HeroDetailComponent;
}());



/***/ }),

/***/ "./src/app/hero/hero-detail.service.ts":
/*!*********************************************!*\
  !*** ./src/app/hero/hero-detail.service.ts ***!
  \*********************************************/
/*! exports provided: HeroDetailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroDetailService", function() { return HeroDetailService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
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



var HeroDetailService = /** @class */ (function () {
    function HeroDetailService(heroService) {
        this.heroService = heroService;
    }
    // Returns a clone which caller may modify safely
    HeroDetailService.prototype.getHero = function (id) {
        if (typeof id === 'string') {
            id = parseInt(id, 10);
        }
        return this.heroService.getHero(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (hero) {
            return hero ? Object.assign({}, hero) : null; // clone or null
        }));
    };
    HeroDetailService.prototype.saveHero = function (hero) {
        return this.heroService.updateHero(hero);
    };
    HeroDetailService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_model_hero_service__WEBPACK_IMPORTED_MODULE_2__["HeroService"]])
    ], HeroDetailService);
    return HeroDetailService;
}());



/***/ }),

/***/ "./src/app/hero/hero-list.component.css":
/*!**********************************************!*\
  !*** ./src/app/hero/hero-list.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".selected {\n  background-color: #CFD8DC !important;\n  color: white;\n}\n.heroes {\n  margin: 0 0 2em 0;\n  list-style-type: none;\n  padding: 0;\n  width: 15em;\n}\n.heroes li {\n  cursor: pointer;\n  position: relative;\n  left: 0;\n  background-color: #EEE;\n  margin: .5em;\n  padding: .3em 0;\n  height: 1.6em;\n  border-radius: 4px;\n}\n.heroes li:hover {\n  color: #607D8B;\n  background-color: #DDD;\n  left: .1em;\n}\n.heroes li.selected:hover {\n  background-color: #BBD8DC !important;\n  color: white;\n}\n.heroes .text {\n  position: relative;\n  top: -3px;\n}\n.heroes .badge {\n  display: inline-block;\n  font-size: small;\n  color: white;\n  padding: 0.8em 0.7em 0 0.7em;\n  background-color: #607D8B;\n  line-height: 1em;\n  position: relative;\n  left: -1px;\n  top: -4px;\n  height: 1.8em;\n  margin-right: .8em;\n  border-radius: 4px 0 0 4px;\n}\nbutton {\n  font-family: Arial;\n  background-color: #eee;\n  border: none;\n  padding: 5px 10px;\n  border-radius: 4px;\n  cursor: pointer;\n  cursor: hand;\n}\nbutton:hover {\n  background-color: #cfd8dc;\n}\n"

/***/ }),

/***/ "./src/app/hero/hero-list.component.html":
/*!***********************************************!*\
  !*** ./src/app/hero/hero-list.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 highlight=\"gold\">My Heroes</h2>\n<ul class=\"heroes\">\n  <li *ngFor=\"let hero of heroes | async \"\n    [class.selected]=\"hero === selectedHero\"\n    (click)=\"onSelect(hero)\">\n    <span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n  </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/hero/hero-list.component.ts":
/*!*********************************************!*\
  !*** ./src/app/hero/hero-list.component.ts ***!
  \*********************************************/
/*! exports provided: HeroListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroListComponent", function() { return HeroListComponent; });
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



var HeroListComponent = /** @class */ (function () {
    function HeroListComponent(router, heroService) {
        this.router = router;
        this.heroService = heroService;
    }
    HeroListComponent.prototype.ngOnInit = function () {
        this.heroes = this.heroService.getHeroes();
    };
    HeroListComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
        this.router.navigate(['../heroes', this.selectedHero.id]);
    };
    HeroListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-heroes',
            template: __webpack_require__(/*! ./hero-list.component.html */ "./src/app/hero/hero-list.component.html"),
            styles: [__webpack_require__(/*! ./hero-list.component.css */ "./src/app/hero/hero-list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _model_hero_service__WEBPACK_IMPORTED_MODULE_2__["HeroService"]])
    ], HeroListComponent);
    return HeroListComponent;
}());



/***/ }),

/***/ "./src/app/hero/hero-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/hero/hero-routing.module.ts ***!
  \*********************************************/
/*! exports provided: routedComponents, HeroRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routedComponents", function() { return routedComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroRoutingModule", function() { return HeroRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _hero_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hero-list.component */ "./src/app/hero/hero-list.component.ts");
/* harmony import */ var _hero_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hero-detail.component */ "./src/app/hero/hero-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', component: _hero_list_component__WEBPACK_IMPORTED_MODULE_2__["HeroListComponent"] },
    { path: ':id', component: _hero_detail_component__WEBPACK_IMPORTED_MODULE_3__["HeroDetailComponent"] }
];
var routedComponents = [_hero_detail_component__WEBPACK_IMPORTED_MODULE_3__["HeroDetailComponent"], _hero_list_component__WEBPACK_IMPORTED_MODULE_2__["HeroListComponent"]];
var HeroRoutingModule = /** @class */ (function () {
    function HeroRoutingModule() {
    }
    HeroRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], HeroRoutingModule);
    return HeroRoutingModule;
}());



/***/ }),

/***/ "./src/app/hero/hero.module.ts":
/*!*************************************!*\
  !*** ./src/app/hero/hero.module.ts ***!
  \*************************************/
/*! exports provided: HeroModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroModule", function() { return HeroModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _hero_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hero-routing.module */ "./src/app/hero/hero-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HeroModule = /** @class */ (function () {
    function HeroModule() {
    }
    HeroModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _hero_routing_module__WEBPACK_IMPORTED_MODULE_2__["HeroRoutingModule"]],
            declarations: [_hero_routing_module__WEBPACK_IMPORTED_MODULE_2__["routedComponents"]]
        })
    ], HeroModule);
    return HeroModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-hero-hero-module.js.map