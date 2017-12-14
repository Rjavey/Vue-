<template>
  <div>
    <h1 class="title" v-if="seen" @click="welcomeShow">欢迎来到逆袭的橘小店</h1>
    <div v-if="login">
      <h1 class="login">请先登陆</h1></br></br></br>
      <div class="login-box">
        <i class="icon iconfont icon-shenfenzheng"></i><input type="text" class="login-input" id="userName" v-model="userName" required placeholder="请输入用户名"></br>
        <i class="icon iconfont icon-xiaoxi"></i><input type="password" class="login-input" id="passWord" v-model="passWord" required placeholder="请输入密码" font-size>
        <div class="input-submit">
          <input type="submit" value="注册">
          <input type="submit" value="登录" @click="loginPost">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
// import md5 from 'js-md5'

export default {
  name: 'Home',
  data () {
    return {
      seen: true,
      login: false,
      userName: '',
      passWord: ''
    }
  },
  methods: {
    welcomeShow: function () {
      this.seen = false
      this.login = true
    },
    loginPost: function () {
      // let userName = this.userName
      console.log(this.userName)
      console.log(this.passWord)
      // let passWord = md5('this.passWord')
      axios.post('http://IP:PORT/demo/LoginModule/register.do', {
        name: this.userName,
        password: this.passWord
      })
      .then(response => {
        console.log(this.response)
      })
      .catch(errpr => {
        console.log(this.error)
      })
    }
  }
}
</script>
<style scoped>
.title {
  margin: 0 auto;
  text-align: center;
  font-size: 100px;
  position: relative;
  top: 350px;
  z-index: 10;
}
.login {
  text-align: center;
  font-size: 50px;
  /* position: relative;
  top: 50px; */
}
input {
  background:none;  
  outline:none;  
  border:0px;  
}
.login-box {
  margin: 0 auto;
  text-align: center;
  height: 24px;
  padding: 0;
}
.login-input {
  line-height:24px;
  font-size:24px;
  padding: 10px 0 10px 0;
  border: solid;
  border-color: #878787;
  border-top-width: 0px;
  border-right-width: 0px; 
  border-bottom-width: 1px;
  border-left-width: 0px;

}
.input-submit input{
  padding: 0 50px 0 50px;
}
.pos {
  font-size: 12px;
}
input::-webkit-input-placeholder { /* WebKit browsers */ 
font-size:16px;
margin: 0 auto;
text-align: center;
} 
input::-moz-placeholder { /* Mozilla Firefox 4 to 18 */ 
font-size:16px;
margin: 0 auto;
text-align: center;
} 
</style>