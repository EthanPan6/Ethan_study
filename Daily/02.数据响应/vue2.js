function reactive(data) {
    if (typeof data !== 'object' || data === null) {
        return data
    }


    Object.keys(data).forEach(function (key) {
        let value = data[key]
        Object.defineProperty(data, key, {
            emumerable: false,
            configurable: true,
            get: () => {
                return value
            },
            set: newVal => {
                if (newVal !== value) {
                    effective()
                    value = newVal
                }
            }
        })

    })
    return data
}

