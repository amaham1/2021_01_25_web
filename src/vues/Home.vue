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
          <td>Earth</td>
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
    <input v-model="board_param.board_title">
  </div>
  <div>
    <vue-editor v-model="board_param.board_content"></vue-editor>
  </div>
  <button v-on:click="write">
    글쓰기
  </button>
  <div>
    <h2>Home</h2>
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
  <div>
    <vue-editor v-model="board_param.board_content"></vue-editor>
  </div>
</div>

</template>

<script>

import { VueEditor } from 'vue2-editor'
import CSNetwork from '@/utils/CSNetwork'

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
    CSNetwork.get_user_info().then((res) => {
      this.user_info = res
    })
    this.a1()
    this.a2()
  },

  methods: {
    write () {
      CSNetwork.post_write(this.board_param).then((result) => {
        alert('저장되었습니닷')
        this.a1()
      }).catch((result) => {
        console.log(result)
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
          this.user_info = result
        })
    },
    a2 () {
      CSNetwork.post_get_poster().then((result) => {
        this.board = result
      })
    }
  }
}
</script>
