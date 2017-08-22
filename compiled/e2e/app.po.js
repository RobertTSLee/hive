"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var HivePage = (function () {
    function HivePage() {
    }
    HivePage.prototype.navigateTo = function () {
        return protractor_1.browser.get('/');
    };
    HivePage.prototype.getParagraphText = function () {
        return protractor_1.element(protractor_1.by.css('app-root h1')).getText();
    };
    return HivePage;
}());
exports.HivePage = HivePage;
//# sourceMappingURL=app.po.js.map