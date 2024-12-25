export function getColor(type, state) {
  switch (type) {
    case "QT":
      return getQTValue(state);
    case "DF":
      return getDFValue(state);
    case "ZXCK":
      return getZXCKValue(state);
    case "DBD":
      return getDBDValue(state);
    case "CKSH":
      return getCKSHValue(state);
    case "LLD":
      return getLLDValue(state);
    case "CPCK":
      return getCPCKValue(state);
    case "RQCX":
      return getRQCXValue(state);
    case "DFT":
      return getDFTValue(state);
    case "XZZT":
      return getXZZTValue(state);
    case "LLBJJCJG":
      return getLLBJJCJGValue(state);
    case "LLBJ":
      return getLLBJValue(state);
    default:
      return null;
  }
}

function getDFValue(state) {
  switch (state) {
    case 0:
    case 10:
      return "#ED7B2F"; //默认橙色
    case 1:
    case 20:
      return "#00A870"; //默认绿色
    default:
      return null;
  }
}

function getDFTValue(state) {
  switch (state) {
    case 10:
      return "#ED7B2F"; //默认橙色
    case 20:
      return "#2F7AED"; //默认蓝色
    case 30:
      return "#00A870"; //默认绿色
    case 40:
      return "#A6A6A6"; //默认灰色
  }
}

// 容器查询状态
function getRQCXValue(state) {
  switch (state) {
    case 1:
      return "#ED7B2F"; //待使用
    case 2:
      return "#00A870"; //已使用
    case 3:
      return "#FF383D"; //禁用
  }
}

// 下载状态
function getXZZTValue(state) {
  switch (state) {
    case 10:
      return "#ED7B2F";
    case 20:
      return "#2F7AED";
    case 30:
      return "#00A870";
    case 40:
      return "#FF383D";
  }
}

// 杂项出库
function getZXCKValue(state) {
  switch (state) {
    case 10:
      return "#FFB100"; //待确认
    case 20:
      return "#ED7B2F"; //待备料
    case 30:
      return "#0096FF"; //备料中
    case 40:
      return "#2F7AED"; //待出库
    case 50:
      return "#00A870"; //已出库
    default:
      return null;
  }
}

// 启停状态
function getQTValue(state) {
  switch (state) {
    case 0:
    case 10:
    case 40:
      return "#FF383D"; //停用
    case 1:
    case 20:
    case 30:
      return "#00A870"; //启用
    default:
      return null;
  }
}

// 调拨单
function getDBDValue(state) {
  switch (state) {
    case 10:
      return "#FFB100"; //待调拨
    case 20:
      return "#0096FF"; // 调拨中
    case 30:
      return "#ED7B2F"; //待审核
    case 40:
      return "#00A870"; //已调拨
    default:
      return null;
  }
}

//出库审核
function getCKSHValue(state) {
  switch (state) {
    case 10:
    case 1:
      return "#ED7B2F"; //待出库
    case 20:
    case 2:
      return "#00A870"; //已出库
    case 30:
    case 3:
      return "#A6A6A6"; //已备料
    default:
      return null;
  }
}

//领料单
function getLLDValue(state) {
  switch (state) {
    case 10:
    case 1:
      return "#ED7B2F"; //待备料
    case 20:
    case 2:
      return "#00A870"; //已备料
    case 30:
    case 3:
      return "#00A870"; //已出库
    case 40:
    case 4:
      return "#0096FF"; //部分完成
    case 50:
    case 5:
      return "#00A870"; //已完成
    default:
      return null;
  }
}

//成品出库
function getCPCKValue(state) {
  switch (state) {
    case 10:
    case 1:
      return "#FFB100"; //待备料
    case 20:
    case 2:
      return "#0096FF"; //备料中
    case 30:
    case 3:
      return "#ED7B2F"; //待出库
    case 40:
    case 4:
      return "#00A870"; //已出库
    default:
      return null;
  }
}

//来料检验报表检测结果
function getLLBJJCJGValue(state) {
  switch (state) {
    case 10:
      return "#00A870"; //合格
    case 20:
      return "#FF383D"; //不合格
    case 30:
      return "#A6A6A6"; //不适应
    default:
      return null;
  }
}

//来料检验报表检测结果
function getLLBJValue(state) {
  switch (state) {
    case 10:
      return "#FFB100"; //待分配
    case 20:
      return "#ED7B2F"; //待检验
    case 30:
      return "#2F7AED"; //检验中
    case 40:
      return "#00A870"; //已检验
    case 50:
      return "#A6A6A6"; //已确定
    default:
      return null;
  }
}
