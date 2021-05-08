import {
    K6_ADDCOUNT,
  } from '../actionTypes'

const initState = {
    num: 0,
}

const testRedux = (state = initState, action: any) => {
    switch(action.type) {
        case K6_ADDCOUNT:
            return {
                ...state,
                num: action.payload.status
            }
        default: 
            return state
    }
}

export default testRedux