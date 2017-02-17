
// index.html  
		$(".rt_content-nav div ul li a").on("click",function(){
			$(this).parent().parent().hide();
		});
		$(".rt_content-nav div").hover(function(){
			$(this).find("ul").show();
		},function(){
			$(this).find("ul").hide();
		});
		$(".rt_content-examine").hover(function(){
			$(this).find("ol").show();
		},function(){
			$(this).find("ol").hide();
		});
		
		$(".rt_content-nav div").click(function(){
			$(this).addClass("antActiveNav").siblings().removeClass("antActiveNav");
		})

//  antBaseDivision.html  弹窗
			$(document).on("click",".antBaseDivJoin a",function(){
				layer.open({
				  type: 1 //Page层类型
				  ,area: ['500px', '500px']
				  ,title: '新增部门'
				  ,shade: 0.6 //遮罩透明度
				  ,maxmin: true //允许全屏最小化
				  ,anim: 5 //0-6的动画形式，-1不开启
				  ,content: '<div class="" style="margin-top:20px;margin-left:50px">'+
				  				'<div style="margin-bottom:20px;"><labal>部门名称：</labal><input type="text"></div>'+
				  				'<labal style="position: absolute;"><p>部门描述：</p><textarea style="margin-top: -16px; width: 270px;height: 85px;margin-left: 70px;"></textarea>'+
				  				'<div class="antBaseTableAll antBaseTableDiv">'+
				  					'<p>设置权限:</p>'+
				  					'<labal>基础配置</labal>'+
				  					'<labal>订单管理</labal>'+
				  					'<labal>客服中心</labal>'+
				  					'<labal>广告管理</labal>'+
				  					'<labal>消息推送</labal>'+
				  					'<labal>供应商管理</labal>'+
				  					'<labal>批发部门管理</labal>'+
				  					'<labal>门店管理</labal>'+
				  					'<labal>消费者管理</labal>'+
				  					'<labal>平台积分管理</labal>'+
				  					'<labal>促销管理</labal>'+
				  					'<labal>结算中心</labal>'+
				  					'<labal>报表</labal>'+
				  				'</div>'+
				  			'</div>'
				  ,btn: ['确定', '取消']
					,yes: function(index, layero){
						
						layer.closeAll();
					},btn1: function(index, layero){
						
					
					
					} 
				});

			});

			
			$(document).on("click",".antBaseTableDiv labal",function(){
				if($(this).hasClass("antActivecheckbox")){
					$(this).removeClass("antActivecheckbox");	
				}else{
					$(this).addClass("antActivecheckbox");
				}
			});
			


// antBaseRole.html  弹窗

			$(document).on("click",".antBaseRoleJoin a",function(){
				layer.open({
				  type: 1 //Page层类型
				  ,area: ['500px', '500px']
				  ,title: '新增角色'
				  ,shade: 0.6 //遮罩透明度
				  ,maxmin: true //允许全屏最小化
				  ,anim: 5 //0-6的动画形式，-1不开启
				  ,content: '<div class="" style="margin-top:20px;margin-left:50px">'+
				  				'<div style="margin-bottom:20px;"><labal>角色名称：</labal><input type="text"></div>'+
				  				'<labal style="position: absolute;"><p>角色描述：</p><textarea style="margin-top: -16px; width: 270px;height: 85px;margin-left: 70px;"></textarea>'+
				  				'<div class="antBaseTableAll antBaseTableRole">'+
				  					'<p>设置权限:</p>'+
				  					'<labal>基础配置</labal>'+
				  					'<labal>订单管理</labal>'+
				  					'<labal>客服中心</labal>'+
				  					'<labal>广告管理</labal>'+
				  					'<labal>消息推送</labal>'+
				  					'<labal>供应商管理</labal>'+
				  					'<labal>批发部门管理</labal>'+
				  					'<labal>门店管理</labal>'+
				  					'<labal>消费者管理</labal>'+
				  					'<labal>平台积分管理</labal>'+
				  					'<labal>促销管理</labal>'+
				  					'<labal>结算中心</labal>'+
				  					'<labal>报表</labal>'+
				  				'</div>'+
				  			'</div>'
				  ,btn: ['确定', '取消']
					,yes: function(index, layero){
						
						layer.closeAll();
					},btn1: function(index, layero){
						
					
					
					} 
				});

			});

			
			$(document).on("click",".antBaseTableRole labal",function(){
				if($(this).hasClass("antActivecheckbox")){
					$(this).removeClass("antActivecheckbox");	
				}else{
					$(this).addClass("antActivecheckbox");
				}	
			});
			

//antBaseAuthority.html
			$(document).on("click",".antBaseAuthority-list tr span:nth-child(1)",function(){
				if($(this).attr("antBaseAuthority-data")==0){
					$(this).html("禁用").css("background-color","#e2e2e2").attr("antBaseAuthority-data","1");
				}else{
					$(this).html("开启").css("background-color","#18A87A").attr("antBaseAuthority-data","0");
				}
			});
			
			$(document).on("click",".antBaseAuthority-list tr span:nth-child(2)",function(){
				layer.open({
				  type: 1 //Page层类型
				  ,area: ['500px', '350px']
				  ,title: '用户平台管理'
				  ,shade: 0.6 //遮罩透明度
				  ,maxmin: true //允许全屏最小化
				  ,anim: 5 //0-6的动画形式，-1不开启
				  ,content: '<div class="antBaseTableA" style="margin-top:20px;margin-left:50px">'+
				  				'<div class="antBaseTableAll antBaseTableB">'+
				  					'<labal  class="antBaseTableAtive">基础配置</labal>'+
				  					'<labal>订单管理</labal>'+
				  					'<labal>客服中心</labal>'+
				  					'<labal>广告管理</labal>'+
				  					'<labal class="antBaseTableAtive">消息推送</labal>'+
				  					'<labal>供应商管理</labal>'+
				  					'<labal>批发部门管理</labal>'+
				  					'<labal>门店管理</labal>'+
				  					'<labal class="antBaseTableAtive">消费者管理</labal>'+
				  					'<labal>平台积分管理</labal>'+
				  					'<labal class="antBaseTableAtive">促销管理</labal>'+
				  					'<labal>结算中心</labal>'+
				  					'<labal>报表</labal>'+
				  				'</div>'+
				  			'</div>'
				  ,btn: ['确定']
					,yes: function(index, layero){
						alert(2);
						layer.closeAll();
					} 
				});
				$(".antBaseTableAtive").css({"background-color":"#2D8CEC","color":"#ffffff"});
			});

//antBaseSupplier.html
			$(document).on("click",".antBaseSupJoin",function(){
				layer.open({
				  type: 1 //Page层类型
				  ,area: ['500px', '300px']
				  ,title: '供应商功能配置'
				  ,shade: 0.6 //遮罩透明度
				  ,maxmin: true //允许全屏最小化
				  ,anim: 5 //0-6的动画形式，-1不开启
				  ,content: '<div class="" style="margin-top:20px;margin-left:50px">'+
				  				'<div style="margin-bottom:20px;"><labal>功能名称：</labal><input type="text"></div>'+
				  				'<labal style="position: absolute;"><p>功能描述：</p><textarea style="margin-top: -16px; width: 270px;height: 85px;margin-left: 70px;"></textarea>'+
				  			'</div>'
				  ,btn: ['确定', '取消']
					,yes: function(index, layero){
						
						layer.closeAll();
					},btn1: function(index, layero){
						
					
					
					} 
				});
			});

//antExamineIndex.html

			$(document).on("click",".antExamineIndexJoin a",function(){
				layer.open({
				  type: 1 //Page层类型
				  ,area: ['500px', '450px']
				  ,title: '审批流程配置'
				  ,shade: 0.6 //遮罩透明度
				  ,maxmin: true //允许全屏最小化
				  ,anim: 5 //0-6的动画形式，-1不开启
				  ,content: '<div class="antBaseSupLayer">'+
								'<label>用户类型：</label>'+
								'<select name="">'+
									'<option value="">---请选择---</option>'+
									'<option value="">平台</option>'+
									'<option value="">供应商</option>'+
									'<option value="">批发部</option>'+
									'<option value="">门店</option>'+
								'</select><br>'+
								'<label>功能模块：</label>'+
								'<select name="">'+
									'<option value="">---请选择---</option>'+
								'</select><br>'+
								'<label>节点一审批部门：</label>'+
								'<select name="">'+
									'<option value="">---请选择---</option>'+
								'</select><br>'+
								'<label>节点一审批角色：</label>'+
								'<select name="">'+
									'<option value="">---请选择---</option>'+
								'</select><br>'+
								'<label>节点一审批角色：</label><input type="text" /><br>'+
								'<label>节点二审批部门 : </label>'+
								'<select style="margin-left: 16px;" name="">'+
									'<option value="">---请选择---</option>'+
								'</select><br>'+
								'<label>节点二审批角色 : </label>'+
								'<select style="margin-left: 16px;" name="">'+
									'<option value="">---请选择---</option>'+
								'</select><br>'+
								'<label>节点一审批人：</label><input style="margin-left: 24px;" type="text" /><br>'+
							'</div>'
				  ,btn: ['确定']
					,yes: function(index, layero){
						layer.closeAll();
					} 
				});
			});

