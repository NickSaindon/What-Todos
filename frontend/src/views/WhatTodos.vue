<template>
  <div class="container-fluid">
    <div class="todo-header">
      <div class="row">
        <div class="col-12 text-center text-muted directions">
          <p>
            Double click to mark as completed: incomplete =
            <span class="square"><i class="bi bi-list-ul"></i></span>
            complete = <span><i class="bi bi-check-lg"></i></span>
          </p>
        </div>
      </div>
      <div class="row d-flex justify-content-between">
        <div class="col-4">
          <router-link to="/addwhattodo">
            <button type="button" class="btn btn-primary">Add What Todo</button>
          </router-link>
        </div>
        <div class="col-4">
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
.directions {
  margin: 10px 0;
  p {
    font-size: 14px;
    span {
      border-radius: 2px;
      &:nth-child(1) {
        background: #0d6efd;
        padding: 5px;
      }
      &:nth-child(2) {
        background: #198754;
        padding: 5px;
      }
      i {
        color: white;
      }
    }
  }
}
</style>
