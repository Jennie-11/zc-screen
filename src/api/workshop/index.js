import request from "@/request";
export const getShopList = (data) => {
  return request({
    url: "/api/zc-equipment-service/ZCScreen/getHeadData",
    method: "post",
    data,
  });
};

export const screenData = (data) => {
  return request({
    url: "/api/zc-phm-service/phmZcAll/screenData ",
    method: "post",
    data,
  });
};
