import { combineReducers } from 'redux'

import testRedux from './testRedux'
import K6routePermissions from './K6routePermissions'

export default combineReducers({
    testRedux,
    K6routePermissions
})