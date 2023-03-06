import { useRef } from "react";
import { useDispatch, useStore } from "../../../core/store/store";
// import { useDispatch, useStore } from 'core/store/store';
import {
  createContext,
  LoginContext,
  LoginActionList,
} from "../contexts/LoginContext";

function useA00ContextService() {
  const context = useStore()[LoginContext];
  const dispatcher = useDispatch();

  const initContext = (data) => {
    createContext(dispatcher, data);
  };
  const updateContext = (data) => {
    console.log(context);
    dispatcher({
      slice: LoginContext,
      type: LoginActionList.UpdateContext,
      data: data,
    });
  };
  const resetContext = () => {
    dispatcher({
      slice: LoginContext,
      type: LoginActionList.ResetContext,
    });
  };
  const dispatchInterface = useRef({
    initContext,
    updateContext,
    resetContext,
  });

  return [context, dispatchInterface.current];
}

export default useA00ContextService;
