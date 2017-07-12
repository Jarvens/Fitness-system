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
</style>
<template>
  <div>
    <div class="coach_header">
      <div class="coach_title">
        教练
      </div>
      <div class="coach_search">
        <Input placeholder="请输入教练姓名..." style="width: 300px"></Input>
        <Button type="primary" icon="ios-search" @click="search()">搜索</Button>
        <Button type="primary" icon="plus" @click="coachAddHandler()">创建</Button>
      </div>
    </div>
    <Table :columns="coachColumns" :data="coachList"></Table>


    <!--创建教练信息-->
    <Modal title="新增教练" v-model="coachAddModal">
      <Form ref="coachForm" :model="coachForm" :label-width="80">
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
          <Form-item label="机构" prop="phone">
            <Input v-model="coachForm.phone" placeholder="请输入发证机构名称"></Input>
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
              <Option value="beijing">北京市</Option>
              <Option value="shanghai">上海市</Option>
              <Option value="shenzhen">深圳市</Option>
            </Select>
          </Form-item>
          </Col>
        </Row>
        <Row>
          <Col span="24">
          <Form-item label="描述">
            <Input v-model="coach.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入..."></Input>
          </Form-item>
          </Col>
        </Row>
      </Form>
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
        coachForm: {}
      }
    },
    methods: {
      search(){
        console.log('搜索')
      },
      coachAddHandler(){
        this.coachAddModal = true
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
          align: 'center'
        });
        return columns;
      }
    }
  }
</script>
