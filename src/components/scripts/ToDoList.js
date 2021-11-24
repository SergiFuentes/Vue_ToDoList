
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
