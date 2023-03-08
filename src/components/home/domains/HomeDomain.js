import { useRef, useEffect } from "react";
import HomePageContextService from "../services/HomeContextService";
import { message } from "antd";
import _ from "lodash";
import { AxiosAPI } from "../../../core/common/AxiosAPI";
import UseCommon from "../../../core/hooks/UseCommon";

export function HomeDoamin() {
  const [context, contextService] = HomePageContextService();
  const contextRef = useRef(context);
  const common = UseCommon();

  let initContextData = {
    provinceList: [],
    districtList: [],
    wardsList: [],
  };

  useEffect(() => {
    if (context) {
      contextRef.current = context;
    }
  }, [context]);
  const initDomain = async () => {
    // khoi tao
    await contextService.initContext(initContextData);
    // call API
    await geProvinceList();
  };

  const geProvinceList = async () => {
    try {
      common?.backdrop(true);
      let response = await AxiosAPI({
        method: "get",
        url: "https://provinces.open-api.vn/api/?depth=1",
        data: null,
      });

      let result = [];
      _.map(response, (element, index) => {
        result.push({
          label: element.name,
          value: element.code,
        });
      });

      contextRef.current.provinceList = result;
      await contextService.updateContext(contextRef.current);
      return;
    } catch (error) {
      console.log(error);
    } finally {
      common?.backdrop(false);
    }
  };

  const getDistrictList = async (id) => {
    try {
      common?.backdrop(true);
      // p = province
      // d = distric
      let response = await AxiosAPI({
        method: "get",
        url: `https://provinces.open-api.vn/api/p/${id}?depth=2`,
        data: null,
      });

      let result = [];
      _.map(response?.districts, (element, index) => {
        result.push({
          label: element.name,
          value: element.code,
        });
      });
      console.log("result", response);
      contextRef.current.districtList = result;
      await contextService.updateContext(contextRef.current);
      return;
    } catch (error) {
      console.log(error);
    } finally {
      common?.backdrop(false);
    }
  };
  const getWardsList = async (id) => {
    try {
      common?.backdrop(true);
      // p = province
      // d = distric
      let response = await AxiosAPI({
        method: "get",
        url: `https://provinces.open-api.vn/api/d/${id}?depth=2`,
        data: null,
      });

      let result = [];
      _.map(response?.wards, (element, index) => {
        result.push({
          label: element.name,
          value: element.code,
        });
      });
      console.log("result", response);
      contextRef.current.wardsList = result;
      await contextService.updateContext(contextRef.current);
      return;
    } catch (error) {
      console.log(error);
    } finally {
      common?.backdrop(false);
    }
  };
  const domainInterface = useRef({
    initDomain,
    getDistrictList,
    getWardsList,
  });
  return [context, domainInterface.current];
}

export default HomeDoamin;
