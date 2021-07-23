import * as chrome from './api'
import * as mock from './mock'

const chromeApi = process.env.NODE_ENV === 'development' ? mock : chrome

export default chromeApi
