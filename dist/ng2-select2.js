var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { Select2Component } from './ng2-select2.component';
export { Select2Component } from './ng2-select2.component';
var Select2Module = /** @class */ (function () {
    function Select2Module() {
    }
    Select2Module = __decorate([
        NgModule({
            declarations: [Select2Component],
            exports: [Select2Component]
        })
    ], Select2Module);
    return Select2Module;
}());
export { Select2Module };
//# sourceMappingURL=ng2-select2.js.map