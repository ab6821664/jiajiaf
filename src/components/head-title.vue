<template>
    <div>
       <header> {{title}} </header>
    </div>
</template>

<script>
    export default {
        name: "headTitle",
        props:["title"],
    }
</script>

<style scoped>
     header{
         height:2rem;
         background-color: #91b2ff;
         line-height:2rem;
         color:white;
     }
</style>