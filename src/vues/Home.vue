<template>
    <div class="wrapper">
   <!--   Creative Tim Branding   -->
  <a href="http://creative-tim.com">
    <div class="logo-container full-screen-table-demo">
      <div class="logo">
        <img src="assets/img/new_logo.png">
      </div>
      <div class="brand">
        Creative Tim
      </div>
    </div>
  </a>

  <div class="fresh-table full-color-orange full-screen-table">
  <!--
    Available colors for the full background: full-color-blue, full-color-azure, full-color-green, full-color-red, full-color-orange
    Available colors only for the toolbar: toolbar-color-blue, toolbar-color-azure, toolbar-color-green, toolbar-color-red, toolbar-color-orange
  -->
    <table id="fresh-table" class="table">
      <thead>
        <th data-field="id">ID</th>
        <th data-field="name" data-sortable="true">Name</th>
        <th data-field="salary" data-sortable="true">Salary</th>
        <th data-field="country" data-sortable="true">Country</th>
        <th data-field="city">City</th>
        <th data-field="actions" data-formatter="operateFormatter" data-events="operateEvents">Actions</th>
      </thead>
      <tbody>
        <tr v-for="(item, index) in user_info" :key="index">
          <td>1</td>
          <td>{{item.user_name}}</td>
          <td>$36,738</td>
          <td>Niger</td>
          <td>Oud-Turnhout</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="description description-footer">
    <h2 id="sharrreTitle">Thank you for shares!</h2>
  </div>
  <div>
    <input v-model="board.board_title">
  </div>
  <div>
    <vue-editor v-model="board.board_content"></vue-editor>
  </div>
  <button v-on:click="write">
    hi
  </button>
  <div>
    <h2>Home</h2>
    <div>{%raw%}{{greeting}}{%endraw%}</div>
    <table id="fresh-table" class="table">
      <thead>
        <th data-field="id">ID</th>
        <th data-field="name" data-sortable="true">Name</th>
        <th data-field="salary" data-sortable="true">Salary</th>
        <th data-field="country" data-sortable="true">Country</th>
        <th data-field="city">City</th>
        <th data-field="actions" data-formatter="operateFormatter" data-events="operateEvents">Actions</th>
      </thead>
      <tbody>
        <tr v-for="(item, index) in board" :key="index">
          <td>1</td>
          <td>{{item.board_title}}</td>
          <td>{{item.board_content}}</td>
          <td>Oud-Turnhout</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

</template>

<script>

import { VueEditor } from 'vue2-editor'

export default {
  components: {
    VueEditor
  },
  data () {
    return {
      greeting: '',
      user_info: [],
      board: [],
      board_param: {
        board_title: '',
        board_content: ''
      }
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
    this.a1()
    this.a2()
  },

  methods: {
    write () {
      this.$Axios
        .post('http://localhost:8080/post/write', this.board_param, {
          headers: {
            'Authorization': this.$store.state.token
          }
        })
        .then(res => {
          alert('저장되었습니다')
          this.a1()
        })
    },
    a1 () {
      this.$Axios
        .get('http://localhost:8080/user/info?user_name=""', {
          headers: {
            'Authorization': this.$store.state.token
          }
        })
        .then(result => {
          this.user_info = result.data
        })
    },
    a2 () {
      this.$Axios
        .get('http://localhost:8080/post/getposter', {
          headers: {
            'Authorization': this.$store.state.token
          }
        })
        .then(result => {
          this.board = result.data
        })
    }
  }
}
</script>
