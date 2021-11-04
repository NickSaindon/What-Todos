<template>
  <div
    class="
      row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-1 row-cols-xl-2
    "
  >
    <div v-for="todo in allTodos" :key="todo.id" class="todos">
      <div class="card">
        <div class="row">
          <div class="col-2 cat-container">
            <div class="circle">
              <i
                v-if="todo.category === 'Personal'"
                class="bi bi-person-fill"
              ></i>
              <i v-else class="bi bi-briefcase-fill"></i>
            </div>
          </div>
          <div class="col-8">
            <div class="card-body">
              <h5 class="card-title">{{ todo.title }}</h5>
              <p class="card-text">
                {{ todo.description }}
              </p>
              <p class="card-text">
                <small class="text-muted">{{ todo.scheduled }}</small>
              </p>
            </div>
          </div>
          <div class="col-2">
            <div class="action-btns">
              <button
                @dblclick="onDoubleClick(todo)"
                v-bind:class="{ 'is-complete': todo.completed }"
                class="btn btn-primary"
                type="button"
              >
                <i v-if="todo.completed === false" class="bi bi-list-ul"></i>
                <i v-else class="bi bi-check-lg"></i>
              </button>
              <button class="btn btn-danger" type="button">
                <i @click="deleteTodo(todo.id)" class="bi bi-trash-fill"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "bootstrap-icons/font/bootstrap-icons.css";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Todos",
  methods: {
    ...mapActions(["fetchTodos", "deleteTodo", "updateTodo"]),
    onDoubleClick(currentTodo) {
      const updated = {
        id: currentTodo.id,
        category: currentTodo.category,
        title: currentTodo.title,
        description: currentTodo.description,
        scheduled: currentTodo.scheduled,
        completed: !currentTodo.completed,
      };
      this.updateTodo(updated);
    },
  },
  computed: {
    ...mapGetters(["allTodos"]),
  },
  created() {
    this.fetchTodos();
  },
};
</script>

<style scoped lang="scss">
.todos {
  margin: 10px 0;
}
.card {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-direction: inherit;
}
.is-complete {
  background: #198754;
}
.action-btns {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  button {
    margin: 5px 10px;
  }
}
.cat-container {
  display: flex;
  justify-content: center;
  align-items: center;
  .circle {
    height: 40px;
    width: 40px;
    border: 1px solid #0d6efd;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    i {
      font-size: 20px;
      color: #0d6efd;
    }
  }
}
</style>
