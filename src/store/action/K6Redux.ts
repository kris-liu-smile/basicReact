import { K6_ADDCOUNT } from "../actionTypes";

export const changeNum = (status = 0) => ({
  type: K6_ADDCOUNT,
  payload: {
    status,
  }
})