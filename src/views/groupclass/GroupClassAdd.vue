<style scoped rel="stylesheet/scss" lang="scss">
  .group_class_header {
    width: 100%;
    height: 56px;
    line-height: 56px;
    .group_class_title {
      float: left;
      font-size: 20px;
      padding-left: 34px;
    }
  }
  .main_content{
    padding:0 20px;
  }
</style>
<template>
<div>
  <div class="group_class_header">
    <div class="group_class_title">
      创建团课
    </div>
  </div>
  <div class="main_content">
    <Form ref="groupClassForm" :model="groupClassForm" :rules="ruleValidate" :label-width="80">
      <Row>
        <Col span="8">
        <Form-item label="名称" prop="name">
          <Input v-model="groupClassForm.name" placeholder="请输入名称"></Input>
        </Form-item>
        </Col>
        <Col span="8">
        <Form-item label="总人数" prop="mail">
          <Input v-model="groupClassForm.total" placeholder="请输入总人数"></Input>
        </Form-item>
        </Col>
        <Col span="8">
        <Form-item label="剩余人数" prop="surplusNum">
          <Input v-model="groupClassForm.surplusNum" placeholder="请输入剩余人数"></Input>
        </Form-item>
        </Col>
      </Row>
      <Row>
        <Col span="8">
        <Form-item label="课程时长" prop="timeTotal">
          <Input v-model="groupClassForm.timeTotal" placeholder="请输入总人数"></Input>
        </Form-item>
        </Col>
        <Col span="16">
        <Form-item label="上课地址" prop="address">
          <Input v-model="groupClassForm.address" placeholder="请输入上课地址"></Input>
        </Form-item>
        </Col>
      </Row>




      <Form-item label="场馆" prop="stadiumId">
        <Select v-model="groupClassForm.stadiumId" placeholder="请选择场馆">
          <Option value="beijing">北京市</Option>
          <Option value="shanghai">上海市</Option>
          <Option value="shenzhen">深圳市</Option>
        </Select>
      </Form-item>

      <Form-item label="教练" prop="coachId">
        <Select v-model="groupClassForm.coachId" placeholder="请选择教练">
          <Option value="beijing">北京市</Option>
          <Option value="shanghai">上海市</Option>
          <Option value="shenzhen">深圳市</Option>
        </Select>
      </Form-item>
      <Form-item label="选择日期">
        <Row>
          <Col span="11">
          <Form-item prop="date">
            <Date-picker type="date" placeholder="选择日期" v-model="groupClassForm.date"></Date-picker>
          </Form-item>
          </Col>
          <Col span="2" style="text-align: center">-</Col>
          <Col span="11">
          <Form-item prop="time">
            <Time-picker type="time" placeholder="选择时间" v-model="groupClassForm.time"></Time-picker>
          </Form-item>
          </Col>
        </Row>
      </Form-item>
      <Form-item label="性别" prop="gender">
        <Radio-group v-model="groupClassForm.gender">
          <Radio label="male">男</Radio>
          <Radio label="female">女</Radio>
        </Radio-group>
      </Form-item>
      <Form-item label="爱好" prop="interest">
        <Checkbox-group v-model="groupClassForm.interest">
          <Checkbox label="吃饭"></Checkbox>
          <Checkbox label="睡觉"></Checkbox>
          <Checkbox label="跑步"></Checkbox>
          <Checkbox label="看电影"></Checkbox>
        </Checkbox-group>
      </Form-item>
      <Form-item label="介绍" prop="desc">
        <Input v-model="groupClassForm.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入..."></Input>
      </Form-item>
      <Form-item>
        <Button type="primary" @click="handleSubmit('groupClassForm')">提交</Button>
        <Button type="ghost" @click="handleReset('groupClassForm')" style="margin-left: 8px">重置</Button>
      </Form-item>
    </Form>
  </div>
</div>
</template>
<script>
  export default{
      data(){
        return {
          groupClassForm:{},
          ruleValidate:{}
        }
      }
  }
</script>
