<template>
  <div class= "container" >
    <h2 class="text-center mt-5">Vue_ToDoList</h2>

    <!-- Input -->
    <div class="d-flex">
        <input v-model="task" type="text" placeholder="Enter Task" class="form-control"> 
        <button @click="submitTask" type="submit" class="btn btn-warning rounded -0">SUBMIT</button>
    </div> 

    <!-- Task Table -->
    <table class="table table-bordered">
        <thead>
            <tr>
            <th scope="col">Task</th>
            <th scope="col">Status</th>
            <th scope="col" class="text-center">Edit</th>
            <th scope="col" class="text-center">Delete</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(task, index) in tasks" :key="index">
            <td>{{task.name}}</td>
            <td style="width: 120px"><span @click="changeStatus(index)" class="pointer">{{firstCharUpper(task.status)}}</span></td>
            <td>
                <div class="pointer text-center" @click="editTask(index)">
                    <span class="fa fa-pen" color="blue"></span>
                </div>
            </td>
            <td>
                <div class="pointer text-center" @click="deleteTask(index)">
                    <span class="fa fa-trash" color="red"></span>
                </div>
            </td>
            </tr>
        </tbody>
    </table>
    
  </div>
</template>

<script>
export default {
  name: 'ToDoList',
  props: {
    msg: String
  },


    data(){
        return {
            task:'',
            editedTask: null,
            availableStatuses: ['to-do', 'in-progress', 'done'],
            tasks: [
                
            ]
        }
    },

    methods: {
        submitTask(){
             if(this.task.length === 0) return;

             if(this.editedTask === null){
             this.tasks.push({
                name: this.task,
                status: 'To-do'
                });
             }else{
                this.tasks[this.editedTask].name = this.task;
                this.editedTask = null;
             }

             this.task = '';
        },

        deleteTask(index){
            this.tasks.splice(index,1);
        },

        editTask(index){
           this.task = this.tasks[index].name;
           this.editedTask = index;
        },

        changeStatus(index){
           let newIndex= this.availableStatuses.indexOf(this.tasks[index].status);
           if(++newIndex>2) newIndex = 0;
           this.tasks[index].status = this.availableStatuses[newIndex];
        },

        firstCharUpper(str){
            return str.charAt(0).toUpperCase() + str.slice(1);
        }
         
    }

};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pointer {
    cursor: pointer;
}

</style>