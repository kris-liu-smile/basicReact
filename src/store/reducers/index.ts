import { combineReducers } from 'redux'

import K6Redux from './K6Redux'
import K6routePermissions from './K6routePermissions'

export default combineReducers({
    K6Redux,
    K6routePermissions
})