/**
 * Created by wqs on 2017/9/18.
 */
import qs from 'qs'
export default{
  install(Vue,options)
  {
    // 请求地址
    Vue.prototype.reqUrl = 'https://flpp.shanshizhe.cn';
  }
}
