import moment from 'moment';
import { history } from 'umi';
import { Toast } from 'antd-mobile';

// 跳到登录页
export function toLoginPage() {
  Toast.info('请退出应用, 重新进入');
  // window.location.href = prefix.login + encodeURIComponent(window.location.href);
}

// 路径是否匹配
export function isMatchPathname(pathname, url) {
  return [].concat(url).includes(pathname);
}

export function isEmptyObject(obj) {
  return (
    Object.prototype.toString.call(obj) === '[object Object]' &&
    Object.keys(obj).length === 0
  );
}

// ------------------------------------------
const timeFormat = {
  ymd: 'YYYY-MM-DD',
  ymdhms: 'YYYY-MM-DD HH:mm:ss',
};
// 格式化日期
export function formatDate(text, format) {
  if (!text) return text;
  return moment(text).format(timeFormat[format]);
}

// 格式化金额
export function formatNumToFee(num = 0) {
  num = parseFloat(num);

  if (isNaN(num)) return;

  return num.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
