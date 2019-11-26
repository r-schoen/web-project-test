<template>
    <div id="todoTable">
        <h1 id="header">To Do List</h1>
        <table class="table">
            <thead>
                <th v-for="(key, index) in gridColumns" v-bind:key="index">
                    {{ key }}
                </th>
                <th></th>
            </thead>
            <tbody>
                <tr v-for="(row, r_index) in this.todoData" v-bind:key="row.text">
                    <td v-for="(cell, c_index) in row" v-bind:key="cell">
                        <todo-cell :entry="cell" :index="r_index" :column="c_index"/>
                    </td>
                    <td>
                        <b-button 
                            @click="deleteTodo(r_index)"
                            variant="danger">Delete</b-button>
                    </td>
                </tr>
                <tr>
                    <td colspan="2"></td>
                    <td>
                        <b-button 
                            @click="addTodo()"
                            variant="success">Add</b-button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import TodoCell from "../components/TodoCell.vue"

export default {
    data: function(){ 
        return {
            gridColumns: ['Text','Due']
    }},
    methods: {
        deleteTodo(index) {
            console.log(`Deleting item with index ${index}`)
            this.$store.dispatch('deleteTodo',index)
        },
        addTodo(){
            this.$store.dispatch('addTodo')
        }
    },
    components: {
        TodoCell,
    },
    computed: {
        todoData() {
            return this.$store.getters.todoData
        }
    }
}
</script>