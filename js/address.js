/**
 * Created by Administrator on 2017/12/22 0022.
 */
new Vue({
    el:".container",
    data:{
        limitedBy:3,
        addressList:[],
        currentIndex:0,
        shippingMethod:1
    },
    mounted:function () {
        this.$nextTick(function () {
            this.getAddressData();
        });
    },
    computed:{
        filterAddress:function () {
            return this.addressList.slice(0,this.limitedBy);// 返回全新函数
        }
    },
    methods:{
        getAddressData:function () {
            var _this = this;
            this.$http.get("data/address.json").then(function (response) {
                var res = response.data;  //***************//
                _this.addressList = res.result;
            })
        },
        setDefault:function (address) {
            this.addressList.forEach(function(item,index){
                if(address == item.addressId){
                    item.isDefault = true;
                }else{
                    item.isDefault = false;
                }
            })
        }
    }


});