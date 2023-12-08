import $http from "api";
export default {
  namespace: "user",
  state: {
    userInfo: null,
  },
  reducers: {},
  effects: {
    *login({ payload }, { put, call, select }) {
      console.log(11)
      const {data, msg} = yield call($http.userLogin,payload);
    },
  },
};
