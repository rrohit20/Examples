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
var gridcomponent = /** @class */ (function () {
    function gridcomponent() {
        this.gridColumns = new Array();
        this.gridData = new Array();
        this.gridEntityName = "";
    }
    Object.defineProperty(gridcomponent.prototype, "gridDataSet", {
        set: function (_gridData) {
            if (_gridData.length > 0) {
                var columnNames = Object.keys(_gridData[0]).values;
                for (var index in columnNames) {
                    this.gridColumns.push(columnNames[index]);
                }
                this.gridData = _gridData;
            }
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input("grid-entityName"),
        __metadata("design:type", String)
    ], gridcomponent.prototype, "gridEntityName", void 0);
    __decorate([
        core_1.Input("grid-Data"),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], gridcomponent.prototype, "gridDataSet", null);
    gridcomponent = __decorate([
        core_1.Component({
            selector: 'grid-ui',
            templateUrl: 'app/Grid/grid.html'
        })
    ], gridcomponent);
    return gridcomponent;
}());
exports.gridcomponent = gridcomponent;
//# sourceMappingURL=grid.component.js.map