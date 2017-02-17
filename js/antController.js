   //antBaseRole.html
	//数据展示
	var antBaseRole_dates = [{id : '1',name : '小明',description : '小明是个乖宝宝',cname:'曾小华',ctime:'2017-03-03'},{id : '2',name: '小红',description : '小红是个乖宝宝',cname:'曾小华',ctime:'2017-03-03'},{id : '3',name : '小刘',description : '小刘是个乖宝宝',cname:'曾小华',ctime:'2017-03-03'}];
	ant.controller('antBaseRoleC', function($scope) {
	    $scope.dates = antBaseRole_dates;
	});
	
	
   //antBaseDivision.html
	//数据展示
	var antBaseDivision_dates = [{id : '1',name : '技术部',description : '技术部技术很牛逼',cname:'曾小华',ctime:'2017-03-03'},{id : '2',name: '财务部',description : '恭喜发财就是财务部',cname:'曾小华',ctime:'2017-03-03'},{id : '3',name : '业务部',description : '业务部赚钱养家就靠它',cname:'曾小华',ctime:'2017-03-03'}];
	ant.controller('antBaseDivisionC', function($scope) {
	    $scope.dates = antBaseDivision_dates;
	});
	
   //antBaseAuthority.html
	//数据展示
	var antBaseAuthority_dates = [
	{cnumber: '10086',jnumber : '13800',pwd : '******',department:'技术部',role:'美女',tel:'138001231234',email:'123456789@qq.com',zstate:'在线',dstate:'在线',ctime:'2017-02-12',cperson:'曾小华',xtime:'2017-02-12',xperson:'曾小华'},
	{cnumber: '10086',jnumber : '13800',pwd : '******',department:'技术部',role:'美女',tel:'138001231234',email:'123456789@qq.com',zstate:'在线',dstate:'在线',ctime:'2017-02-12',cperson:'曾小华',xtime:'2017-02-12',xperson:'曾小华'},
	{cnumber: '10086',jnumber : '13800',pwd : '******',department:'技术部',role:'美女',tel:'138001231234',email:'123456789@qq.com',zstate:'在线',dstate:'在线',ctime:'2017-02-12',cperson:'曾小华',xtime:'2017-02-12',xperson:'曾小华'},
	{cnumber: '10086',jnumber : '13800',pwd : '******',department:'技术部',role:'美女',tel:'138001231234',email:'123456789@qq.com',zstate:'在线',dstate:'在线',ctime:'2017-02-12',cperson:'曾小华',xtime:'2017-02-12',xperson:'曾小华'},
	{cnumber: '10086',jnumber : '13800',pwd : '******',department:'技术部',role:'美女',tel:'138001231234',email:'123456789@qq.com',zstate:'在线',dstate:'在线',ctime:'2017-02-12',cperson:'曾小华',xtime:'2017-02-12',xperson:'曾小华'}
	];
	ant.controller('antBaseAuthorityC', function($scope) {
	    $scope.dates = antBaseAuthority_dates;
	});
	
	
	//antExamineIndex.html
	//数据展示
	var antExamineIndex_dates = [
		{modle: '批发商',fn: '批发',secnum1:'财务部',secnum2:'总经办',rolnum1:'老板',rolnum2:'老婆',person1:'小龙女',person2:'杨过',ctime:'2017-02-02',cperson:'赵云',xtime:'2017-02-12',xperson:'曹操'},
		{modle: '批发商',fn: '批发',secnum1:'财务部',secnum2:'总经办',rolnum1:'老板',rolnum2:'老婆',person1:'小龙女',person2:'杨过',ctime:'2017-02-02',cperson:'赵云',xtime:'2017-02-12',xperson:'曹操'},
		{modle: '批发商',fn: '批发',secnum1:'财务部',secnum2:'总经办',rolnum1:'老板',rolnum2:'老婆',person1:'小龙女',person2:'杨过',ctime:'2017-02-02',cperson:'赵云',xtime:'2017-02-12',xperson:'曹操'},
		{modle: '批发商',fn: '批发',secnum1:'财务部',secnum2:'总经办',rolnum1:'老板',rolnum2:'老婆',person1:'小龙女',person2:'杨过',ctime:'2017-02-02',cperson:'赵云',xtime:'2017-02-12',xperson:'曹操'}
	];
	ant.controller('antExamineIndexC', function($scope) {
	    $scope.dates = antExamineIndex_dates;
	});




