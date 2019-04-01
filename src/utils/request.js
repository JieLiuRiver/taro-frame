import Taro from '@tarojs/taro';
import { baseUrl, noConsole, token } from '../config';

const request_data = {
};

const interceptor = (chain) => {
  const requestParams = chain.requestParams
  const { method, data, url } = requestParams
  console.log(`interceptor： http ${method || 'GET'} --> ${url} data: `, data)
  return chain.proceed(requestParams)
}

export default (options = { method: 'GET', data: {} }) => {
  if (!noConsole) {
    console.log(
      `${new Date().toLocaleString()}【 M=${options.url} 】P=${JSON.stringify(
        options.data
      )}`
    );
  }
  const _header = {
    'Content-Type': 'application/json',
  }
  Taro.getStorageSync(token) && (_header['Authentication'] = Taro.getStorageSync(token))

  // 自 1.2.16 开始支持拦截器
  console.log('Taro.addInterceptor', Taro.addInterceptor)
  Taro.addInterceptor && Taro.addInterceptor(interceptor)

  return Taro.request({
    url: baseUrl + options.url,
    data: {
      ...request_data,
      ...options.data,
    },
    header: _header,
    method: options.method.toUpperCase(),  // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
  }).then(res => {
    const { statusCode, data } = res;
    if (statusCode >= 200 && statusCode < 300) {
      if (!noConsole) {
        console.log(
          `${new Date().toLocaleString()}【 M=${options.url} 】【接口响应：】`,
          res.data
        );
      }
      if (!data.success) {
        Taro.showToast({
          title: `${res.data.msg}~` || res.data.code,
          icon: 'none',
          mask: true,
        });
      }
      return data;
    } else {
      throw new Error(`网络请求错误，状态码${statusCode}`);
    }
  });
};
