<template>
    <div>
        <div class="w-full max-w-1280 px-10 py-10 minw:px-5 minw:py-5 absolute flex items-center justify-center h-p1_1_nh minw:h-p1_1_wh bg-gradient-to-r from-p1_c3 from-0% via-p1_c2 via-45% to-p1_c1 to-100% bg-opacity-100">
			<div class="fixed flex flex-row top-0 w-full z-50 transition duration-300 py-nav_py" id="nav">
				<span class="flex-none pl-14">
					<img src="../../image/logo.png" class="w-36 h-11" >
				</span>
				<span class="flex-1"></span>
				<span class="hidden flex-none minw:flex flex-row flex-nowrap max-w-1280 mx-14 text-xl font-medium">
					<button class="pr-3 hover:text-blue-400">首页</button>
					<button class="pr-3 ml-6 hover:text-blue-400">功能</button>
					<button v-for="item in ['AI实验室','成员']" class="ml-6 pr-3 hover:text-blue-400">{{ item }}</button>
					<span class="ml-6 mt-2">|</span>
					<button class="ml-6 hover:text-blue-400 ">登录</button>
					<button class="border-login_cborder border-2 rounded-full pl-4 pr-4 ml-6 py-2 hover:text-blue-400 ">注册</button>
				</span>
				<span class="flex-1 minw:hidden">
					<button class="hover:text-blue-400 text-4xl absolute right-4"><i class="el-icon-menu"></i></button>
				</span>
			</div>
			<div class="absolute flex flex-row max-w-1280 bottom-logo_bottom">
				<span class="flex-none">
					<img src="../../image/logo2.png" class="w-32 h-32">
				</span>
				<span class="mx-3 py-2.5">
					<h1 class="text-5xl font-medium px-5">LUNA</h1>
					<h2 class="text-xl font-normal text-center max-w-760 mt-2">智慧教育知识图谱</h2>
				</span>
			</div>
			<div class="absolute flex flex-row shadow-p1_shadow max-w-1280 border-2 rounded-full w-auto minw:w-160 h-16 mx-15 minw:mx-0 bg-white items-center bottom-0 -bottom-8 z-40">
				<i class="el-icon-search text-2xl ml-5 mr-3 my-4.5"></i>
				<div class="w-search_frame_narrow minw:w-search_frame_wide">
					<input type="text" class="my-search_frame_my flex-none text-left text-4.5 font-medium w-search_frame_narrow minw:w-search_frame_wide flex-none outline-none z-1" placeholder="在此输入知识点名称" v-model="serchinfo">
				</div>
				<div class="absolute right-0 shadow-p1_shadow2 border-1 rounded-full px-0 py-0 mr-1">
					<button @click='hello' class="shadow-p1_shadow2 transition duration-300 text-center border-1 rounded-full px-10 py-3 z-2 text-white text-xl font-normal bg-gradient-to-r from-p1_cbutton1 to-p1_cbutton2">
					搜索
				</button>
				</div>
			</div>
		</div>
        <div class="w-full max-w-1280 absolute flex items-center justify-center h-p1_2_nh minw:h-p1_2_wh mt-p1_1_nh minw:mt-p1_1_wh">
			    <div class="absolute top-10">
				    <button @click="hello" class="transition duration-300 border-2 rounded-full pl-10 pr-10 pt-3 pb-3 bg-gradient-to-t from-p1_cbutton1 to-p1_cbutton2 text-white text-xl font-normal">
					    vue-router-api
				    </button>
			    </div>
			    <div class="flex-none absolute top-1/3 w-760 text-center text-5xl font-medium">
				    寓智于教，致知未来
			    </div>
			    <div class="flex-none absolute flex top-1/2 w-760 text-center text-xl font-normal">
					智慧教育知识图谱（LUNA）致力于为广大师生提供深层次、多维度的海量教育资源处理分析工具，与智能、个性化的教育资源组织、分析与评估服务
			    </div>
		</div>
    </div>
</template>


<style scoped>
	button:active{
		transform: scale(.95);
	}
	button:hover{
		filter: brightness(.9);
	}
</style>

<script>
    export default{
        name: 'part1',
        data() {
			return {
				serchinfo: '三角函数',
			}
		},
		methods:{
			hello() {
				this.$router.replace('/hello');
			},
		},
    }
</script>