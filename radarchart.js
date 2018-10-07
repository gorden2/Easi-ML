 // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main'));

        // 指定图表的配置项和数据
		option = {
			title: {
				text: '基础雷达图'
			},
			tooltip: {},
			legend: {
				data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
			},
			radar: {
				// shape: 'circle',
				name: {
					textStyle: {
						color: '#fff',
						backgroundColor: '#999',
						borderRadius: 3,
						padding: [3, 5]
				   }
				},
				indicator: [
				   { name: '', max: 6500},
				   { name: '', max: 16000},
				   { name: '', max: 30000},
				   { name: '', max: 38000},
				   { name: '', max: 52000}
				]
			},
			series: [{
				name: '预算 vs 开销（Budget vs spending）',
				type: 'radar',
				// areaStyle: {normal: {}},
				data : [
					{
						value : [4300, 10000, 28000, 35000, 50000, 19000],
						name : '预算分配（Allocated Budget）'
					},
					 {
						value : [5000, 14000, 28000, 31000, 42000, 21000],
						name : '实际开销（Actual Spending）'
					}
				]
			}]
		};
        
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option); 
