const zeroOrDivisibleBy                 = number => val => val === 0 || val % number === 0
const pairEachElementWithTheElementPlus = size => val => [val, val + (size)]
const sliceInGroups                     = arr => ([from, to]) => arr.slice(from, to)
const createVoidArray                   = length => Array.from({length}, (_, idx) => idx)

function chunkArrayInGroups(arr, size) {

    return createVoidArray(arr.length)
        .filter(zeroOrDivisibleBy(size))
        .map(pairEachElementWithTheElementPlus(size))
        .map(sliceInGroups(arr))

}

chunkArrayInGroups(["a", "b", "c", "d"], 2);

export {chunkArrayInGroups}