"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cordova_1 = require("cordova");
function execAsync(action, args) {
    return new Promise(function (resolve, reject) {
        cordova_1.exec(resolve, reject, "AdMob" /* Service */, action, args);
    });
}
exports.execAsync = execAsync;
function fireDocumentEvent(eventName, data) {
    if (data === void 0) { data = null; }
    var event = new CustomEvent(eventName, { detail: data });
    document.dispatchEvent(event);
}
exports.fireDocumentEvent = fireDocumentEvent;
function waitEvent(successEvent, failEvent) {
    if (failEvent === void 0) { failEvent = ''; }
    return new Promise(function (resolve, reject) {
        document.addEventListener(successEvent, function (event) {
            resolve(event);
        }, false);
        if (failEvent) {
            document.addEventListener(failEvent, function (failedEvent) {
                reject(failedEvent);
            }, false);
        }
    });
}
exports.waitEvent = waitEvent;
var AdBase = /** @class */ (function () {
    function AdBase(state) {
        this.testIdForAndroid = !;
        this.testIdForIOS = !;
        this.state = state;
    }
    Object.defineProperty(AdBase.prototype, "testAdUnitID", {
        get: function () {
            switch (this.state.platform) {
                case "android" /* android */:
                    return this.testIdForAndroid;
                case "ios" /* ios */:
                    return this.testIdForIOS;
                default:
                    return "test" /* dummy */;
            }
        },
        enumerable: true,
        configurable: true
    });
    AdBase.prototype.resolveAdUnitID = function (adUnitID) {
        if (adUnitID === "test" /* dummy */ || this.state.devMode) {
            return this.testAdUnitID;
        }
        if (!adUnitID) {
            throw new Error('adUnitID is missing');
        }
        if (typeof adUnitID === 'string') {
            return adUnitID;
        }
        switch (this.state.platform) {
            case "android" /* android */:
            case "ios" /* ios */:
                return adUnitID[this.state.platform];
            default:
                return "test" /* dummy */;
        }
    };
    return AdBase;
}());
exports.AdBase = AdBase;
