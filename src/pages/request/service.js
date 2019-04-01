import Request from '../../utils/request';

export const demo = data => Request({
  url: '/unauth/product/index',
  method: 'GET',
  data,
});
