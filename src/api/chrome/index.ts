import chrome from './api'
import mock from './mock'

const chromeApi = process.env.NODE_ENV === 'development' ? mock : chrome

export default chromeApi
