
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
      <Page :total="page.total" :current="page.pageNo" :page-size="page.pageSize"
            @on-change="pageChangeHandler($event)"></Page>
    </div>

    <!--选择会员卡-->
    <Modal title="选择会员卡" width="200" v-model="memberCardModal" :closeable="false" :mask-closable="false">
      <Select v-model="memberCard" placeholder="请选择">
        <Option :value="item.id" :key="item.id" v-for="item in memberCardList">{{item.typeName}}-{{item.money}}</Option>
      </Select>
      <div slot="footer">
        <Button type="error" @click="bindMemberCard">确定</Button>
      </div>
    </Modal>
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
        key:'',
        memberCardModal:false,
        memberCard:'',
        memberCardList:[],
        member:{}
      }
    },
    methods:{
      //分页方法
      pageListHandler(){
        this.$http.get('/member/list?pageNo='+this.page.pageNo+"&pageSize="+this.page.pageSize+"&key="+this.key).then(res=>{
          console.log(res.data)
          this.memberList=res.data
          this.page.total=res.total
          this.page.pageNo=res.pageNo
        })
      },
      //页码改变事件
      pageChangeHandler(event){
        this.page.pageNo=event
        this.pageListHandler()
      },
      //打开选择会员卡模态
      selectMemberCard(param){
        this.member=param.row
        this.$http.get('/memberCard/cardList?stadiumId='+param.row.stadiumId).then(res=>{
          this.memberCardList=res.data
        })
        this.memberCardModal=true
      },
      //绑定会员卡
      bindMemberCard(){
        console.log(this.member)
        if(!this.memberCard){
          this.$Message.warning('请选择会员卡类型')
          return
        }
        this.member.memberCardId=this.memberCard
        this.$http.post('/member/update',JSON.stringify(this.member)).then(res=>{
          if(res.result==1){
            this.$Message.success('绑卡成功')
            this.pageListHandler()
          }else{
            this.$Message.error('绑卡失败')
          }
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
          key: 'memberCardNo',
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
                    this.selectMemberCard(param)
                  }
                }
              }, '绑卡'),
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
              }, '注销')
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
