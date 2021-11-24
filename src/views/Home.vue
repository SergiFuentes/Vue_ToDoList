<template>
  <div class="home">
    <ToDoList msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import About from './About.vue'


export default {
  name: 'Home',
  components: {
    About, 
  }
}
</script>
