"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var mocks_1 = require("./mocks");
var CarPartsComponent = (function () {
    function CarPartsComponent() {
    }
    CarPartsComponent.prototype.ngOnInit = function () {
        this.carParts = mocks_1.CARPARTS;
        (function (carParts, func) {
            setTimeout(function () { func(carParts); }, 3000);
        })(this.carParts, this.changeImage);
    };
    CarPartsComponent.prototype.totalCarParts = function () {
        return this.carParts.reduce(function (prev, current) { return prev + current.inStock; }, 0);
    };
    CarPartsComponent.prototype.changeImage = function (carParts) {
        carParts[0].image = "https://t1.daumcdn.net/daumtop_chanel/op/20170315064553027.png";
    };
    return CarPartsComponent;
}());
CarPartsComponent = __decorate([
    core_1.Component({
        selector: 'car-parts',
        templateUrl: 'app/car-part.component.html',
        styleUrls: ['app/car-part.component.css']
    })
], CarPartsComponent);
exports.CarPartsComponent = CarPartsComponent;
//# sourceMappingURL=car-part.component.js.map