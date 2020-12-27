function reactive(data) {
    if (typeof data !== 'object' || data === null) {
        return data
    }

    Object.keys(data).forEach(function (key) {
        let value = data[key];
        reactive(value)
        Object.defineProperty(data, key, {
            emumerable: false,
            configurable: true,
            get: () => {
                console.log('触发get');
                return value
            },
            set: newVal => {
                console.log('触发set');
                if (newVal !== value) {
                    value = newVal
                }
            }
        })

    })
    return data
}

let o = {
    name: 'jsck',
    age: 18,
    job: 'learner',
    like: {
        a: 1,
        b: 2
    }
}
let data = reactive(o)
data.age = 23
data.job
o.name = 'marry'
o.like.c = 3
o.like

