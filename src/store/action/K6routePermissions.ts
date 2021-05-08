import { K6_ADDCOUNT } from "../actionTypes";

export const K6routeType = (status: any) => ({
  type: K6_ADDCOUNT,
  payload: {
    status,
  }
})