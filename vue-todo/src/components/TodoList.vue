<template lang="html">
  <div>
    <div v-for="(task, i) in tasks">
      <p @click="setEdit(task, i)">
        {{task}}
        <button @click="$store.dispatch('deleteTask', i)">X</button>
      </p>
      <input type="text" v-model="input" v-if="isEdit === i" @keydown="(e) => editTask(e.key, i)"/>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['tasks'])
  },
  data() {
    return {
      isEdit: '',
      input: '',
    }
  },
  methods: {
    setEdit(task, i) {
      this.input = task;
      this.isEdit = i;
    },
    editTask(e, i) {
      if (e === 'Enter') {
        const payload = {
          index: i,
          input: this.input,
        };
        this.$store.dispatch('editTask', payload);
        this.input = '';
      }
    }
  },
};
</script>

<style lang="css">
</style>
