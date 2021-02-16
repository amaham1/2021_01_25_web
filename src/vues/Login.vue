<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="onSubmit()">
      <input type="text" v-model="loginInfo.user_id" placeholder="Email Address" />
      <input type="password" v-model="loginInfo.user_pwd" placeholder="Password" />
      <input type="submit" value="Login" />
    </form>
    <p><i>{{msg}}</i></p>
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  data () {
    return {
      loginInfo: {
        user_id: '',
        user_pwd: ''
      },
      msg: ''
    }
  },
  methods: {
    onSubmit () {
      if (this.loginInfo.user_id.length === 0) {
        alert('아이디를 입력해주세요.')
      } else if (this.loginInfo.user_pwd.length === 0) {
        alert('비밀번호를 입력해주세요.')
      } else {
        this.Login(this.loginInfo)
      }

      /* // LOGIN 액션 실행
      this.$Axios.post('http://localhost:8080/user/login', { user_id: this.user_id, user_pwd: this.user_pwd})
        .then(res => {
          console.log(res.data.token)
          this.$store.commit('loginToken', res.data.token)
          this.$router.push('/home')
        }) */
    },
    ...mapActions(['Login'])
  }
}
</script>
