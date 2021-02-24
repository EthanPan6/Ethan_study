function allSettled(iterable) {
    return new Promise((resolve, reject) => {
        function addElementToResult(i, elem) {
            result[i] = elem;
            elementCount++;
            if (elementCount === result.length) {
                resolve(result);
            }
        }

        let index = 0;
        for (const promise of iterable) {
            // Capture the current value of `index`
            const currentIndex = index;
            promise.then(
                (value) => addElementToResult(
                    currentIndex, {
                    status: 'fulfilled',
                    value
                }),
                (reason) => addElementToResult(
                    currentIndex, {
                    status: 'rejected',
                    reason
                }));
            index++;
        }
        if (index === 0) {
            resolve([]);
            return;
        }
        let elementCount = 0;
        const result = new Array(index);
    });
}
