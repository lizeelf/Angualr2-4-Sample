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
var core_1 = require("@angular/core");
var racing_data_service_1 = require("./racing-data.service");
var CarPartsComponent = (function () {
    function CarPartsComponent(racingDataService) {
        this.racingDataService = racingDataService;
    }
    CarPartsComponent.prototype.ngOnInit = function () {
        //let racingDataService:RacingDataService = new RacingDataService();
        // this.carParts = racingDataService.getCarParts();
        //this.carParts = this.racingDataService.getCarParts();
        //this.racingDataService.getCarParts().subscribe(carParts => this.carParts = carParts);
        var str = "안녕하세요.";
        var data = this.racingDataService.getTranslate(str);
        console.log(data.subscribe(function (value) { return console.log(value.translatedText); }));
        console.log(data.subscribe(function (value) { return console.log(value.translatedText); }));
        console.log(data.subscribe(function (value) { return console.log(value.translatedText); }));
    };
    CarPartsComponent.prototype.upQuantity = function (carPart) {
        //alert("You called upQuantity");
        if (carPart.inStock > carPart.quantity) {
            carPart.quantity++;
        }
    };
    CarPartsComponent.prototype.downQuantity = function (carPart) {
        //alert("You called upQuantity");
        if (carPart.quantity != 0) {
            carPart.quantity--;
        }
    };
    CarPartsComponent.prototype.totalCarParts = function () {
        var sum = 0;
        if (Array.isArray(this.carParts)) {
            for (var _i = 0, _a = this.carParts; _i < _a.length; _i++) {
                var carPart = _a[_i];
                sum += carPart.inStock;
            }
        }
        return sum;
    };
    return CarPartsComponent;
}());
CarPartsComponent = __decorate([
    core_1.Component({
        selector: 'car-parts',
        templateUrl: 'app/car-part.component.html',
        styleUrls: ['app/car-part.component.css']
    }),
    __metadata("design:paramtypes", [racing_data_service_1.RacingDataService])
], CarPartsComponent);
exports.CarPartsComponent = CarPartsComponent;
//# sourceMappingURL=car-part.component.js.map