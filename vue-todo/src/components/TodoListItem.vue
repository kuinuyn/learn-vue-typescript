<template>
  <li>
    <span class="item" :class="todoItemClass" @click="toggleItem">{{ todoItem.title }}</span>
    <button @click="removeTodo">삭제</button>
  </li>
</template>

<script>
import {Todo} from '@/App.vue';
import Vue from 'vue';

export default Vue.extend({
  name: "TodoListItem",
  props: {
    todoItem: Todo,
    index: Number
  },
  methods: {
    toggleItem() {
      this.$emit("toggle", this.todoItem, this.index);
    },
    removeTodo() {
      this.$emit('remove', this.index)
    }
  },
  computed: {
    todoItemClass() {
      return this.todoItem.done ? 'complete' : null
    }
  }
})
</script>

<style scoped>
.item {
  cursor: pointer;
}
.complete {
  text-decoration: line-through;
}
</style>