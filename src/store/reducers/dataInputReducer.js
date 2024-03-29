import * as actionTypes from "../actions/actionTypes";
import updateObject from "../../shared/Helpers";

/* eslint no-underscore-dangle: 0 */

const initialState = {
  posting: false,
  data: null,
  loading: false,
  posted: false,
  history: null
};

/*
 * POST METHODS
 */

const postDataInit = state => {
  return updateObject(state, {
    posting: true,
    loading: false
  });
};

const postDataStarted = (state, action) => {
  return updateObject(state, action);
};

const postDataSuccess = state => {
  return updateObject(state, {
    loading: false,
    posting: false,
    posted: true
  });
};

const postDataFailed = state => {
  return updateObject(state, {
    posting: false,
    loading: false,
    posted: false
  });
};
/**
 * RESET METHODS
 */
const updatePostStatus = state => {
  return updateObject(state, {
    posting: false,
    data: null,
    loading: false,
    posted: false
  });
};

/**
 * FETCHING METHODS
 */

const fetchDataSuccess = (state, action) => {
  return updateObject(state, {
    data: action.data,
    loading: false
  });
};

const fetchDataFailed = state => {
  return updateObject(state, {
    loading: false
  });
};

const fetchDataStarted = state => {
  return updateObject(state, {
    loading: true
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.POST_DATA_INIT:
      return postDataInit(state, action);
    case actionTypes.POST_DATA_STARTED:
      return postDataStarted(state, action);
    case actionTypes.POST_DATA_SUCCESS:
      return postDataSuccess(state, action);
    case actionTypes.POST_DATA_FAILED:
      return postDataFailed(state, action);
    case actionTypes.FETCH_DATA_SUCCESS:
      return fetchDataSuccess(state, action);
    case actionTypes.FETCH_DATA_FAILED:
      return fetchDataFailed(state, action);
    case actionTypes.FETCH_DATA_STARTED:
      return fetchDataStarted(state, action);
    case actionTypes.UPDATE_POST_STATUS:
      return updatePostStatus(state, action);
    default:
      return state;
  }
};
export default reducer;
