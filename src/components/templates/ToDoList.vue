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
                <td><span :class="{'done' : task.status === 'done'}">{{task.name}}</span></td>
                <td style="width: 120px"><span @click="changeStatus(index)" class="pointer" :class="{ 'text-warning' : task.status === 'in-progress', 'text-success' : task.status === 'done'}">{{firstCharUpper(task.status)}}</span></td>
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