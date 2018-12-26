<template>
    <div>
        <h1>欢迎来到首页{{position}}</h1>
        <div>
            <button class="btn" data-clipboard-text="Just because you can doesn't mean you should — clipboard.js">
                Copy to clipboard
            </button>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import ClipboardJS from 'clipboard'
    export default {
        data:function(){
            return {
                position:"11"
            }
        },
        name: "index",
        mounted(){
            new ClipboardJS('.btn');
        },
        created(){
            var todayId=sessionStorage.getItem('id');
            if(!todayId) {
                var today = new Date();
                var month = (today.getMonth() + 1) > 9 ? (today.getMonth() + 1) : "0" + (today.getMonth() + 1);
                var day = today.getDate() > 9 ? today.getDate() : "0" + today.getDate();
                todayId = today.getFullYear() + "" + month + day;
                var url = "http://localhost:9090/home/add/" + todayId;
                axios.get(url).then(function () {

                })
                sessionStorage.setItem('id',todayId);
            }
        }
    }
</script>

<style scoped>

</style>

<style>
    *{
        margin: 0;
        padding: 0;
    }
</style>