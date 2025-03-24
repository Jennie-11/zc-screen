import store from "@/store/";
let promise = null;
export function refreshToken() {
  if (promise) {
    return promise;
  }
  promise = new Promise((resolve, reject) => {
    store
      .dispatch("RefreshToken")
      .then((resp) => {
        resolve(resp.refresh_token !== undefined);
      })
      .catch((error) => {
        reject(error);
      })
      .finally(() => {
        promise = null;
      });
  });
  return promise;
}

export function isRefreshRequest(params) {
  console.log(params, 123123);

  return (params && params.grant_type == "refresh_token") || false;
}
