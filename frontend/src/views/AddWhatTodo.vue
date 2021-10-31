<template>
  <div class="container-fluid">
    <div class="add-todo-header">
      <router-link to="/">
        <i class="bi bi-arrow-left"> back to what todos</i>
      </router-link>
    </div>
    <h3>Add What Todo</h3>
    <div class="add">
      <form class="row g-3" @submit="onSubmit">
        <div class="col-md-12">
          <label for="category" class="form-label">Category</label>
          <select v-model="category" class="form-select">
            <option disabled value>Select a Category</option>
            <option value="Personal">Personal</option>
            <option value="Business">Business</option>
          </select>
        </div>
        <div class="col-md-12">
          <label for="title" class="form-label">Title</label>
          <input
            v-model="title"
            type="text"
            class="form-control"
            id="title"
            placeholder="Title of what todo"
          />
        </div>
        <div class="col-md-12">
          <label for="description" class="form-label">
            Schedule Date and Time
          </label>
          <Datepicker
            v-model="scheduled"
            :is24="false"
            placeholder="Select Date and Time"
          />
        </div>
        <div class="col-md-12">
          <label for="description" class="form-label">Description</label>
          <textarea
            v-model="description"
            class="form-control"
            placeholder="Describe what you will be doing"
            rows="3"
          >
          </textarea>
        </div>
        <div class="col-md-12">
          <div class="add-todo-footer">
            <div class="d-grid gap-2 col-6 mx-auto">
              <button type="submit" value="Submit" class="btn btn-primary">
                Submit What Todo
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Datepicker from "vue3-date-time-picker";
import moment from "moment";

export default {
  name: "AddWhatTodo",
  components: {
    Datepicker,
  },

  data() {
    return {
      category: "",
      title: "",
      description: "",
      scheduled: "",
    };
  },
  methods: {
    ...mapActions(["addTodo"]),
    onSubmit(event) {
      event.preventDefault();
      const todo = {
        category: this.category,
        title: this.title,
        description: this.description,
        scheduled: moment(this.scheduled).format("lll"),
      };
      this.addTodo(todo),
        (this.category = ""),
        (this.title = ""),
        (this.description = ""),
        (this.scheduled = ""),
        this.$router.push("/");
    },
  },
};
</script>

<style scoped lang="scss">
.add-todo-header {
  padding: 20px 0;
}
.add-todo-footer {
  padding: 20px 0;
}
</style>
