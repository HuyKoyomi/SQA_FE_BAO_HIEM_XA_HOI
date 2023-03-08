import { createSlice } from "../../../core/store/store";
import log from "../ModuleLogger";
// import { createSlice } from 'core/store/store';
const HomePageContext = "HomePageContext";
const tag = HomePageContext;
const LoginActionList = Object.freeze({
  UpdateContext: HomePageContext + "/update",
  ResetContext: HomePageContext + "/reset",
});

const HomePageInitalState = {};

const HomePageActions = {};

HomePageActions[LoginActionList.UpdateContext] = (state, payload) => {
  log.trace(tag, "A00_UPDATE_CONTEXT", payload);
  if (HomePageContext != payload?.slice) {
    log.error(tag, "context not match", payload?.slice || "undefined");
    return state;
  }
  return { ...state, HomePageContext: payload.data };
};

HomePageActions[LoginActionList.ResetContext] = (state, payload) => {
  log.trace(tag, "A00_RESET_CONTEXT");
  if (HomePageContext != payload?.slice) {
    log.error(tag, "context not match", payload?.slice || "undefined");
    return state;
  }
  return { ...state, ...HomePageInitalState };
};

const createContext = (dispatcher, data) => {
  createSlice(dispatcher, HomePageContext, HomePageActions, {
    ...HomePageInitalState,
    ...data,
  });
};
export { createContext, HomePageContext, HomePageActions, LoginActionList };
