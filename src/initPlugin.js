import http from "@/plugins/http.js";
var init = function(Vue) {
  Vue.use(http, { damain: "yanyuanfeng" });
};
export default init;
