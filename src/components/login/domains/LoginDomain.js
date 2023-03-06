import { useRef, useEffect } from "react";
import useLoginContextService from "../services/LoginContextService";
import { message } from "antd";

export function useA00Domain() {
  const [context, contextService] = useLoginContextService();
  const contextRef = useRef(context);

  useEffect(() => {
    contextRef.current = context;
  }, [context]);

  const initDomain = async () => {
    const contextData = {
      usernameInputType: null,
    };
    await contextService.initContext(contextData);
  };

  const domainInterface = useRef({
    initDomain,
  });
  return [context, domainInterface.current];
}

export default useA00Domain;
