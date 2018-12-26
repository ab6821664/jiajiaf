<template>
    <div>
        {{title}}
    </div>
</template>

<script>
    export default {
        name: "Head",
        props:{
            title:String
        },
        created(){
            console.log('head create')
        }
    }
</script>

<style scoped>

</style>