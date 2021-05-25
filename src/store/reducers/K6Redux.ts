import {
    K6_ADDCOUNT,
  } from '../actionTypes'

export interface initK6reduxState {
    num: number
}

const initState: initK6reduxState = {
    num: 0,
}

const K6Redux = (state = initState, action: any) => {
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

export default K6Redux