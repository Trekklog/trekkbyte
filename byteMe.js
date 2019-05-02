const trekkbyteMap = require('./gibberish/units')

exports.trekkbyte = (val, from, to) => {
    if (isNaN(val)) return {error: `'${val}' is not a number`, type: 'value'}
    if (!trekkbyteMap[from]) return {error: `'${from}' is not a valid unit.`, type: 'from'}
    if (!trekkbyteMap[to]) return {error: `'${to}' is not a valid unit.`, type: 'to'}

    const value = val < 0 ? 0 : Number(val)
    const converted = (value * trekkbyteMap[from].storage) / trekkbyteMap[to].storage
    return {
        value: value,
        from: trekkbyteMap[from].name,
        to: trekkbyteMap[to].name,
        converted: converted
    }
}