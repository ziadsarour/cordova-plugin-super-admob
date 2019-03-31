"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("./core");
var base_1 = require("./base");
var Banner = /** @class */ (function (_super) {
    __extends(Banner, _super);
    function Banner() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.testIdForAndroid = "ca-app-pub-3940256099942544/6300978111" /* banner_android */;
        _this.testIdForIOS = "ca-app-pub-3940256099942544/2934735716" /* banner_ios */;
        return _this;
    }
    Banner.prototype.show = function (opts) {
        var adUnitID = this.resolveAdUnitID(opts.id);
        opts.offset = opts.offset || {};
        opts.offset.x = opts.offset.x || 0;
        opts.offset.y = opts.offset.y || 0;
        return base_1.execAsync("banner_show" /* banner_show */, [
            {
                position: opts.position || 'bottom',
                size: opts.size || core_1.AdSizeType.SMART_BANNER,
                offset: opts.offset,
                adUnitID: adUnitID,
                id: this.state.getAdId(adUnitID),
            },
        ]);
    };
    Banner.prototype.hide = function (id) {
        var adUnitID = this.resolveAdUnitID(id);
        return base_1.execAsync("banner_hide" /* banner_hide */, [
            { id: this.state.getAdId(adUnitID) },
        ]);
    };
    return Banner;
}(base_1.AdBase));
exports.default = Banner;
