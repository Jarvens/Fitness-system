<style scoped rel="stylesheet/scss" lang="scss">
  .coach_header {
    width: 100%;
    height: 56px;
    line-height: 56px;
    .coach_title {
      float: left;
      font-size: 20px;
      padding-left: 34px;
    }
  }
  .coach_page{
    line-height: 60px;
  }
</style>
<template>
  <div>
    <div class="coach_header">
      <div class="coach_title">
        教练
      </div>
      <div class="coach_search">
        <Input placeholder="请输入教练姓名..." v-model="key" style="width: 300px"></Input>
        <Button type="primary" icon="ios-search" @click="search()">搜索</Button>
        <Button type="primary" icon="plus" @click="coachAddHandler()">创建</Button>
      </div>
    </div>
    <Table :columns="coachColumns" :data="coachList"></Table>
    <div class="coach_page">
      <Page :total="page.total" :current="page.pageNo" :page-size="page.pageSize"
            @on-change="pageChangeHandler($event)"></Page>
    </div>


    <!--创建教练信息-->
    <Modal title="新增教练" v-model="coachAddModal">
      <Form ref="coachForm" :model="coachForm" :rules="ruleValidate" :label-width="80">
        <Row>
          <Col span="12">
          <Form-item label="姓名" prop="name">
            <Input v-model="coachForm.name" placeholder="请输入姓名"></Input>
          </Form-item>
          </Col>
          <Col span="12">
          <Form-item label="电话" prop="phone">
            <Input v-model="coachForm.phone" placeholder="请输入电话"></Input>
          </Form-item>
          </Col>
        </Row>
        <Row>
          <Col span="12">
          <Form-item label="机构" prop="organization">
            <Input v-model="coachForm.organization" placeholder="请输入发证机构名称"></Input>
          </Form-item>
          </Col>
          <Col span="12">
          <Form-item label="有效期" prop="validDate">
            <Date-picker type="date" placeholder="选择日期" v-model="coachForm.validDate"></Date-picker>
          </Form-item>
          </Col>
        </Row>
        <Row>
          <Col span="12">
          <Form-item label="状态">
            <Radio-group v-model="coachForm.status">
              <Radio label="1">在职</Radio>
              <Radio label="0">离职</Radio>
            </Radio-group>
          </Form-item>
          </Col>
          <Col span="12">
          <Form-item label="场馆" prop="stadiumId">
            <Select v-model="coachForm.stadiumId" placeholder="请选择场馆">
              <Option v-for="stadium in stadiumList" :value="stadium.id" :key="stadium.id">{{stadium.name}}</Option>
            </Select>
          </Form-item>
          </Col>
        </Row>
        <Row>
          <Col span="24">
          <Form-item label="描述">
            <Input v-model="coachForm.description" type="textarea" :autosize="{minRows: 2,maxRows: 5}"
                   placeholder="请输入..."></Input>
          </Form-item>
          </Col>
        </Row>
      </Form>
      <div slot="footer">
        <Button type="primary" @click="submitHandler('coachForm')">提交</Button>
      </div>
    </Modal>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        coachList: [],
        coach: {},
        coachAddModal: false,
        coachForm: {
          name: '',
          phone: '',
          organization: '',
          validDate: '',
          status: '1',
          stadiumId: '',
          description: ''
        },
        stadiumList: [],
        ruleValidate: {
          name: [{required: true, message: '请填写教练名称', trigger: 'blur'}],
          phone: [{required: true, message: '请填写联系电话', trigger: 'blur'}],
          organization: [{required: true, message: '请填写认证机构', trigger: 'blur'}]
//          validDate: [{required: true, message: '请选择有效期', trigger: 'blur'}],
//          stadiumId: [{required: true, message: '请选择场馆', trigger: 'blur'}],
        },
        page: {
          pageNo: 1,
          pageSize: 10,
          total: 0
        },
        key: ''
      }
    },
    methods: {
      search(){
        this.pageListHandler()
      },
      pageListHandler(){
        let url = '/coach/list?pageNo=' + this.page.pageNo + '&pageSize=' + this.page.pageSize + '&key=' + this.key;
        this.$http.get(url).then(res=> {
          this.coachList = res.data;
          this.page.total=res.total;
        })
      },
      coachAddHandler(){
        this.coachAddModal = true
      },
      stadiumListHandler(){
        let url = '/stadium/allStadium'
        this.$http.get(url).then(res=> {
          this.stadiumList = res.data
        })
      },
      submitHandler(val){
        this.$refs[val].validate((valid)=> {
          if (valid) {
            this.save()
          } else {
            this.$Message.warning('数据校验失败')
          }
        })
      },
      save(){
        this.$http.post('/coach/add', JSON.stringify(this.coachForm)).then(res=> {
          if (res.result == 1) {
            this.$Message.success('新增教练成功')
            this.pageListHandler()
          } else {
            this.$Message.error('新增教练失败')
          }
        })
      },
      pageChangeHandler(event){
        this.page.pageNo=event
      }
    },
    computed: {
      coachColumns(){
        let columns = []
        columns.push({
          title: '姓名',
          key: 'name',
          align: 'center'
        });
        columns.push({
          title: '电话',
          key: 'phone',
          align: 'center'
        });
        columns.push({
          title: '场馆',
          key: 'stadiumName',
          align: 'center'
        });
        columns.push({
          title: '状态',
          key: 'status',
          align: 'center',
          render:(h,param)=>{
            let status = param.row.status
            let text = status =='1'?'在职':'离职'
            return ('span',text)
          }
        });
        return columns;
      }
    },
    created(){
      this.pageListHandler()
    }
  }
</script>
