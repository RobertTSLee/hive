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
var ItemListComponent = (function () {
    function ItemListComponent() {
    }
    ItemListComponent.prototype.ngOnInit = function () {
    };
    return ItemListComponent;
}());
ItemListComponent = __decorate([
    core_1.Component({
        selector: 'item-list',
        templateUrl: './item-list.component.html',
        styleUrls: ['./item-list.component.scss']
    }),
    __metadata("design:paramtypes", [])
], ItemListComponent);
exports.ItemListComponent = ItemListComponent;
//# sourceMappingURL=item-list.component.js.map