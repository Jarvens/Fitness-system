<!--场馆页面-->
<style scoped rel="stylesheet/scss" lang="scss">
  .stadium_header {
    width: 100%;
    height: 56px;
    line-height: 56px;
    .stadium_title {
      float: left;
      font-size: 20px;
      padding-left: 34px;
    }
  }

  .stadium_page {
    line-height: 60px;
  }
</style>
<template>
  <div>
    <div class="stadium_header">
      <div class="stadium_title">
        场馆
      </div>
      <div class="member_search">
        <Input v-model="key" placeholder="请输入场馆名" style="width: 300px"></Input>
        <Button type="primary" icon="ios-search" @click="search()">搜索</Button>
        <Button type="primary" icon="plus" @click="stadiumAddHandler()">创建</Button>
      </div>
    </div>
    <Table :columns="stadiumColumns" :data="stadiumList"></Table>
    <div class="stadium_page">
      <Page :total="page.total" :current="page.pageNo" :page-size="page.pageSize"
            @on-change="pageChangeHandler($event)"></Page>
    </div>

  </div>

</template>
<script>
  export default {
    data(){
      return {
        stadiumList: [],
        key: '',
        page: {
          pageNo: 1,
          pageSize: 10,
          total: 0
        }
      }
    },
    computed: {
      stadiumColumns(){
        let columns = []
        columns.push({
          title: '名称',
          key: 'name'
        });
        columns.push({
          title: '场馆地址',
          key: 'address',
          width: 300
        });
        columns.push({
          title: '创建时间',
          key: 'createDate'
        });
        columns.push({
          title: '状态',
          key: 'status',
          render: (h, params) => {
            const row = params.row;
            const color = row.status === '1' ? 'blue' : 'red';
            const text = row.status === '1' ? '启用' : '停用';
            return h('Tag', {
              props: {
                type: 'dot',
                color: color
              }
            }, text);
          }
        });
        columns.push({
          title: '操作',
          key: 'action',
          width: 250,
          align: 'center',
          render: (h, param)=> {
            return h('div', [
              h('Button', {
                props: {
                  type: 'primary',
                  size: 'small'
                },
                style: {
                  marginRight: '5px'
                },
                on: {
                  click: () => {
                    this.show(params.index)
                  }
                }
              }, '查看'),
              h('Button', {
                props: {
                  type: 'info',
                  size: 'small'
                },
                style: {
                  marginRight: '5px'
                },
                on: {
                  click: ()=> {
                    this.update(param.index)
                  }
                }
              }, '修改'),
              h('Button', {
                props: {
                  type: 'error',
                  size: 'small'
                },
                on: {
                  click: () => {
                    this.remove(params.index)
                  }
                }
              }, '删除')
            ]);
          }
        })
        return columns;
      }
    },
    methods: {
      pageList(){
        //查询列表事件
        let url = "/stadium/list?pageNo=" + this.page.pageNo + "&pageSize=" + this.page.pageSize + "&key=" + this.key;
        this.$http.get(url).then(res=> {
          this.stadiumList = res.data;
          this.page.pageNo = res.pageNo
          this.page.total = res.total
        })
      },
      stadiumAddHandler(){
        //创建场馆事件
        this.$router.push('stadiumAdd');
      },
      search(){
        //搜索事件
        this.pageList();
      },
      pageChangeHandler(event){
        //分页事件
        this.page.pageNo = event
        this.pageList()
      }
    },
    created(){
      this.pageList();
    }
  }
</script>
