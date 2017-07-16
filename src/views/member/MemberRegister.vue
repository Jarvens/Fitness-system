<!--会员注册页面-->

<style scoped rel="stylesheet/scss" lang="scss">
  .register_header {
    width: 100%;
    height: 56px;
    line-height: 56px;
    border-bottom: 1px solid #bbbec4;
    .register_title {
      float: left;
      font-size: 20px;
      padding-left: 34px;
    }
  }

  .content {
    margin-top: 20px;
    padding: 0 20px;
  }
</style>
<template>
  <div>
    <div class="register_header">
      <div class="register_title">
        注册
      </div>
    </div>
    <div class="content">
      <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
        <Row>
          <Col span="8">
          <img src="" alt="头像" style="height: 140px;width: 140px;">
          </Col>
          <Col span="8">
          <Form-item label="姓名" prop="name">
            <Input v-model="formValidate.name" placeholder="请输入姓名"></Input>
          </Form-item>
          </Col>
          <Col span="8">
          <Form-item label="手机" prop="mail">
            <Input v-model="formValidate.mail" placeholder="请输入手机"></Input>
          </Form-item>
          </Col>
          <Col span="8">
          <Form-item label="生日" prop="date">
            <Date-picker style="width:250px;" type="date" placeholder="选择日期" v-model="formValidate.date"></Date-picker>
          </Form-item>
          </Col>
          <Col span="8">
          <Form-item label="联系电话" prop="mail">
            <Input v-model="formValidate.mail" placeholder="请输入联系电话"></Input>
          </Form-item>
          </Col>
          <Col span="8">
          <Form-item label="年龄" prop="mail">
            <Input v-model="formValidate.mail" placeholder="请输入年龄"></Input>
          </Form-item>
          </Col>
          <Col span="8">
          <Form-item label="昵称" prop="mail">
            <Input v-model="formValidate.mail" placeholder="请输入昵称"></Input>
          </Form-item>
          </Col>
          <Col span="6">
          <Form-item label="状态" prop="status">
            <Select v-model="formValidate.city" placeholder="请选择状态">
              <Option value="1">正常</Option>
              <Option value="2">审核不通过</Option>
              <Option value="3">注销</Option>
            </Select>
          </Form-item>
          </Col>
          <Col span="6">
          <Form-item label="会员卡" prop="city">
            <Select v-model="formValidate.city" placeholder="请选择所在地">
              <Option value="beijing">北京市</Option>
              <Option value="shanghai">上海市</Option>
              <Option value="shenzhen">深圳市</Option>
            </Select>
          </Form-item>
          </Col>
          <Col span="6">
          <Form-item label="邮箱" prop="mail">
            <Input v-model="formValidate.mail" placeholder="请输入昵称"></Input>
          </Form-item>
          </Col>
          <Col span="6">
          <Form-item label="证件号码" prop="mail">
            <Input v-model="formValidate.mail" placeholder="请输入昵称"></Input>
          </Form-item>
          </Col>
        </Row>
        <Row>
          <Col span="6">
          <Form-item label="场馆" prop="city">
            <Select v-model="formValidate.city" placeholder="请选择所在地">
              <Option value="beijing">北京市</Option>
              <Option value="shanghai">上海市</Option>
              <Option value="shenzhen">深圳市</Option>
            </Select>
          </Form-item>
          </Col>
          <Col span="6">
          <Form-item label="性别" prop="sex">
            <Select v-model="formValidate.sex" placeholder="请选择性别">
              <Option value="1">男</Option>
              <Option value="0">女</Option>
            </Select>
          </Form-item>
          </Col>
          <Col span="12">
          <Form-item label="备注" prop="mail">
            <Input v-model="formValidate.mail" placeholder="请输入备注"></Input>
          </Form-item>
          </Col>
        </Row>
        <Row>
          <Col span="24">
          <Form-item label="联系地址" prop="mail">
            <Input v-model="formValidate.mail" placeholder="请输入联系地址"></Input>
          </Form-item>
          </Col>
        </Row>
      </Form>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        formValidate: {},
        ruleValidate: {}
      }
    }
  }
</script>
