<template>
  <div class="home">
    <ToDoList msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import ToDoList from '@/components/ToDoList.vue'


export default {
  name: 'Home',
  components: {
    ToDoList, 
  }
}
</script>
