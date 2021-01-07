class Data {
    Min: number;
    Max: number;
    _arr: any;
    repeatRate: any;
    constructor(Min, Max) {
        this.Min = Min;
        this.Max = Max;

        // this.Min=Min;
    }
    _randomNumber() {
        return Math.floor(Math.random() * (this.Max - this.Min) + this.Min)
    }

    _createValue(){
        let value=this._randomNumber();
        if(this._judgeRepeatTate(value)){
            this._createValue()
        }else{
            return value
        }
    }
    _judgeRepeatTate(value: number):boolean {
        let rate=this._arr.fillter(item=>item.value===value).length
        return rate>=this.repeatRate
    }
}
let data = new Data(2, 18)

