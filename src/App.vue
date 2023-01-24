<template>
  <Header></Header>
  <RouterView></RouterView>
  <!-- <DateTimePicker2></DateTimePicker2> -->
  
</template>

<script>
import DateTimePicker2 from './components/DateTimePicker2.vue';
import Header from './components/Header.vue';
import DateTimePicker from './components/DateTimePicker.vue';

export default{
  components: {
    Header,
    DateTimePicker2,
    DateTimePicker
},
  mounted(){
    this.$router.afterEach((to, from) =>{
      this.title = to.meta.title;
    })
  }
}

</script>