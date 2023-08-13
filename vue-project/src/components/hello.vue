<template>
    <div class="container absolute flex items-center justify-center">
        <div class="text-5xl font-medium w-full text-center">
        Hello World!
        </div>
        <button @click="back" class="absolute top-20 flex-none border-2 rounded-full pl-10 pr-10 pt-3 pb-3 shadow bg-gradient-to-t from-p1_cbutton1 to-p1_cbutton2 text-white text-xl font-light">
            back
        </button>
    </div>
    
</template>

<script>
export default{
    data(){
        return{

        }
    },
    methods:{
        back(){
            this.$router.replace('/new_homepage')
        }
    }
}
</script>