<template>
    <div id="todoCell">
        <div v-show="edit == false">
            <label @dblclick="editing"> {{ cellContents }}</label>
        </div>
        <input
            ref="cellinput" 
            type="text" 
            v-show="edit == true" 
            v-model="cellContents"
            @keyup.enter="save(cellContents, column, index)"
            @blur="save(cellContents, column, index)">
    </div>
</template>

<script>
export default {
    props: {
        entry: String,
        index: Number,
        column: String
    },
    data: () => { return {
        edit: false,
        cellContents:null
    }},
    methods: {
        editing() { 
            this.edit = true
            this.$nextTick(function(){
                this.$refs.cellinput.focus()
            })
        },
        // So I can bind raw data to a table, but so far I haven't been able to 
        // find a way where it's also editable, so for now I'm inserting cell-by-cell,
        // and running a function to update it. 
        save(cellContents, column, index) {
            this.edit = false
            this.$store.dispatch('updateTodos',{index:index,column:column,contents:cellContents})
        }
    },
    mounted() {
        this.cellContents = this.entry
    }
}
</script>