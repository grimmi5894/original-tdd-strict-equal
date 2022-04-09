const strictEqual = (val1, val2) => {
    return typeof val1 == typeof val2 && val1 == val2
}

module.exports = strictEqual