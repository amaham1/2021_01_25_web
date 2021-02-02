<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="onSubmit(user_id, user_pwd)">
      <input type="text" v-model="user_id" placeholder="Email Address" />
      <input type="password" v-model="user_pwd" placeholder="Password" />
      <input type="submit" value="Login" />
    </form>
    <p><i>{{msg}}</i></p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user_id: '',
      user_pwd: '',
      msg: ''
    }
  },
  methods: {
    onSubmit (user_id, user_pwd) {
      // LOGIN 액션 실행
      this.$Axios.post('http://localhost:8080/user/login', { user_id: this.user_id, user_pwd: this.user_pwd})
        .then(res => {
          console.log(res.data.token)
          this.$store.commit('loginToken', res.data.token)
          this.$router.push('/home')
        })
    }
  }
}
</script>
