<template>
    <div>
        <Menu :theme="theme3" active-name="member"  @on-select="click">
            <Menu-group>
                <Menu-item name="member">
                    <Icon type="person" size="30"></Icon>
                    会员
                </Menu-item>
                <Menu-item name="private-class">
                    <Icon type="android-walk" size="30"></Icon>
                    私教
                </Menu-item>
                <Menu-item name="group-class">
                    <Icon type="android-bicycle" size="30"></Icon>
                    团体
                </Menu-item>
                <Menu-item name="coach">
                    <Icon type="ios-people" size="30"></Icon>
                    教练
                </Menu-item>
                <Menu-item name="vip">
                    <Icon type="card" size="30"></Icon>
                    VIP
                </Menu-item>
                <Menu-item name="stadium">
                    <Icon type="ios-home" size="30"></Icon>
                    场馆
                </Menu-item>
                <Menu-item name="activity">
                    <Icon type="ios-game-controller-b" size="30"></Icon>
                    活动
                </Menu-item>
                <Menu-item name="news">
                    <Icon type="chatbubble-working" size="30"></Icon>
                    新闻
                </Menu-item>
            </Menu-group>
        </Menu>
    </div>

</template>
<script>
    export default {
        data () {
            return {
                theme3: 'light'
            }
        },
        methods:{
            click(val){
                console.log(val)
                this.$router.push(val)
            }
        }
    }
</script>
