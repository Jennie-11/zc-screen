import request from "@/request";
export const getShopList = (workshopCode) => {
  return request({
    url: "/api/zc-equipment-service/ZCScreen/getHeadData",
    method: "post",
    data: {
      workshopCode,
    },
  });
};

export const screenData = (data) => {
  return request({
    url: "/api/zc-phm-service/phmZcAll/screenData ",
    method: "post",
    data,
  });
};
