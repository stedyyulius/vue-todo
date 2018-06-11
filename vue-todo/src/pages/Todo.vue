<template>
  <div>
    <h1>Vue Todo</h1>
    <TodoList />
    <input id="myTask" type="text" placeholder="type your todo here" v-if="isAdd" @keydown="(e) => createTodo(e.key)" v-model="task" />
    <button @click="onAdd" v-if="!isAdd">Create Todo</button>
  </div>
</template>

<script>
import TodoList from '../components/TodoList'

export default {
  components: {
    TodoList,
  },
  data () {
    return {
      isAdd: false,
      task: '',
    }
  },
  methods: {
    onAdd() {
      // document.getElementById("myTask").focus();
      this.isAdd = true;
    },
    createTodo(e) {
      if (e === 'Enter') {
        this.$store.dispatch('createTodo', this.task);
        this.task = '';
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css">

</style>
