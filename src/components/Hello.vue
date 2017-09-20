<template>
  <div class="main">
    <div v-if="code ==''" class="phone_box">

      <div  class="phone_in_box">

        <div class="phone_close"></div>

        <div class="phone_bg"></div>

        <div class="phone_input">
          <input type="tel" maxlength="11" v-model="phone" placeholder="请输入手机号码">
        </div>

        <div v-if="phone.length>=11" @click="loginBtn" class="login_btn">登录</div>
        <div v-else class="login_btn" style="background: #ccc;">登录</div>

      </div>

    </div>

    <div v-else class="list_out_box">

      <div class="list_box">

        <div class="list_none" v-if="list==''||list==null">
          没有任何商家信息
        </div>

        <div v-else class="item_out_box">


          <div v-for="(item,index) in list" class="item_box">

            <div class="item_img_box">

            </div>

            <div class="item_store">
              {{item.nick_name}}
            </div>

            <div class="item_addr">
              {{item.store}}
            </div>

            <div v-if="item.status == 1" class="item_auditing">审核中</div>
            <div v-else class="item_pass_text">100份</div>

          </div>


        </div>

      </div>

      <div class="bottom_box">

        <div class="user_img">

        </div>

        <div class="user_code">{{code}}</div>

        <div class="user_code_title">邀请码</div>

      </div>

    </div>

  </div>
</template>

<script>

  import qs from 'qs'
export default {
  name: 'hello',
  data () {
    return {
      phone:'',
      code:'',
      list:'',
    }
  },
  mounted: function () {
    var that = this;
    var code = localStorage.getItem('code')||'';
    that.code = code;
    var data = {
      code:'123456',
      pageNum:1
    };
    console.log(data);
    that.$http.post(that.reqUrl+'/index/getStoreInfo',qs.stringify(data)).then(res => {
      that.list = res.data.messages.data;
      console.log(res);
    });


  },
  methods: {
    loginBtn:function () {
      var that = this;
      console.log(that.reqUrl);
      that.$http.post('/index/getCode',qs.stringify({tel:that.phone})).then(res => {
        that.code = res.data.messages.code;
        localStorage.setItem('code',that.code);
//        获取列表
        that.$http.post('/index/getStoreInfo',qs.stringify(data)).then(res => {
          that.list = res.data.messages.data;
          console.log(res);
        });
      });
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main{
    width:100%;
    height:100%;
    max-width: 980px;
    margin: 0 auto;
    background: #fff;
    position: relative;
  }
  .phone_box{
    width:100%;
    height:100%;
    position: fixed;
    left:0;
    top:0;
    background: rgba(0,0,0,0.8);
  }
  .phone_in_box{
    width: 6.1rem;
    height: 7.85rem;
    position: absolute;
    left:50%;
    margin-left: -3.05rem;
    top:1.80rem;
    border-radius: 0.08rem;
    background: #fff;
  }
  .phone_close{
    width:0.36rem;
    height:0.36rem;
    padding: 0.3rem;
    position: absolute;
    right:0;
    top:0;
    -webkit-box-sizing: content-box;
    -moz-box-sizing: content-box;
    box-sizing: content-box;
    background: url("") center center no-repeat;
    background-size:0.36rem 0.36rem;
  }
  .phone_bg{
    width:2.2rem;
    height:2.2rem;
    background: url(http://ow5o1qil6.bkt.clouddn.com/pp_logo_h5.png) center center no-repeat;
    background-size: 100% 100%;
    position: absolute;
    left:50%;
    margin-left: -1.1rem;
    top:0.9rem;
  }
  .phone_input{
    width:5.2rem;
    height:0.74rem;
    position: absolute;
    left:50%;
    margin-left: -2.6rem;
    top:3.6rem;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  input::placeholder{
    color: #b2b2b2;
  }
  .phone_input input{
    padding: 0.14rem;
    font-size: 0.32rem;
    text-align: center;
    /*outline: none;*/
    width:100%;
    height:100%;
    line-height: 0.32rem;
    border: 0.01rem solid #E6E7E8;
    border-radius: 0.04rem;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .login_btn{
    width:3.8rem;
    height:0.94rem;
    position: absolute;
    left:50%;
    margin-left: -1.9rem;
    bottom: 0.6rem;
    border-radius: 0.08rem;
    color: #fff;
    font-size: 0.36rem;
    text-align: center;
    line-height: 0.94rem;
    background: #f86566;
  }
  .list_out_box{
    width:100%;
    height:100%;
    padding-bottom: 1.2rem;
    overflow: hidden;
    background: #fff;
  }
  .list_box{
    width:100%;
    height:100%;
    position: relative;
    overflow: hidden;
  }
  .list_none{
    width:100%;
    height:2.12rem;
    position: absolute;
    left: 0;
    top:3.86rem;
    text-align: center;
    background: url(http://ow5o1qil6.bkt.clouddn.com/pp_h5list_none.png) center top no-repeat;
    background-size: 1.46rem 1.46rem;
    color: #b2b2b2;
    font-size: 0.32rem;
    line-height: 3.78rem;
  }
  .item_out_box{
    width:100%;
    height: 100%;
    overflow: auto;
    position: relative;
  }
  .item_box{
    width: 100%;
    height:1.8rem;
    border-bottom: 0.01rem solid #e6e7e8;
    position: relative;
  }
  .item_img_box{
    width: 1rem;
    height:1rem;
    border-radius: 0.01rem solid #e6e7e8;
    position: absolute;
    left:0.24rem;
    top: 50%;
    margin-top: -0.5rem;
    background: #f86566;
  }
  .item_store{
    width:4.26rem;
    height:0.48rem;
    line-height: 0.48rem;
    position: absolute;
    left: 1.4rem;
    top:0.5rem;
    font-size: 0.34rem;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .item_addr{
    width:4.26rem;
    height:0.38rem;
    line-height: 0.38rem;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-size: 0.26rem;
    color: #b2b2b2;
    position: absolute;
    left: 1.4rem;
    bottom:0.4rem;
  }
  .item_auditing{
    width:1rem;
    height:0.44rem;
    line-height: 0.44rem;
    position: absolute;
    right:0.24rem;
    top:50%;
    margin-top: -0.22rem;
    background: #30B2FC;
    border-radius: 0.04rem;
    text-align: center;
    font-size: 0.24rem;
    color: #fff;
  }
  .item_pass_text{
    width: 2rem;
    height: 0.48rem;
    line-height:0.48rem;
    font-size: 0.34rem;
    position: absolute;
    text-align: right;
    right: 0.24rem;
    top:50%;
    margin-top: -0.24rem;
  }
  .bottom_box{
    width:100%;
    height:1.2rem;
    position: absolute;
    left:0;
    bottom: 0;
    background: #FFFFFF;
    -webkit-box-shadow: 0 4px 16px 0 rgba(0,0,0,0.30);
    -moz-box-shadow: 0 4px 16px 0 rgba(0,0,0,0.30);
    box-shadow: 0 4px 16px 0 rgba(0,0,0,0.30);
    z-index: 9;
  }
  .user_img{
    width:0.8rem;
    height:0.8rem;
    background: url(http://ow5o1qil6.bkt.clouddn.com/pp_user_default.png) center center no-repeat;
    background-size: 100% 100%;
    border-radius: 50%;
    overflow: hidden;
    position: absolute;
    left:0.24rem;
    top:50%;
    margin-top: -0.4rem;
  }
  .user_code{
    width: 6.2rem;
    height:0.48rem;
    line-height: 0.48rem;
    font-size: 0.34rem;
    overflow: hidden;
    position: absolute;
    left:1.14rem;
    top:0.2rem;
  }
  .user_code_title{
    width:6.2rem;
    height:0.34rem;
    line-height: 0.34rem;
    color: #b2b2b2;
    font-size: 0.24rem;
    position: absolute;
    left:1.14rem;
    bottom: 0.18rem;
  }
</style>
