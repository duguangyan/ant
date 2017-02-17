var ant = angular.module('ant',['ngRoute'])
.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/',{templateUrl:'view/index.html'})
    //基础
    .when('/antBaseGoods',{templateUrl:'view/base/antBaseGoods.html'})
    .when('/antBaseRole',{templateUrl:'view/base/antBaseRole.html'})
    .when('/antBaseDivision',{templateUrl:'view/base/antBaseDivision.html'})
    .when('/antBaseAuthority',{templateUrl:'view/base/antBaseAuthority.html'})
    .when('/antBaseSupplier',{templateUrl:'view/base/antBaseSupplier.html'})
    .when('/antBaseWholesale',{templateUrl:'view/base/antBaseWholesale.html'})
    .when('/antBaseStore',{templateUrl:'view/base/antBaseStore.html'})
    .when('/antBaseConsume',{templateUrl:'view/base/antBaseConsume.html'})
    //订单
    .when('/antOrderTerrace',{templateUrl:'view/order/antOrderTerrace.html'})
    .when('/antOrderWholesale',{templateUrl:'view/order/antOrderWholesale.html'})
    .when('/antOrderStore',{templateUrl:'view/order/antOrderStore.html'})
    .when('/antOrderCustomer',{templateUrl:'view/order/antOrderCustomer.html'})
    .when('/antAdvertUsed',{templateUrl:'view/advert/antAdvertUsed.html'})
    //消息
    .when('/antNewsUsed',{templateUrl:'view/news/antNewsUsed.html'})
    .when('/antNewsAdmin',{templateUrl:'view/news/antNewsAdmin.html'})
    //供应商
    .when('/antSupplierBase',{templateUrl:'view/supplier/antSupplierBase.html'})
    .when('/antSupplierFun',{templateUrl:'view/supplier/antSupplierFun.html'})
    .when('/antSupplierData',{templateUrl:'view/supplier/antSupplierData.html'})
    .when('/antSupplierNumber',{templateUrl:'view/supplier/antSupplierNumber.html'})
    //批发
    .when('/antWholesaleManage',{templateUrl:'view/wholesale/antWholesaleManage.html'})
    //任务
    .when('/antTaskCom',{templateUrl:'view/task/antTaskCom.html'})
    //促销
    .when('/antSalesSup',{templateUrl:'view/sales/antSalesSup.html'})
    .when('/antSalesWho',{templateUrl:'view/sales/antSalesWho.html'})
    .when('/antSalesStore',{templateUrl:'view/sales/antSalesStore.html'})
    //结算 
    .when('/antBalanceSup',{templateUrl:'view/balance/antBalanceSup.html'})
    .when('/antBalanceWho',{templateUrl:'view/balance/antBalanceWho.html'})
    .when('/antBalanceStore',{templateUrl:'view/balance/antBalanceStore.html'})
    .when('/antBalanceCur',{templateUrl:'view/balance/antBalanceCur.html'})
    .when('/antBalanceTer',{templateUrl:'view/balance/antBalanceTer.html'})
    //审批 examine 
    .when('/antExamineIndex',{templateUrl:'view/examine/antExamineIndex.html'})
    .when('/antExamineTer',{templateUrl:'view/examine/antExamineTer.html'})
    .when('/antExamineSup',{templateUrl:'view/examine/antExamineSup.html'})
    .when('/antExamineWho',{templateUrl:'view/examine/antExamineWho.html'})
    .when('/antExamineStore',{templateUrl:'view/examine/antExamineStore.html'})
    //报表 antExamineIndex
    .when('/antFormsTer',{templateUrl:'view/forms/antFormsTer.html'})
    .when('/antFormsSup',{templateUrl:'view/forms/antFormsSup.html'})
    .when('/antFormsWho',{templateUrl:'view/forms/antFormsWho.html'})
    .when('/antFormsStore',{templateUrl:'view/forms/antFormsStore.html'})
    .when('/antFormsCur',{templateUrl:'view/forms/antFormsCur.html'})
    .when('/antFormsFot',{templateUrl:'view/forms/antFormsFot.html'})
    
    .otherwise({redirectTo:'/'});
}]);

	

