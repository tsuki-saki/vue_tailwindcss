<template>
	<body class="font-Sara items-center overflow-x-hidden">
		<part1/>
		<part2/>
		<part3/>
		<part4/>
	</body>	
</template>

<style scoped>

</style>

<script>
	import part1 from './all_part/part1.vue'
	import part2 from './all_part/part2.vue'
	import part3 from './all_part/part3.vue'
	import part4 from './all_part/part4.vue'
	export default{
		data() {
			return {}
		},
		methods:{},
		created(){
		},
		components:{part1,part2,part3,part4},
	}
	//导航栏响应滚动变色
	window.onscroll=function(){
		var topScroll =window.pageYOffset;
		console.log(topScroll)
		var nav=document.getElementById("nav");
		if(topScroll>120){
			nav.style.backgroundColor = 'rgba(255,255,255,0.75)';
			nav.style.backdropFilter = 'blur(24px)';
		}
		else{
			nav.style.backgroundColor = '';
			nav.style.backdropFilter = '';
		}
	}
	
</script>