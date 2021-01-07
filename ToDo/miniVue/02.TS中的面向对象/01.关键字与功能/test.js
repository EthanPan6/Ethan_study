var Data = /** @class */ (function () {
    function Data(Min, Max) {
        this.Min = Min;
        this.Max = Max;
        // this.Min=Min;
    }
    Object.defineProperty(Data.prototype, "randomData", {
        get: function () {
            return Math.floor(Math.random() * (this.Max - this.Min) + this.Min);
        },
        enumerable: true,
        configurable: true
    });
    Data.prototype.output = function () {
        return this.randomData;
    };
    return Data;
}());
var data = new Data(2, 18);
console.log(data.output());
