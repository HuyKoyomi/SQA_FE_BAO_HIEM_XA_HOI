import { useRef } from "react";
import { useDispatch, useStore } from "../../../core/store/store";
// import { useDispatch, useStore } from 'core/store/store';
import {
  createContext,
  HomePageContext,
  LoginActionList,
} from "../contexts/HomeContext";

function HomePageContextService() {
  const context = useStore()[HomePageContext];
  const dispatcher = useDispatch();

  const initContext = (data) => {
    createContext(dispatcher, data);
  };
  const updateContext = (data) => {
    dispatcher({
      slice: HomePageContext,
      type: LoginActionList.UpdateContext,
      data: data,
    });
  };
  const resetContext = () => {
    dispatcher({
      slice: HomePageContext,
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

export default HomePageContextService;
