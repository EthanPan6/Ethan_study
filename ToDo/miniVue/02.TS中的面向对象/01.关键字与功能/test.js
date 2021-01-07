var Data = /** @class */ (function () {
    function Data(Min, Max) {
        this.Min = Min;
        this.Max = Max;
        // this.Min=Min;
    }
    Data.prototype._randomNumber = function () {
        return Math.floor(Math.random() * (this.Max - this.Min) + this.Min);
    };
    Data.prototype._createValue = function () {
        var value = this._randomNumber();
        if (this._judgeRepeatTate(value)) {
            this._createValue();
        }
        else {
            return value;
        }
    };
    Data.prototype._judgeRepeatTate = function (value) {
        var rate = this._arr.fillter(function (item) { return item.value === value; }).length;
        return rate >= this.repeatRate;
    };
    return Data;
}());
var data = new Data(2, 18);
