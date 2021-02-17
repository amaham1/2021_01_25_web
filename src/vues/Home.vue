<template>
<section id="container">
    <div id="content" class="movehistory list">
        <div class="cont_header">
            <h2 class="page_title">출동이력 관리</h2>
            <span class="page_path">HOME &gt; 출동이력 관리</span>
        </div>
        <div class="srch_box">
            <ul class="srch_option_list">
                <li>
                    <strong>구분</strong>
                    <select name="" id="">
                        <option value="" selected>전체</option>
                        <option ></option>
                    </select>
                </li>
                <li>
                    <strong>이름</strong>
                    <input type="text" name="" id="" >
                </li>
                <li>
                    <strong>연락처</strong>
                    <input type="text" name="" id="" placeholder="- 없이 입력" >
                </li>
                <li>
                    <strong>사고종류</strong>
                    <select name="" id="" >
                        <option value="" selected>전체</option>
                        <option >dddddd</option>
                    </select>
                </li>
            </ul>
            <ul class="srch_option_list">
                <li class="colspan">
                    <strong>상세주소</strong>
                    <input type="text" name="" id="" >
                </li>
                <li class="colspan2">
                    <strong>출동 기간</strong>
                    <select name="" id="" >
                        <option ></option>
                    </select>
                    <div class="opt_date">
                        <input type="text" id="dateFrom" class="datepicker" readonly autocomplete="off" >
                        <span class="swung">~</span>
                        <input type="text" id="dateTo" class="datepicker" readonly autocomplete="off" >
                    </div>
                </li>
            </ul>
            <button class="btn srch_btn" @click="searchClick()"><i></i>검색</button>
        </div>
        <section class="cont_inner">

            <h3 class="cont_title">검색결과</h3>
            <table>
                 <colgroup>
                    <col style="width: 80px;">
                    <col style="width: 130px;">
                    <col style="width: 130px;">
                    <col style="width: 130px;">
                    <col style="width: 130px;">
                    <col>
                    <col style="width: 150px;">
                    <col style="width: 150px;">
                    <col style="width: 150px;">
                </colgroup>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>구분</th>
                        <th>이름</th>
                        <th>연락처</th>
                        <th>사고종류</th>
                        <th>상세주소</th>
                        <th>발송시간</th>
                        <th>출동시간</th>
                        <th>도착시간</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
            <page-component :pageData="page" @onPage="pageClick"></page-component>

        </section>
    </div>
</section>
</template>

<script>

import { VueEditor } from 'vue2-editor'
import CSNetwork from '@/utils/CSNetwork'
import router from '@/router'
import pageComponent from '@/components/board/page'

export default {
  components: {
    VueEditor,
    pageComponent
  },
  data () {
    return {
      search: '',
      user_info: [],
      board: [],
      board_param: {
        board_title: '',
        board_content: ''
      },
      page: {
        page: 1,
        total: 1,
        count: 20
      },
      customToolbar: [
        []
      ]
    }
  },
  created () {
    CSNetwork.get_user_info().then((res) => {
      this.user_info = res
    })
    this.pageLoadHandler()
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
    pageClick (page) {
      this.page.page = page
      this.pageLoadHandler()
    },
    pageLoadHandler () {
      /* request_move_history_list()
        .then(res => {
          this.move_histroy_list = res.body
          this.page = res.page
          this.page.total = res.page.total
          this.page.pageIdx = res.page.pageIdx
        }) */
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
    },
    go () {
      router.push({ name: 'BoardList' })
    }
  }
}
</script>
