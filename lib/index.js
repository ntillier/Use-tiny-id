"use strict";
var GENERATOR_ALPHABET = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
var defaultOptions = {};
var UniqueIdGenerator = /** @class */ (function () {
    function UniqueIdGenerator(chars, options) {
        if (chars === void 0) { chars = GENERATOR_ALPHABET; }
        if (options === void 0) { options = defaultOptions; }
        this.status = [0];
        this.chars = chars;
        this.config(options);
    }
    UniqueIdGenerator.prototype.config = function (options) {
        if (options === void 0) { options = defaultOptions; }
        // for the last generated id
        if (options.lastGeneratedId) {
            // we reset the status
            this.status = [];
            // we update it
            for (var _i = 0, _a = options.lastGeneratedId; _i < _a.length; _i++) {
                var i = _a[_i];
                this.status.push(this.chars.indexOf(i) || 0);
            }
            // we increment the status
            this.increment();
        }
        // for the required number of characters
        if (options.numberOfCharacters) {
            while (this.status.length < options.numberOfCharacters) {
                this.status.push(0);
            }
        }
    };
    UniqueIdGenerator.prototype.count = function () {
        var count = this.status[0];
        var i = 1;
        while (this.status[i]) {
            count += this.status[i] * Math.pow(this.chars.length + 1, i);
            i++;
        }
        return count;
    };
    UniqueIdGenerator.prototype.increment = function () {
        var charsLength = this.chars.length - 1;
        for (var i = 0, len = this.status.length; i < len; i++) {
            var v = this.status[i]++;
            if (v > charsLength) {
                this.status[i] = 0;
            }
            else {
                return this;
            }
        }
        this.status.push(0);
        return this;
    };
    UniqueIdGenerator.prototype.next = function () {
        var str = this.current();
        this.increment();
        return str;
    };
    UniqueIdGenerator.prototype.current = function () {
        var str = '';
        for (var i = this.status.length - 1; i >= 0;) {
            str += this.chars[this.status[i--]];
        }
        return str;
    };
    return UniqueIdGenerator;
}());
module.exports = UniqueIdGenerator;
