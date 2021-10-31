<template>
  <div class="container-fluid">
    <div class="todo-header">
      <div class="row justify-content-between">
        <div class="col-md-4">
          <router-link to="/addwhattodo">
            <button type="button" class="btn btn-primary">Add What Todo</button>
          </router-link>
        </div>
        <div class="col-md-4">
          <FilterTodos />
        </div>
      </div>
    </div>
    <Todos msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import Todos from "@/components/Todos.vue";
import FilterTodos from "@/components/FilterTodos.vue";

export default {
  name: "WhatTodos",
  components: {
    Todos,
    FilterTodos,
  },
};
</script>

<style lang="scss">
.todo-header {
  padding: 20px 0;
}
.filter {
  width: 100px;
}
</style>
