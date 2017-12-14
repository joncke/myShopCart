/**
 * Created by Administrator on 2017/12/14 0014.
 */
var vm = new Vue({
    el:'#app',
    data:{
        totalMoney:0,
        productList:[]
    },
    mounted: function () {
        this.carView()
    },
    methods:{
        carView:function () {
            var _this = this;
            this.$http.get("data/cartdata.json",{"id":123}).then(function (res) {
                _this.productList = res.body.result.list;
                _this.totalMoney = res.body.result.totalMoney;
            });
        }
    }

});