/**
 * Created by Administrator on 2017/12/14 0014.
 */
new Vue({
    el:'#app',
    data:{
        totalMoney:0,
        productList:[]
    },
    filters:{
        formatMoney:function (value) {
            return "￥ " + value.toFixed(2);
        }
    },
    mounted: function () {
        this.$nextTick(function () {//vm=this
            this.carView()
        })
    },
    methods:{
        carView:function () {
            var _this = this;
            this.$http.get("data/cartdata.json",{"id":123}).then(function (res) {
                _this.productList = res.body.result.list;
                _this.totalMoney = res.body.result.totalMoney;
            });
            //也可以使用箭头函数，直接指向外部的this
            // this.$http.get("data/cartdata.json",{"id":123}).then(res=> {
            //     this.productList = res.body.result.list;
            //     this.totalMoney = res.body.result.totalMoney;
            // });
        }
    }

});
//全局过滤器
Vue.filter('money',function (value, type) {
    return  "￥ " + value.toFixed(2) + type;
})