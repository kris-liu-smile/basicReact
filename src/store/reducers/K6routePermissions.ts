import {
    K6_ROUTE,
  } from '../actionTypes'

const initState = {
    routeType: '0',
}

const K6routePermissions = (state = initState, action: any) => {
    switch(action.type) {
        case K6_ROUTE:
            return {
                ...state,
                routeType: action.payload.status
            }
        default: 
            return state
    }
}

export default K6routePermissions