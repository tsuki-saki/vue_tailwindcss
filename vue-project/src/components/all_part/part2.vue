<template>
    <div class="absolute w-full max-w-1280 flex items-center justify-center h-1500 minw:h-1000 mt-p2_mt px-10 minw:px-20 py-50">
			<div class="flex flex-col-reverse minw:flex-row flex-none items-center justify-center">
				<div class="flex flex-col items-center justify-center minw:items-stretch mt-20 minw:mt-0">
					<div class="flex flex-row text-xl font-semibold ml-6">
						<div class="flex flex-col" id="b1">
							<button class="flex-none" @click="c1">试题资源</button>
							<p class="w-auto h-0.5 bg-black" id="l1"></p>
						</div>
						<p class="w-10"></p>
						<div class="flex flex-col" id="b2">
							<button class="flex-none" @click="c2">试卷资源</button>
							<p class="w-auto h-0.5 bg-black" id="l2"></p>
						</div>
						<p class="w-10"></p>
						<div class="flex flex-col" id="b3">
							<button class="flex-none" @click="c3">教材教辅</button>
							<p class="w-auto h-0.5 bg-black" id="l3"></p>
						</div>
					</div>
					<div class="flex items-center justify-center mt-8">
						<div class="flex-none">
							<img src="../../image/data.png" class="w-152.5 h-130">
						</div>
					</div>
				</div>
				<div class="flex flex-col mt-36 ml-15">
					<span class="w-125 text-4xl font-bold text-center minw:text-left">
						<span class="bg-gradient-to-r from-p2_cword1_1 to-p2_cword1_2 inline-block bg-clip-text text-transparent">海量</span>
						<span >教学资源，</span>
						<span class="bg-gradient-to-r from-p2_cword2_1 to-p2_cword2_2 inline-block bg-clip-text text-transparent">智能</span>
						<span>处理</span>
					</span>
					<ul class="w-125 text-xl font-normal text-p3_cword4 mt-10 text-center minw:text-left">
						<li>海量标准化、体系化的教学资源</li>
						<li class="pt-6">基于高效准确的试题相似度评估算法的高质量资源库</li>
						<li class="pt-6">智能与个性化的资源录入、查询和管理服务</li>
					</ul>
					<span class="flex flex-row w-125 text-xl text-white font-normal mt-10">
						<button class="bg-p2_cbutton2 pt-3 pb-3 pl-5 pr-5 mr-4 border-2 rounded-xl"><i class="el-icon-edit"></i> 试题录入</button>
						<button class="bg-p2_cbutton3 pt-3 pb-3 pl-5 pr-5 mr-4 border-2 rounded-xl"><i class="el-icon-search"></i> 试题检索</button>
						<button class="bg-p2_cbutton1 pt-3 pb-3 pl-5 pr-5 border-2 rounded-xl"><i class="el-icon-reading"></i> 智能分析</button>
					</span>
				</div>
			</div>	
	</div>
</template>

<script>
    export default{		
        name: 'part2',
		data(){
			return{

			}
		},
		methods:{
			c1(){
				var b1=document.getElementById('b1');
				var b2=document.getElementById('b2');
				var b3=document.getElementById('b3');
				var l1=document.getElementById('l1');
				var l2=document.getElementById('l2');
				var l3=document.getElementById('l3');
				b1.style.color='#000000';
				b2.style.color='#707070';
				b3.style.color='#707070';
				l1.style.display='';
				l2.style.display='none';
				l3.style.display='none';
			},
			c2(){
				var b1=document.getElementById('b1');
				var b2=document.getElementById('b2');
				var b3=document.getElementById('b3');
				var l1=document.getElementById('l1');
				var l2=document.getElementById('l2');
				var l3=document.getElementById('l3');
				b1.style.color='#707070';
				b2.style.color='#000000';
				b3.style.color='#707070';
				l1.style.display='none';
				l2.style.display='';
				l3.style.display='none';
			},
			c3(){
				var b1=document.getElementById('b1');
				var b2=document.getElementById('b2');
				var b3=document.getElementById('b3');
				var l1=document.getElementById('l1');
				var l2=document.getElementById('l2');
				var l3=document.getElementById('l3');
				b1.style.color='#707070';
				b2.style.color='#707070';
				b3.style.color='#000000';
				l1.style.display='none';
				l2.style.display='none';
				l3.style.display='';
			}
		},
		mounted(){
			this.c1();
		}
	}
</script>