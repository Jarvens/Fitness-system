
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
        <Icon type="android-apps" size="30"></Icon>
        会员
      </div>
      <div class="member_search">
        <Input placeholder="请输入会员账号或姓名" style="width: 300px"></Input>
        <Button type="primary" icon="ios-search">搜索</Button>
      </div>
    </div>
    <Table :columns="memberColumns" :data="data1"></Table>
    <div class="page">
      <Page :total="100"></Page>
    </div>
  </div>

</template>

<script>
  export default {
    data () {
      return {
        columns1: [
          {
            title: '姓名',
            key: 'name'
          },
          {
            title: '年龄',
            key: 'age'
          },
          {
            title: '地址',
            key: 'address'
          }
        ],
        data1: [
          {
            name: '王小明',
            age: 18,
            address: '北京市朝阳区芍药居'
          },
          {
            name: '张小刚',
            age: 25,
            address: '北京市海淀区西二旗'
          },
          {
            name: '李小红',
            age: 30,
            address: '上海市浦东新区世纪大道'
          },
          {
            name: '周小伟',
            age: 26,
            address: '深圳市南山区深南大道'
          }
        ]
      }
    },
    computed: {
      memberColumns(){
        let columns = []
        columns.push({
          title: '序号',
          key: 'index'
        });
        columns.push({
          title: '头像',
          key: 'memberImg'
        });
        columns.push({
          title: '姓名',
          key: 'name'
        });
        columns.push({
          title: '联系电话',
          key: 'phone'
        });
        columns.push({
          title: '状态',
          key: 'status'
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
    }
  }
</script>
