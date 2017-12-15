/**
 * Created by Administrator on 2017/12/14 0014.
 */
new Vue({
    el:'#app',
    data:{
        totalMoney:0,
        productList:[],
        checkAllFlag:false
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
        },
        changeMoney:function (product, way) {
            if(way > 0){
                product.productQuentity++;
            }else{
                product.productQuentity--;
                if(product.productQuentity < 1){
                    product.productQuentity = 1;
                }
            }
        },
        selectedProduct:function (item) {
            if(typeof item.checked == "undefined"){
                Vue.set(item,'checked',true);
                // this.$set(item,'checked',true);
            }else{
                item.checked = !item.checked;
            }
        },
        checkAll:function (flag) {
            this.checkAllFlag = flag;
            var _this = this;
            this.productList.forEach(function (item,index) {
                if(typeof item.checked == 'undefined'){
                    _this.$set(item,'checked',_this.checkAllFlag);
                }else{
                    item.checked = _this.checkAllFlag;
                }
            })
        }
    }

});
//全局过滤器
Vue.filter('money',function (value, type) {
    return  "￥ " + value.toFixed(2) + type;
})