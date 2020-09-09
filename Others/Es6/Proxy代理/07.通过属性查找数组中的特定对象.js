let products = new Proxy([{
        name: 'Firefox',
        type: 'browser'
    },
    {
        name: 'SeaMonkey',
        type: 'browser'
    },
    {
        name: 'Thunderbird',
        type: 'mailer'
    }
], {
    get: function (obj, prop) {
        // 默认行为是返回属性值， prop ?通常是一个整数
        if (prop in obj) {
            return obj[prop];
        }

        // 获取 products 的 number; 它是 products.length 的别名
        if (prop === 'number') {
            return obj.length;
        }

        let result, types = {};

        for (let product of obj) {
            if (product.name === prop) {
                result = product;
            }
            if (types[product.type]) {
                types[product.type].push(product);
            } else {
                types[product.type] = [product];
            }
        }

        // 通过 name 获取 product
        if (result) {
            return result;
        }

        // 通过 type 获取 products
        if (prop in types) {
            return types[prop];
        }

        // 获取 product type
        if (prop === 'types') {
            return Object.keys(types);
        }

        return undefined;
    }
});

console.log(products[0]); // { name: 'Firefox', type: 'browser' }
console.log(products['Firefox']); // { name: 'Firefox', type: 'browser' }
console.log(products['Chrome']); // undefined
console.log(products.browser); // [{ name: 'Firefox', type: 'browser' }, { name: 'SeaMonkey', type: 'browser' }]
console.log(products.types); // ['browser', 'mailer']
console.log(products.number); // 3