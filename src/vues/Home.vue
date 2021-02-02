<template>
  <div>
    <h2>Home</h2>
    <div>{%raw%}{{greeting}}{%endraw%}</div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      greeting: ''
    }
  },
  created () {
    var asd = this.$store.state.token
    this.$Axios
      .get('http://localhost:8080/user/info?user_name=""', {
        headers: {
          'Authorization': asd
        }
      })
      .then(result => console.log(result.data)
      )
  }
}
</script>
