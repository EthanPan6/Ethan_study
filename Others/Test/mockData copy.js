class MockData {
  constructor(min, max, inputAxis, repeatRate, capacity, dimension, type) {
    this.min = min // 最大值
    this.max = max // 最小值
    this.inputAxis = inputAxis // 输入横轴数据,数组格式
    this.repeatRate = repeatRate // 重复个数
    this.capacity = capacity // 数据数组容量
    this.dimension = dimension // 维度日期长度
    this.type = type // 判断用户输入类型，0为输入横轴格式，1为自动生成时间轴格式
    this._arr = [] // 私有数组，用来存放生成的数据
    this._index = 0 // 私有属性，用来获取用户输入的横轴数据
    this._day = dimension // 私有输入时间
  }

  get produceData() {
    this.createChartData()
    return this._arr
  }

  // 生成范围内的随机数
  _randomNumber() {
    return Math.floor(Math.random() * (this.max - this.min) + this.min)
  }

  // 判断随机数的重复率,返回布尔值
  _judgeRepeatTate(number) {
    const rate = this._arr.filter(item => item.value === number).length
    return rate >= this.repeatRate
  }

  // 判断是否超过最大容量，返回布尔值
  _judgeCapacity() {
    return this._arr.length > this.capacity
  }

  // 对生成的数据进行判断，重复太多重新生成，不重复就返回数据
  _createValue() {
    const value = this._randomNumber()
    if (this._judgeRepeatTate(value)) {
      return this._createValue()
    } else {
      return value
    }
  }

  // 对用户输入的横轴数据进行提取
  _createNameByStringArr() {
    const name = this.inputAxis[this._index % this.inputAxis.length]
    return name
  }

  // 判断是否为用户输入横轴还是自动生成时间横轴
  _judgeAxisType() {
    return Boolean(this.type)
  }

  // 生成用户输入的横轴数据的数据，超过最大容量，对对应名字的数据进行更改
  _createUserInputChartValue() {
    if (this._judgeCapacity()) {
      this._arr = this._arr.map(item => {
        if (item.name === this._createNameByStringArr()) {
          return {
            ...item,
            value: this._createValue()
          }
        }
        return item
      })
    } else {
      this._arr.push({
        name: this._createNameByStringArr(),
        value: this._createValue()
      })
    }
    this._index++
  }

  // 判断生成的日期是不是当天
  _isToday(date) {
    const today = new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate()
    return today === date
  }

  // 生成维度，输入一个值，返回从今天往前推到这个值的每一天
  _generateDimension() {
    const today = new Date()
    const date = new Date(today)
    date.setDate(today.getDate() + this._day)
    const oldDate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
    return oldDate
  }

  // 生成时间轴的数据,如果为当日，则返回原数组，否则插入
  _createDatevalue() {
    const date = this._generateDimension()
    if (this._isToday(date)) {
      return this._arr
    } else {
      this._arr.push({
        name: this._generateDimension(),
        value: this._createValue()
      })
      this._day -= 1
    }
  }

  // 根据获取不同输入值，形成不同的数据
  createChartData() {
    if (this._judgeAxisType()) {
      this._createUserInputChartValue()
    } else {
      this._createDatevalue()
    }
  }
}

let p = new MockData(1, 6, ['1号', '2号', '3号', '4号'], 2, 4, '', 1)
let data = p.produceData
console.log(data);