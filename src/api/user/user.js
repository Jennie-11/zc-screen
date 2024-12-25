import request from "@/request";
import website from "@/config/website";
export const loginByUsername = (
  tenantId,
  deptId,
  roleId,
  username,
  password,
  type,
  key,
  code
) =>
  request({
    url: "/api/trio-auth/oauth/token",
    method: "post",
    headers: {
      "Tenant-Id": tenantId,
      "Dept-Id": website.switchMode ? deptId : "",
      "Role-Id": website.switchMode ? roleId : "",
      "Captcha-Key": key,
      "Captcha-Code": code,
    },
    params: {
      tenantId,
      username,
      password,
      grant_type: website.captchaMode ? "captcha" : "password",
      scope: "all",
      type,
    },
  });

export const refreshToken = (refresh_token, tenantId, deptId, roleId) =>
  request({
    url: "/api/trio-auth/oauth/token",
    method: "post",
    headers: {
      "Tenant-Id": tenantId,
      "Dept-Id": website.switchMode ? deptId : "",
      "Role-Id": website.switchMode ? roleId : "",
    },
    params: {
      tenantId,
      refresh_token,
      grant_type: "refresh_token",
      scope: "all",
    },
  });

export const logout = () =>
  request({
    url: "/api/trio-auth/oauth/logout",
    method: "get",
    authorization: false,
  });
