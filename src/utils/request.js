
import tfRequest from 'tf-request';
import { Toast } from 'antd-mobile'
import { prefix } from './constant'
import { joinPath } from './path';
import { toLoginPage } from './utils'

export function request(url = '', opts = {}, codes = [0]) {
  url = joinPath(url, false, prefix.api); // ps: 如果url以/开头, 则不会补全prefix.api前缀

  // 在该数组中的, 通过拦截, 不自动提示报错信息
  codes = [].concat(codes);

  return tfRequest(url, {
    interceptResponse(data) {
      //  拦截返回的请求做处理
      let { code, msg } = data;

      if (code === -3) {
        // 未登录
        toLoginPage();
        return Promise.reject({ msg, code });
      }

      if (!codes.includes(code)) {
        Toast.info(msg);
        return Promise.reject({ msg, code });
      } else {
        return data;
      }
    },

    ...opts,
  });
}

