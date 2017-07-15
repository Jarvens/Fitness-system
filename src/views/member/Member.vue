
<!--会员页面-->
<style scoped rel="stylesheet/scss" lang="scss">
  .member_header {
    width: 100%;
    height: 56px;
    line-height: 56px;
    .member_title {
      float: left;
      font-size: 20px;
      padding-left: 34px;
    }
  }

  .page {
    line-height: 60px;
    float: left;
    padding-left: 40px;
  }
</style>
<template>
  <div>
    <div class="member_header">
      <div class="member_title">
        会员
      </div>
      <div class="member_search">
        <Input placeholder="请输入会员账号或姓名" style="width: 300px"></Input>
        <Button type="primary" icon="ios-search">搜索</Button>
      </div>
    </div>
    <Table :columns="memberColumns" :data="memberList"></Table>
    <div class="page">
      <Page :total="100"></Page>
    </div>
  </div>

</template>

<script>
  export default {
    data () {
      return {
        memberList:[],
        page:{
          pageNo:1,
          pageSize:10,
          total:0
        },
        key:''
      }
    },
    methods:{
      pageListHandler(){
        this.$http.get('/member/list?pageNo='+this.page.pageNo+"&pageSize="+this.page.pageSize+"&key="+this.key).then(res=>{
          console.log('返回数据')
          this.memberList=res.data
        console.log(this.memberList)
        })
      }
    },
    computed: {
      memberColumns(){
        let columns = []
        columns.push({
          title: '姓名',
          key: 'name',
          align:'center'
        });
        columns.push({
          title: '性别',
          key: 'sex',
          align:'center'
        });
        columns.push({
          title: '会员卡号码',
          key: 'memberCard',
          align:'center'
        });
        columns.push({
          title: '账号',
          key: 'phone',
          align:'center'
        });
        columns.push({
          title: '电话',
          key: 'tel',
          align:'center'
        });
        columns.push({
          title: '状态',
          key: 'status',
          align:'center'
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
    created(){
      this.pageListHandler()
    }
  }
</script>
