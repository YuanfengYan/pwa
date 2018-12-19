import axios from "axios";

var install = function(Vue) {
  Vue.prototype.$http = axios;
};

export default { install };
