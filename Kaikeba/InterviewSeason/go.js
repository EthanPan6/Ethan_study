const curry = function (fn) { 
    return function curriedFn(...args) { 
        if (args.length < fn.length) { 
            return function () { 
                return curriedFn.apply(null, args.concat(Array.from(arguments))) 
            } 
        } 
        return fn.apply(this, args); 
    } 
}