<template>
  <div class="home">


  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'home',
  components: {

  },
    mounted:function () {
     var newUser=localStorage.getItem("symbol");
     if(!newUser){
         localStorage.setItem('symbol',new Date().toString())
     }
       var t=localStorage.getItem('symbol');
       console.log(t);
    }
}
</script>
