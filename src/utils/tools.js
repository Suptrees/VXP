export const isFunction = func => typeof func === 'function'

export const importAll = (context, filterFunc, keyTransformFunc) => {
  let keys = context.keys()
  if (isFunction(filterFunc)) keys = keys.filter(filterFunc)
  return keys.reduce((acc, curr) => {
    const key = isFunction(keyTransformFunc) ? keyTransformFunc(curr) : curr
    acc[key] = context(curr)
    return acc
  }, {})
}
