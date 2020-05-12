import { importAll } from '@/utils/tools'

const directiveContext = require.context('./', false, /\.js$/)
const filterFunc = key => key !== './index.js'
const keyTransformFunc = key => key.replace(/^\.\//, '').replace(/\.js$/, '')

const directives = importAll(directiveContext, filterFunc, keyTransformFunc)

export default {
  install(vue) {
    Object.keys(directives).forEach(key => {
      vue.directive(key, directives[key].default)
    })
  }
}
